class cartController{
  constructor($http) {
    let allProductArr = [];


    $http({
      method: 'GET',
      url: 'http://www.json-generator.com/api/json/get/bHwJUxxovC?indent=2'
    }).then(response => {
      this.list = response.data;
    });


    this.search = '';
    this.show = false;
    this.quantity = 0;
    this.productArr = allProductArr;
    this.totalPrice = 0;

    /**
     * Adding data to cart
     * @param photo - Url of the image
     * @param title - Product title
     * @param price - Product price
     */
    this.addToCart = (photo, title, price) => {
      let productObj = {};

      this.quantity++;

      productObj.photo = photo;
      productObj.title = title;
      productObj.price = price;

      allProductArr.push(productObj);

      this.totalPrice += price;
    };

    /**
     * Show cart if there are added products
     */
    this.showCart = () => {
      if (!this.show && this.quantity > 0 ){
        return this.show = true;
      }
       return this.show = false;
    }

  }
}

cartController.$inject = ['$http'];

export const shopComponent = {
  templateUrl: 'app/components/shop.html',
  controller: cartController
};
