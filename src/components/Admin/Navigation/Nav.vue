<template>
<div id="navigation">
    <div class="logo">
        <span class="logoText">LifeArray</span>
    </div>
    <div class="nav-container">
        <div class="navbar">
            <div v-for="entry in navigation" :key="entry._id" class="nav-entry">
                <a v-bind:href= "entry.route">{{ entry.title }}</a>
                <div class="sub-nav hidden"> 
                    <div v-for="sub in entry.sub_items" :key="sub.title" class="sub-nav-entry">
                        <router-link to="sub.route">{{ sub.title }}</router-link>
                        <!-- <a v-bind:href= "sub.route">{{ sub.title }}</a> -->
                        <div class="description">{{ sub.description }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//import axios from 'axios';
import NavigationService from '@/service/NavigationService'
//const http = require('http');
//const url = 'http://la:3000/navigation'

export default {
    created() {
        try {
            NavigationService.getNavigation().then((result) => {
                this.navigation = result.data.data
                console.log(this.navigation)
                console.log(result.data)})
                .catch(error => {
                    console.log(error)
                })
        } catch (error){
            console.log(error)
        }
        // const instance = axios.create({
        //     // httpsAgent: new http.Agent({  
        //     //     rejectUnauthorized: false
        //     // })
        // });
        // instance.get(url)
        //     .then((result) => {
        //         this.navigation = result.data
        //         console.log(result.data)
        //     }).catch(error => {
        //         console.log(error)
        //     });
    },
    data () {
        return { 
            navigation: null
        }
    },
    methods: {
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
/* local styles */
#navigation{
    display: flex;
    position: fixed;
    width: 100%;
}

a {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    color: black;

}

.logo{
    flex: 0 0 20%;
    display: flex;
    justify-content: center;
}
.logoText{
    margin-top: 30px;
    font-size: 140%;
    font-family: 'Montserrat', sans-serif;
}
.nav-container{
    flex: 1;
}
.navbar{
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    -webkit-flex-direction: row; 
    flex-direction: row;
    margin-top: 30px;
}
.sub-nav{ 
    display: none;
    position: absolute;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 25%);
    padding: 15px 15px 15px 15px;
    width: 250px;
    transition: top 0.25s ease 0s;

}
.nav-entry{
    margin: 0 auto 0 0;
}

.nav-entry:hover .sub-nav.hidden{
     display: flex;
}
.sub-nav-entry{
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-bottom: 10px;
}
.sub-nav-entry a{
    margin-right: auto;
}
.description {
    margin-right: auto;
    font-family: 'Montserrat', sans-serif;
    font-size: 60%;
    margin-top: 5px;

}

</style>