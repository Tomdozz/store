import Api from "@/service/api";

export default {
    getUsers(){
        return Api().get('/users')
    },
    getUser(userId){
        var uri = '/users/' + userId;
        return Api().get(uri)
    }
};