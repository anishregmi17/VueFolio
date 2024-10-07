import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Contacts from "../views/Contacts.vue";
import Services from "../views/Services.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/contacts", name: "Contacts", component: Contacts },
  { path: "/services", name: "Services", component: Services },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
