<template>
  <div class="container">
    <div class="row">
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="col-md-4 g-3">
        <Cardview :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import Cardview from "./Cardview.vue";
import { useRoute } from "vue-router";
export default {
  components: { Cardview },
  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();
    function getUser(params) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then((res) => {
          user.value = res.data;
          loading.value = false;
        });
    }
    getUser();
    return { user, loading };
  },
};
</script>

<style scoped></style>
