<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import UserListTable from "../Components/UserListTable.vue";

import { UserListType } from '../Types/UserType';
import { PropType } from "vue";

defineProps({
    users: {
        type: Array as PropType<UserListType[]>,
        default: []
    },
})

</script>

<template>
    <AuthenticatedLayout>
        <Head title="Users" />

        <UserListTable :users="users" v-if="users.length > 0" />
    </AuthenticatedLayout>
</template>
