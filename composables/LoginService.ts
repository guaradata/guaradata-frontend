class LoginService {
  static async validate(accessToken: string): Promise<boolean> {
    try {
      if (!accessToken) {
        return false;
      }
      return true;
    } catch (error) {
      console.error("Validation error:", error);
      return false;
    }
  }

  static async login(userAccess: object): Promise<string> {
    try {
      const response: string = await $fetch("http://localhost/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userAccess),
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }
}

export const LoginUtils = {
  LoginService,
};
