import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Services from "../views/Services.vue";
import Contacts from "../views/Contacts.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/services", name: "Services", component: Services },
  { path: "/contacts", name: "Contacts", component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
