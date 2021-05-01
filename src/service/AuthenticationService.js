import Api from "@/service/api";

export default {
    register(credentials) {
      return Api().post("/users", credentials);
    },
    login(credentials) {
      return Api().post("/users/login", credentials);
    }
};