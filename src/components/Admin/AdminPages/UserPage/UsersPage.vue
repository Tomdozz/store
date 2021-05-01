<template>
<div id="container">
    <div v-for="user in users" :key="user._id" >
        <router-link :to="{ name: 'user', params: { userId: user._id }}">
            <UserListEntry 
                :email="user.email" 
                :fistName="user.firstName" 
                :lastName="user.lastName" 
                :username="user.userName"
                :credLevel="user.credLevel">
            </UserListEntry>
        </router-link>
    </div>
</div>
</template>

<script>
import UserService from '@/service/UserService'
import UserListEntry from '@/components/Admin/AdminPages/UserPage/UserListEntry'

export default {
    components: {
        UserListEntry,
    },
     created() {
        try {
            UserService.getUsers().then((result) => {
                this.users = result.data.data
                console.log(result.data)})
                .catch(error => {
                    console.log(error)
                })
        } catch (error){
            console.log(error)
        }
    },
    data () {
        return { 
            users: null
        }
    },
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

a {
    text-decoration: none;
}
#usersList{

}
#container{
    padding-top: 60px;
}
/* local styles */
section{
    height: 100vh;
}
</style>