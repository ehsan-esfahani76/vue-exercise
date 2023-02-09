<template>
  <div class="container">
    <div class="row">
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="col-md-4 g-3" v-for="user in users" :key="user.id">
        <Cardview :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref } from "@vue/reactivity";
import Cardview from "./Cardview.vue";
export default {
  components: { Cardview },
  setup() {
    const users = ref([]);
    const loading = ref(true);
    function getUsers(params) {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        users.value = res.data;
        loading.value = false;
      });
    }
    getUsers();
    return { users, loading };
  },
};
</script>

<style scoped>

</style>