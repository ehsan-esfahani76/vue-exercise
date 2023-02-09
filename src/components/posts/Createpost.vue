<template>
  <div class="container mt-5">
    <h2 class="my-4">Create post :</h2>

    <Form @formData ="createpost" :button-loading="loading" :button-text="'create'"/>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import Form from "../form/Form.vue"
export default {
  components:{
    Form
  },
  setup() {
    const loading = ref(false);
    function createpost(form) {
      loading.value = true
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then((res) => {
          loading.value = false;
          if (res.data) {
            Swal.fire({
              title: "Thanks",
              text: "Post Created",
              icon: "success",
              confirmButtonText: "ok",
            });
          }
        });
    }
    

    return {loading,createpost };
  },
};
</script>

<style></style>
