import { LoginUtils } from "~/composables/LoginService";

export default defineNuxtRouteMiddleware((to, from) => {
  const loginCookie = useCookie("access_token");
  if (loginCookie && loginCookie.value) {
    if (LoginUtils.LoginValidation.validate(loginCookie.value)) {
      nextTick();
    }
  } else {
    return navigateTo("/login");
  }
});
