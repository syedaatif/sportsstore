angular.module("sportsStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 3)
    .controller("productListCtrl", function ($scope, $filter,
        productListActiveClass, productListPageCount, cart) {

        var selectedCategory = null;
        var x = true;
        var discount = false;
        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectdiscount = function () {

            discount = true;
        }



        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }

        $scope.addProductToCart = function (product) {
            cart.addProduct(product.id, product.name, product.price);
        }
        $scope.selectdiscount = function () {
            cart.putD();
         //   couponid = 10;
            $scope.putX();
         //   console.log("hoho");
         // return $scope.discount = false;

        }


        $scope.getX = function () {
            console.log("get x ran");
            return x;
        }

        $scope.putX = function () {
            console.log("put x ran");
            x = false;
        }
    });
