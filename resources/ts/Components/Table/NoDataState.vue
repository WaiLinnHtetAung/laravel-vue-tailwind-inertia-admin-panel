<script setup lang="ts">
    const emit = defineEmits(['onAddNew']);
    defineProps({
        text: {
            type: String,
        }
    })
</script>

<template>
    <div class="text-center p-7 flex flex-col justify-center items-center gap-5">
        <img class="w-60" src="@/assets/images/start.png" alt="">
        <h5 class="mb-2">You have no data. <span class="text-custom-500 font-bold">Add Now !</span></h5>
        <div class="w-[200px] flex justify-center">
          <TButton @click="emit('onAddNew')"> {{ text }} </TButton>
        </div>
      </div>
</template>
