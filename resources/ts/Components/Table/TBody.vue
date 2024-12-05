<script setup lang="ts">
import { TableHeaderType } from '@/Pages/types';
import { UserListType } from '@/Pages/UserManagement/User/Types/UserType';
import { PropType } from 'vue';

    const props = defineProps({
        headerItems: {
            type: Array as PropType<TableHeaderType[]>,
            default: []
        },
        tableData: {
            type: Array as PropType<UserListType[]>,
            default: []
        },
    })
</script>

<template>
    <tbody class="list form-check-all"  v-if="tableData && tableData.length > 0">
        <tr
          v-for="(item, index) in tableData"
          :key="'table-row-' + index"
          :class="`${item.isActive ? 'active' : ''}`"
        >
          <td
            v-for="(header, index) in headerItems"
            :key="'basic-table-tr-' + index"
            class="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500 id"
            :class="`${header.value}`"
            :style="`${header.value === 'id' ? 'display: none' : ''} `"
          >
            <slot :name="header.value" :value="item">
              {{ item[header.value] }}
            </slot>
          </td>
        </tr>
      </tbody>
</template>
