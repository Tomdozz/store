<template>
<div class="listEntry">
    <div id="icon">
        <img id="icon" src="../../../../assets/Icons/iconfinder_1_avatar_2754574.svg" alt="userIcon">
        <img @mouseover="credLevelHover = true" @mouseleave="credLevelHover = false" v-if=" credLevel == 2" class="desktop-only cred-icon-overlayed" id="cred-level-icon" src="../../../../assets/Icons/iconfinder_3_avatar_2754579.svg" alt="userIcon">
        <img @mouseover="credLevelHover = true" @mouseleave="credLevelHover = false" v-if=" credLevel == 3" class="desktop-only cred-icon-overlayed" id="cred-level-icon" src="../../../../assets/Icons/iconfinder_11_avatar_2754576.svg" alt="userIcon">
        <img @mouseover="credLevelHover = true" @mouseleave="credLevelHover = false" v-if=" credLevel == 4" class="desktop-only cred-icon-overlayed" id="cred-level-icon" src="../../../../assets/Icons/iconfinder_12_avatar_2754577.svg" alt="userIcon">
    </div>
    <span class="credlevel-message" v-if="credLevelHover">This users credlevel is {{credLevel}}</span>
    <div class="info">
        <div class="primary">
            <h4 class="username">{{ username }}</h4>
            <img v-if=" credLevel == 2" class="mobile-only" id="cred-level-icon" src="../../../../assets/Icons/iconfinder_3_avatar_2754579.svg" alt="userIcon">
            <img v-if=" credLevel == 3" class="mobile-only" id="cred-level-icon" src="../../../../assets/Icons/iconfinder_11_avatar_2754576.svg" alt="userIcon">
            <img v-if=" credLevel == 4" class="mobile-only" id="cred-level-icon" src="../../../../assets/Icons/iconfinder_12_avatar_2754577.svg" alt="userIcon">
        </div>
        <div class="meta">
            <h6 class="name">Name: {{ fistName }}  {{ lastName }}</h6>
            <h6 class="email">Email: {{ email }}</h6>            
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    el: '#user-list_entry',
    data() {
        return {
            credLevelHover: false,
        };
    },
    props: {
        email: {required: true, type: String},
        username: {required: true, type: String},
        fistName: {required: true, type: String},
        lastName: {required: true, type: String},
        credLevel: {required: true, type: String}
    }, 
  } 
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');


h3, h6, h4{
    font-family: 'Montserrat', sans-serif;
    color: black;
}

/* Small devices (landscape phones, 576px and up) */
@media only screen and (max-width: 576px) { 
    h4, h3, h6{
        margin: 0px;
    }
    .desktop-only{
        display: none;
    }
    .mobile-only{
        display: inline;
    }
    .listEntry{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 25%);
        padding: 15px 15px 15px 15px;
        margin-bottom: 3px;
        max-height: 50px;
        overflow: hidden;
    }

    .username{
        padding-right: 10px;
    }

    #icon{
        max-width: 40px;
        padding-right: 15px;
        flex-grow: 1;
    }

    #cred-level-icon{
        max-width: 20px;
    }
    .info{
        height: 100%;
        flex-grow: 4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .primary{
        height: 70%;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
    }

    .meta{
        display: flex;
        width: 100%;
        height: 30px;
        align-items: center;
    }

    .meta h6{
        padding-right: 5px;
        font-size: 45%;
    }
}

/* Medium devices (tablets, 768px and up) */
@media only screen and (min-width: 577px) and (max-width: 768px) {
        h4, h3, h6{
        margin: 0px;
    }
    .desktop-only{
        display: none;
    }
    .mobile-only{
        display: inline;
    }
   .listEntry{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 25%);
        padding: 15px 15px 15px 15px;
        margin-bottom: 3px;
        max-height: 50px;
        overflow: hidden;
    }

    .username{
        padding-right: 10px;
    }

    #icon{
        max-width: 40px;
        padding-right: 15px;
        flex-grow: 1;
    }

    #cred-level-icon{
        max-width: 20px;
    }
    .info{
        height: 100%;
        flex-grow: 4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .primary{
        height: 70%;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
    }

    .meta{
        display: flex;
        width: 100%;
        height: 30px;
        align-items: center;
    }

    .meta h6{
        padding-right: 5px;
        font-size: 65%;
    }
}

/* Large devices (desktops, 992px and up) */
@media only screen and (min-width: 769px) and (max-width: 992px) {
    h4, h3, h6{
        margin: 0px;
    }
    .desktop-only{
        display: inline;
    }
    .mobile-only{
        display: none;
    }
    .listEntry{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 25%);
        padding: 15px 15px 15px 15px;
        margin-bottom: 3px;
        max-height: 50px;
        overflow: hidden;
    }

    .username{
        padding-right: 10px;
    }

    #icon{
        height: 70px;
        max-width: 70px;
        padding-right: 15px;
        flex-grow: 1;
        align-self: center;
    }
    .cred-icon-overlayed{
        position: relative;
        z-index: 10;
        top: -36px;
        left: 13px;
    }
    .credlevel-message{
        position: relative;
        z-index: 10;
        top: -36px;
        left: 13px;
        color: black;
        font-family: 'Montserrat', sans-serif;
        color: black;
    }

    #cred-level-icon{
        max-width: 35px;
    }
    .info{
        height: 100%;
        flex-grow: 4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .primary{
        height: 70%;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
    }

    .meta{
        display: flex;
        width: 100%;
        height: 30px;
        align-items: center;
    }

    .meta h6{
        padding-right: 5px;
        font-size: 75%;
    }
}

/* Extra large devices (large desktops, 1200px and up) */
@media only screen and (min-width: 993px) {
       h4, h3, h6{
        margin: 0px;
    }
    .desktop-only{
        display: inline;
    }
    .mobile-only{
        display: none;
    }
    .listEntry{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 25%);
        padding: 15px 15px 15px 15px;
        margin-bottom: 3px;
        max-height: 90px;
        overflow: hidden;
        cursor: pointer;
    }

    .username{
        padding-right: 10px;
    }

    #icon{
        height: 100px;
        max-width: 100px;
        padding-right: 15px;
        flex-grow: 1;
        align-self: center;
    }
    .cred-icon-overlayed{
        position: relative;
        z-index: 10;
        top: -40px;
        left: 18px;
    }
    .credlevel-message{
        position: absolute;
        z-index: 15;
        transform: translate(35px, 35px);
        width: 300px;
        font-family: 'Montserrat', sans-serif;
        color: black;
        font-size: 80%;
        font-style: italic;
    }

    #cred-level-icon{
        max-width: 45px;
    }
    .info{
        height: 100%;
        flex-grow: 4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .primary{
        height: 70%;
        display: flex;
        align-items: center;
        padding-bottom: 5px;
    }

    .meta{
        display: flex;
        width: 100%;
        height: 30px;
        align-items: center;
    }

    .meta h6{
        padding-right: 5px;
        font-size: 75%;
    }
}

</style>