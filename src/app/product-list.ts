export class Product {
    productId: number;
    productName: string;
    productSKU: string;
    firstName: string;
    productPrice: string;

    constructor (data:any = {}){
        this.productId = data.productId || '';
        this.productName = data.productName || '';
        this.productSKU = data.productSKU || '';
        this.firstName = data.firstName || '';
        this.productPrice = data.productPrice || '';
    
    }

}