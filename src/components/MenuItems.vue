<template>
  <q-page-container>
    <q-page padding>
      <div class="q-pa-md">
        <div class="row q-col-gutter-md">
          <div v-for="item in menu" :key="item.id" class="col-3">
            <q-card>
              <q-img :src="item.img" />
              <q-card-section>
                <div class="text-h6">{{ item.title }}</div>
                <q-chip outline color="teal" text-color="white">
                  {{ item.category }}
                </q-chip>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      menu: [],
    };
  },
  created() {
    console.log("created!");
    fetch("https://my-json-server.typicode.com/projectecode/demo/menu")
      .then((res) => res.json())
      .then((json) => {
        this.menu = json;
        console.log("this.menu", this.menu);
      });
  },
};
</script>

<style></style>
