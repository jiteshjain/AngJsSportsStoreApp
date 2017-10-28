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
angular.module("sportsStore").controller("productListCtrl", function ($scope,$filter)
{
    var selectCategory = null;
    $scope.selectCategory = function (newCategory) {
        selectCategory = newCategory;
    }

    $scope.categoryFilterFn = function (product) {
        return selectCategory == null || selectCategory == product.category;
    }
});
