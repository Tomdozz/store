import Api from "@/service/api";

export default {
    getNavigation() {
        return Api().get('/navigation');
    }
}