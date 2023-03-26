<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <q-toolbar-title> AYE EATS </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <MenuItems />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuItems from "@/components/MenuItems";

export default {
  name: "LayoutDefault",
  components: {
    MenuItems,
  },
};
</script>
