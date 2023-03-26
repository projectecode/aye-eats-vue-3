<template>
  <q-page-container>
    <q-page padding>
      <div class="q-pa-md">
        <div class="row q-col-gutter-md">
          <div v-for="item in items" :key="item.id" class="col-3">
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
  name: "MenuItems",
  data() {
    return {
      items: [],
    };
  },
  async created() {
    console.log("created!");
    const response = await fetch(
      "https://my-json-server.typicode.com/projectecode/demo/menu"
    );
    // The response object, returned by the await fetch(), is a generic placeholder for multiple data formats.
    // response.json() is a method of the Response object that allows a JSON object to be extracted from the response. The method returns a promise, so you have to wait for the JSON: await response.json()
    this.items = await response.json();
    console.log(this.items);
    // fetch("https://my-json-server.typicode.com/projectecode/demo/menu")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     this.items = json;
    //     console.log("this.items", this.items);
    //   });
  },
};
</script>

<style></style>
