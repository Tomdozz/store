<template>
<div class="listEntry">
    <span>{{ articleNumber }}</span>
</div>
    
</template>
<script>
export default {
    props:{
        articleNumber: {required: true, type: String},
        label: {required: true, type: String},
        manufacturer: {required: true, type: String},
        shortDescription: {type: String},
        extendedDescription: {type: String},
        mainCat: {required: true, type: String},
        subCat: {required: true, type: String}
    }
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