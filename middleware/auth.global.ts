import { LoginUtils } from "~/composables/LoginService";

export default defineNuxtRouteMiddleware(async (to) => {
  const isAuthenticated = await LoginUtils.LoginService.validate();
  if (to.path === "/login" && isAuthenticated) {
    return;
  }
  if (to.path.includes("/manage-content") && !isAuthenticated) {
    return navigateTo("/login");
  }
});
