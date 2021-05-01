<template>
<div id="container">
    <div id="user">
        <div class="primary">
            <img class="user-image" src="../../../../assets/Icons/iconfinder_3_avatar_2754579.svg" alt="userIcon">
            <h6 class="name">{{ user.firstName }}  {{ user.lastName }}</h6>
        </div>
        <div class="meta">

        </div>
    </div>
</div>
</template>

<script>
import UserService from '@/service/UserService'

export default {
    methods:{
        getUser: function(){
            var split = window.location.pathname.split("/")
            var id = split[3];
            try{
                UserService.getUser(id).then((result) => {
                    this.user = result.data.user;
                }).catch(error => {
                    console.log(error)
                })
                } catch(error) {
                    console.log(error)
                }
        }
    },
    created() {
        this.getUser()
    },
    data() {
        return {
            user: Object,
        }
    }, 
    props: {
        userId: {type: String},
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
/* local styles */
section{
    height: 100vh;
}

#container{
    padding-top: 70px;
}

/* Small devices (landscape phones, 576px and up) */
@media only screen and (max-width: 576px) { 
    #user{
        height: 80vh;
        box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 25%);
        /* padding: 15px 15px 15px 15px; */
    }

    .primary{
        height: 40%;
        background-color: rgba(128, 128, 128, 0.529);
    }

    .user-image {
        max-width: 100px;
        padding-top: 20px;
    }
}

/* Medium devices (tablets, 768px and up) */
@media only screen and (min-width: 577px) and (max-width: 768px) {

}

/* Large devices (desktops, 992px and up) */
@media only screen and (min-width: 769px) and (max-width: 992px) {

}

/* Extra large devices (large desktops, 1200px and up) */
@media only screen and (min-width: 993px) {
  
}
</style>