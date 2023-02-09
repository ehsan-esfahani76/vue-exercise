<template>
  <div class="container">
    <router-link class="btn btn-dark" :to="{ name: 'createpost' }"
      >create</router-link
    >
    <div class="row">
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="col-md-4 g-3" v-for="post in posts" :key="post.id">
        <Postview :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import Postview from "./Postview.vue";
export default {
  components: { Postview },
  setup() {
    const posts = ref([]);
    const loading = ref(true);
    function getPosts(params) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        posts.value = res.data;
        loading.value = false;
      });
    }
    getPosts();
    return { posts, loading };
  },
};
</script>

<style scoped></style>
