<template>
  <div class="container mt-5">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            distinctio quos a optio ipsum doloremque neque at sapiente dolorem
            enim, odio natus tempora, quisquam fuga eveniet corrupti, ducimus
            itaque est.
          </p>
        </div>
        <div class="card-footer">

    <router-link class="btn btn-dark text-light" :to="{ name: 'user' }"
      >user</router-link
    >
    <router-link class="btn btn-primary m-2" :to="{ name: 'posts' }"
      >post</router-link
    >
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
