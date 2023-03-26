<template>
  <MenuItems />
</template>

<script>
import { defineComponent } from "vue";
import MenuItems from "@/components/MenuItems";

export default defineComponent({
  name: "Home",
  components: {
    MenuItems,
  },
});
</script>
