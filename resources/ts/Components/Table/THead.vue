<script setup lang="ts">
import { TableHeaderType } from '@/Pages/types';
import { PropType } from 'vue';

    const props = defineProps({
        headerItems: {
            type: Array as PropType<TableHeaderType[]>,
            default: []
        },
    })

    const emit = defineEmits(['onSelectAll']);
</script>

<template>
    <thead class="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600" >
        <tr>
          <th
            class="px-3.5 py-2.5 font-semibold"
            v-for="(item, index) in headerItems"
            :key="'table-header-' + index"
            :style="`${item.value === 'id' ? 'display: none' : ''} `"
          >
            <span v-if="item.type && item.type == 'check'">
              <input
                class="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400"
                type="checkbox"
                value="option"
                id="checkAll"
                @click="emit('onSelectAll')"
              />
            </span>

            {{ item.title }}
          </th>
        </tr>
      </thead>
</template>
