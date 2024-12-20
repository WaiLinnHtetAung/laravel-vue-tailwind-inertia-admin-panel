<script lang="ts" setup>
import { X } from "lucide-vue-next";
import { computed, PropType, ref } from "vue";
import { required, email, minLength } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { BrandPayloadType } from "../Types/BrandType";

const emit = defineEmits(["update:modelValue", "onAddUpdate", "onSubmitted"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  formData: {
    type: Object as PropType<BrandPayloadType>,
    default: {}
  },
  isEdit: {
    type: Boolean,
    default: false
  },
  formName: {
    type: String,
    default: ""
  }
});

const preparedPayloadData:any = ref(props.formData);

const rules = {
  name: { required },
};

//define validation
const v$ = useVuelidate(rules, preparedPayloadData.value, { $lazy: true });


const createEditModal = computed({
  get() {
    return props.modelValue;
  },
  set(newVal: boolean) {
    emit("update:modelValue", newVal);
  }
});

const onFileUploaded = (file: any) => {
    preparedPayloadData.value.image = file[0]?.raw;
};

const uploadForm = async () => {
  v$.value.$touch(); // Trigger validation

  if(!v$.value.$invalid) {
      emit('onSubmitted', {...preparedPayloadData.value});
  }

  return;
};

</script>
<template>
  <TModal v-model="createEditModal" size="default">
    <template #content>
      <div
        class="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500"
      >
        <h5 class="text-16" id="exampleModalLabel">
          {{ isEdit ? `Update ${formName}` : `Add ${formName}` }}
        </h5>
        <TButton
          icon
          variant="plain-soft"
          class="p-0"
          color="slate"
          @click="createEditModal = false"
        >
          <X />
        </TButton>
      </div>
      <div class="p-4">
        <div class="mb-5" v-if="v$.$errors.length > 0">
            <TAlert color="red" border-top>
              <span class="font-bold">Error</span>
              Please fill required fields.
            </TAlert>
        </div>
        <TInputField
          v-model="preparedPayloadData.name"
          label="Brand Name"
          placeholder="Enter username"
          required
          class="mb-5 "
          :error="v$.name.$error"
          :errorMessage="v$.name.$errors[0]?.$message"
        />

        <TCard title="Location Image">
            <TFileUploader :image="preparedPayloadData.image"  @uploadFiles="onFileUploaded" dashed />
          </TCard>


        <div class="flex gap-2 justify-end mt-3">
          <TButton color="slate" @click="createEditModal = false">
            Close
          </TButton>
          <TButton color="orange" @click="uploadForm">
            {{ isEdit ? "Update" : `Create ${formName}` }}
          </TButton>
        </div>
      </div>
    </template>
  </TModal>
</template>
