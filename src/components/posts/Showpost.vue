<template>
  <div class="container">
    <div class="row">
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status"></div>
      </div>
      <div v-else class="col-md-4 g-3">
        <Postview :post="post">
          <div class="card-footer">
        <button @click="deletepost" class="btn btn-danger">delete</button>
        <router-link
          class="btn btn-primary m-2"
          :to="{ name: 'editpost', params: { id: post.id } }"
          >edit</router-link
        >
          </div>
        </Postview>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import Postview from "./Postview.vue";
import { useRoute } from "vue-router";
import Swal from "sweetalert2";
export default {
  components: { Postview },
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();
    function deletepost() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(() => {
          Swal.fire({
            title: "Thanks",
            text: "Post deleted",
            icon: "warning",
            confirmButtonText: "ok",
          });
        });
    }
    function getPosts(params) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((res) => {
          post.value = res.data;
          loading.value = false;
        });
    }
    getPosts();
    return { post, loading ,deletepost};
  },
};
</script>

<style scoped></style>
