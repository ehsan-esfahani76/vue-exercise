<template>
  <div v-if="pageLoading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status"></div>
  </div>
  <div v-else class="container mt-5">
    <h2 class="my-4">Edit post :</h2>
    <Form @formData="updatepost" :button-loading="loading" :post="post" :page-loading="pageLoading" :button-text="'update'"/>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";
import Form from "../form/Form.vue";
export default {
  components: {
    Form,
  },
  setup() {
    const loading = ref(false);
    const pageLoading = ref(true);
    const post = ref({});
    const route = useRoute();
    function getPosts() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((res) => {
          post.value = res.data;
          pageLoading.value = false
        });
    }
    getPosts();

    function updatepost(form) {
      loading.value = true;
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
          id: route.params.id,
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then((res) => {
          loading.value = false;
          if (res.data) {
            Swal.fire({
              title: "Thanks",
              text: "Post Updated",
              icon: "success",
              confirmButtonText: "ok",
            });
          }
        });
    }

    return { updatepost, loading, post ,pageLoading};
  },
};
</script>

<style></style>
