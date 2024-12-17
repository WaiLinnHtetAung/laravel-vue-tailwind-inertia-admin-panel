<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import { setAttribute } from "@/Pages/utils";
import NavBar from "@/Components/Layouts/navbar/Index.vue";
import Menu from "@/Components/Layouts/menu/Index.vue";

const customizerDrawer = ref(false);
onMounted(() => {
  setAttribute("class", "light scroll-smooth group");
  document.body.setAttribute(
    "class",
    "text-base bg-body-bg text-body font-public dark:text-zink-100 dark:bg-zink-800 group-data-[skin=bordered]:bg-body-bordered group-data-[skin=bordered]:dark:bg-zink-700"
  );

  document.addEventListener("scroll", function () {
    windowScroll();
  });
});

const windowScroll = () => {
  var navbar = document.getElementById("page-topbar");
  if (navbar) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  }
};
onBeforeUnmount(() => {
  document.removeEventListener("scroll", function () {
    windowScroll();
  });
});
</script>
<template>
  <NavBar />
  <Menu />
</template>
