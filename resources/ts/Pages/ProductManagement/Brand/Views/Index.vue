<script setup lang="ts">
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import BrandListTable from "../Components/BrandListTable.vue";

import { BrandListType } from "../Types/BrandType";
import { PropType } from "vue";

defineProps({
    brands: {
        type: Array as PropType<BrandListType[]>,
        default: []
    },
})

</script>

<template>
    <AuthenticatedLayout>
        <Head title="Brand" />

        <BrandListTable :brands="brands" />
    </AuthenticatedLayout>
</template>
