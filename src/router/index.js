import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Users from "../components/users/Users.vue";
import Posts from "../components/posts/Posts.vue";
import Showuser from "../components/users/Showuser.vue";
import Showpost from "../components/posts/Showpost.vue";
import Template from "../components/Template.vue";
import Createpost from "../components/posts/Createpost.vue"
import Editpost from "../components/posts/Editpost.vue"
const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/users",
    name: "users",
    component: Template,
    children: [
      { path: "", name: "user", component: Users },
      { path: ":id", name: "userId", component: Showuser },
    ],
  },
  { path: "/posts", name: "post", component: Template ,children:[
    { path: "", name: "posts", component: Posts},
    { path: ":id", name: "postId", component: Showpost},
    { path: "create", name: "createpost", component: Createpost},
    { path: "edit/:id", name: "editpost", component: Editpost},
  ]},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
