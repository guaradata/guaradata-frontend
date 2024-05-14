class LoginService {
  static validate(): Promise<boolean | undefined> {
    return fetch("http://localhost/api/user/me", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then(function (response) {
        if (response.status === 401) {
          return false;
        }
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        if (response.status === 200) {
          return true;
        }
      })
      .catch((error) => {
        console.error("Oh No! There was a problem: \n", error);
        return false;
      });
  }

  static async login(userAccess: object): Promise<boolean | undefined> {
    return await fetch("http://localhost/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userAccess),
    })
      .then(function (response) {
        if (response.status === 401) {
          return false;
        }
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        if (response.status === 200) {
          return true;
        }
      })
      .catch((error) => {
        console.error("Oh No! There was a problem: \n", error);
        return false;
      });
  }
}

export const LoginUtils = {
  LoginService,
};
