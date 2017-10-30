angular.module("sportsStore", ["customFilters"])
.controller("sportsStoreCtrl", function ($scope) {
    $scope.data = {
        products: [{ name: "Proudct #1", description: "A Product", category: "Category #1", price: 100 },
                    { name: "Proudct #2", description: "A Product", category: "Category #1", price: 110 },
                    { name: "Proudct #3", description: "A Product", category: "Category #2", price: 210 },
                    { name: "Proudct #4", description: "A Product", category: "Category #3", price: 202 }
        ]
    };
});
angular.module("sportsStore")
.constant("productListActiveClass","btn-primary")
.controller("productListCtrl", function ($scope, $filter,productListActiveClass)
{
    var selectedCategory = null;
    $scope.selectCategory = function (newCategory) {
        selectedCategory = newCategory;
    }

    $scope.categoryFilterFn = function (product) {
        return selectedCategory == null || selectedCategory == product.category;
    }

    $scope.getCategoryClass=function (category)
    {
        return selectedCategory==category ?productListActiveClass : "";
    }
});
