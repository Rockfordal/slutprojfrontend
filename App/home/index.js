(function () {
"use strict"

angular.module("app")
.component("homeIndex", {
    templateUrl: "/App/home/index.html",
    controllerAs: "model",
    controller: function () {
        var vm = this;
    }
});

})();