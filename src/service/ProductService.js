import Api from "@/service/api";

export default{
    getProducts(){
        return Api().get('/products')
    },
    getProduct(productId){
        return Api().get('/products/' + productId)
    },
    update(product, productId){
        return Api().patch('/products/' + productId, product)
    }
};