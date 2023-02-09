<template>
  <div class="card" style="width: 18rem">
    <router-link
      :to="{ name: 'postId', params: { id: post.id } }"
      class="card-header"
      >{{ post.title }}</router-link
    >
    <ul class="list-group list-group-flush">
      <li class="list-group-item">username : {{ post.body }}</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style></style>
