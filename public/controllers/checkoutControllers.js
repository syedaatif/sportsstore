angular.module("sportsStore")
.controller("cartSummaryController", function ($scope, cart) {

    $scope.cartData = cart.getProducts();

    //$scope.discount = function () {
      //  discount = true;
    //}

    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartData.length; i++) {
            total += ($scope.cartData[i].price * $scope.cartData[i].count);
          ////  var discount = false;
          //  selectdiscount(){
          //      discount = true;

          //  }
          //  if (discount == true) {
          //      total = total - 10;
          //  }
        }
        var y = cart.getD();
        if ( y == true) {
            return total - 100;
        }
        else {
            return total;
        }
    }

    $scope.remove = function (id) {
        cart.removeProduct(id);
    }
   
});
