<script setup>
import { logoSm } from '@/assets/images/utils';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-700">
        <div>
            <Link href="/">
                <img class="w-20 h-20 fill-current text-gray-500" :src="logoSm" alt="">
            </Link>
        </div>

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-slate-500 shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
