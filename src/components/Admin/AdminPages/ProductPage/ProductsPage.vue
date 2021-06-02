<template>
<div id="container" >
    <div class="product-table-container">
        <table class="table">
            <thead>
                <th>...</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Category</th>
                <th>ArtNO</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product._id" >
                    <td></td>
                    <td>{{ product.label }}</td>
                    <td>400$</td>
                    <td>{{ product.mainCat }}</td>
                    <td>{{ product.articleNumber }}</td>
                    <td >
                        <img id="quick-edit" src="../../../../assets/Icons/quick_edit.svg" alt="quickedit" @click="selected(product)">
                    </td>
                </tr>
            </tbody>
        </table>
        <div id="product-meta">
            <div class="quick-edit" v-if=" selectedItem !== null">
                <div class="head"> 
                    <h3>{{ selectedItem.label }} : {{ selectedItem.articleNumber }} </h3> 
                </div>
                <div class="quick-edit-edit">
                    <div class="quick-edit-prodinfo">
                        <InputText id="mainCat" :placeholder="selectedItem.mainCat" hint="Main category" labelText="Main category" v-model="mainCat"/>
                        <InputText id="subCat" :placeholder="selectedItem.subCat" hint="Sub catecory" labelText="Sub catecory" v-model="subCat"/>
                        <InputText id="shortdes" :placeholder="selectedItem.shortDescription" hint="The short description that is shown in product list" labelText="Short Desc" v-model="shortDes"/>
                        <InputText id="extendedes" :placeholder="selectedItem.extendedDescription" hint="Edit full specs" labelText="Extended Desc" v-model="extendedDes"/>
                    </div>
                    <div class="quick-edit-pricing">
                         <InputText id="mainCat" :placeholder="selectedItem.mainCat" hint="Main category" labelText="Main category" v-model="mainCat"/>
                        <InputText id="subCat" :placeholder="selectedItem.subCat" hint="Sub catecory" labelText="Sub catecory" v-model="subCat"/>
                        <InputText id="shortdes" :placeholder="selectedItem.shortDescription" hint="The short description that is shown in product list" labelText="Short Desc" v-model="shortDes"/>
                        <InputText id="extendedes" :placeholder="selectedItem.extendedDescription" hint="Edit full specs" labelText="Extended Desc" v-model="extendedDes"/>
                 
                    </div>
                </div>

                <div class="actions">
                    <SaveButton :onClick="save">Save</SaveButton>
                    <SaveButton :onClick="saveAndClose">Save and close</SaveButton>
                    <SaveButton :onClick="off">Close</SaveButton>
                </div>
            </div>
            <span  @click="off">off</span>
        </div>
    </div>
</div>
</template>

<script>
import ProductService from '@/service/ProductService'
import SaveButton from '@/components/Admin/AdminComponents/SaveButton'
import InputText from '@/components/Admin/AdminComponents/InputText'

export default {
    data() {
        return {
            products: null,
            selectedItem: null,
            shortDes: '',
            extendedDes: '',
            mainCat: '',
            subCat: '',
        }
    },
    components: {
        SaveButton,
        InputText,
    },
   methods: {
        selected(element) {
            this.selectedItem = null;
            this.selectedItem = element;
            if (this.selectedItem){
                this.on();
            }
        },
        on() {
            document.getElementById("product-meta").style.display = "block"; 
        },
        off() {
            document.getElementById("product-meta").style.display = "none";
        },
        displayProductMeta(event){
            //document.querySelector(".product-meta.selected").style.display = "none";
            console.log(event)
        },
        save(){
            console.log('Save');
            console.log(this.registerFirstName)
        },
        saveAndClose(){
            console.log('Save and close');
            this.off();
        },

        consoleClick() {
            console.log('Button clicked')
        }
    },  
    created() {
        try {
            ProductService.getProducts().then((result) => {
                this.products = result.data.data
                console.log(result.data)}).catch(error => {
                    console.log(error)
                })
        } catch (error){
            console.log(error)
        }
    },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');


h3, h6, h4, th, td{
    font-family: 'Montserrat', sans-serif;
    color: black;
}

#container{
    padding-top: 80px;
    align-items: center;
}

.product-table-container{
    /* padding-top: 200px; */
}
.quick-edit-edit{
    display: flex;
    flex-wrap:wrap;
}

.quick-edit-edit > *{
    box-sizing: border-box;
    padding: 1rem;
    flex-basis:50%;
}

.quick-edit{
    position: absolute;
    border-radius: 5px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 25%);
    padding: 15px 15px 15px 15px;
    width: 40vw;
    height: 70vh;
    transition: top 0.25s ease 0s;
    top: 50%;
    left: 50%;
    transform: translate(-0%,-50%);
    -ms-transform: translate(0%,-50%);
    background-color: white
}

.quick-edit .head{
    border-bottom: 2px solid #ececec;
}

.quick-edit .actions{
    position: absolute;
    padding: 15px 15px 15px 15px;
    bottom: 0;
}

#product-meta{
    display: none;
    position: fixed; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
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
    .product-table-container{
        position: relative;
        top: 20vh;
        overflow: auto;
        height: 70vh;
    }
    .table{
        margin: 0 auto;
        table-layout: fixed;
        border-collapse: collapse;
        min-width: 1000px !important;
        width: 95%;
        box-shadow: 0px 5px 12px -12px rgb(0 0 0 / 29%);
    }
    .table thead th {
        position: sticky; 
        top: 0; 
        z-index: 1;
        border: none;
        padding: 30px;
        font-size: 14px;
        color: #000;
        border-bottom: 1px solid #ececec;
        background: #fff;
    }

    .table tbody tr {
        overflow: hidden;
        white-space: nowrap;
        border-bottom: 2px solid #ececec;
        background: #fff;
        cursor: pointer;
        width: 100%;
    }

    .table tbody td {
        overflow: hidden;
        border: none;
        padding: 30px;
        font-size: 14px;
    }
}
</style>