<script setup lang="ts">
import { Search } from 'lucide-vue-next';

const emit = defineEmits(['onAddNew', 'onDeleteMultipleRecords']);

const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})

</script>

<template>
    <div class="grid grid-cols-1 gap-5 mb-5 xl:grid-cols-2">
        <div>
          <div class="relative xl:w-3/6">
              <input
                type="text"
                class="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 focus:ring-0 dark:focus:ring-0"
                placeholder="Search for ..."
                autocomplete="off"
              />
              <Search
                class="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
              />
            </div>
        </div>
        <div class="flex gap-2 ltr:md:justify-end rtl:md:justify-start">
          <TButton @click="emit('onAddNew')">
            <i class="align-bottom ri-add-line font-bold me-1" /> Add {{ title }}
          </TButton>
          <TButton color="red" icon @click="emit('onDeleteMultipleRecords')">
            <i class="ri-delete-bin-2-line text-lg" />
          </TButton>
        </div>
      </div>
</template>
