<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="navbar-brand" href="#">Navbar</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <router-link  to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link  to="/users">Users</router-link>
        </li>
        <li class="nav-item">
           <router-link  to="/posts">Posts</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a{
  margin: 0 20px;
  padding: 10px 0;
  text-decoration: none;
}

.router-link-active {
  color: green;
  font-weight: bold;
  border-bottom: 2px solid black;
}
.router-link-exact-active {
  color: red;
}
</style>
