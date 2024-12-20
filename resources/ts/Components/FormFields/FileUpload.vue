<script lang="ts" setup>
import { useDropzone } from "vue3-dropzone";
import { UploadCloud } from "lucide-vue-next";
import { watch, ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";

const uploadedFiles = ref<any[]>([]);
const props = defineProps({
  multiple: {
    type: Boolean,
    default: false
  },
  dashed: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  image: {
    type: [File,String],
    default: ''
  }
});

const emit = defineEmits(["uploadFiles"]);

onMounted(() => {
  if(props.image) {
    uploadedFiles.value = [
      {
        src: props.image,
        name: 'Existed image',
        size: null,
        raw: {},
        id: uuidv4()
      }
    ];
  }
})

const { getRootProps, getInputProps, open, acceptedFiles, fileRejections } =
  useDropzone({
    multiple: props.multiple
  });

watch(acceptedFiles, (files: any) => {
  if (props.multiple) {
    files.forEach((file: any) => {
      uploadedFiles.value.push({
        src: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        raw: file,
        id: uuidv4()
      });
    });
  } else {
    uploadedFiles.value = [
      {
        src: URL.createObjectURL(files[0]),
        name: files[0].name,
        size: files[0].size,
        raw: files[0],
        id: uuidv4()
      }
    ];
  }

  emit("uploadFiles", uploadedFiles.value);
});

const onDelete = (image: any) => {
  uploadedFiles.value = uploadedFiles.value.filter(
    (item) => item.id !== image.id
  );

  fileRejections.value.push(image.raw);
  emit("uploadFiles", uploadedFiles.value);
};


</script>
<template>
  <div>
    <div
      class="flex items-center justify-center border rounded-md cursor-pointer dropzone   "
      :class="`${
        dashed
          ? 'bg-white dark:bg-zink-700 border-dashed '
          : 'bg-slate-100 dark:bg-zink-600 '
      } ${error ? 'border-red-500 dark:border-red-500' : 'border-slate-200 dark:border-zink-500'}`"
      @click="open"
    >
      <div class="fallback" v-bind="getRootProps()">
        <input
          v-bind="getInputProps()"
          name="file"
          type="file"
          accept="image/*"
        />
      </div>
      <div class="w-full py-5 text-lg text-center dz-message needsclick">
        <div class="mb-3">
          <UploadCloud
            class="block size-12 mx-auto text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500"
          />
        </div>

        <h5 class="mb-0 font-normal text-slate-500 text-15">
          Drag and drop your files or <a href="#!">browse</a> your files
        </h5>
      </div>
    </div>
    <ul>
      <simplebar class="max-h-[350px]">
        <li
          v-for="image in uploadedFiles"
          :key="'image-' + image.id"
          class="mt-2"
        >
          <div class="border rounded border-slate-200 dark:border-zink-500">
            <div class="flex p-2">
              <div class="shrink-0 me-3">
                <div
                  class="p-2 rounded-md size-14 bg-slate-100 dark:bg-zink-600"
                >
                  <img
                    class="block w-full h-full rounded-md"
                    :src="image.src"
                    :alt="'Dropzone-Image-' + image.id"
                  />
                </div>
              </div>
              <div class="grow">
                <div class="pt-1">
                  <h5 class="mb-1 text-15">{{ image.name }}</h5>
                  <p class="mb-0 text-slate-500 dark:text-zink-200" v-if="image.size">
                    {{ (Number(image.size) / 1024).toFixed(2) }} kb
                  </p>
                  <!-- <strong class="error text-danger" data-dz-errormessage></strong> -->
                </div>
              </div>
              <div class="shrink-0 ms-3">
                <TButton
                  color="red"
                  classes="px-2 py-1"
                  @click="onDelete(image)"
                >
                  Delete
                </TButton>
              </div>
            </div>
          </div>
        </li>
      </simplebar>
    </ul>
  </div>
</template>
