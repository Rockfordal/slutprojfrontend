(function () {
    "use strict"

    angular.module('app').component('menuBar', {
        bindings: {
            // students: '<'
            // studygroups: '<'
        },
        templateUrl: '/App/navbar/index.html',
        controllerAs: 'model',
        controller: function() {
            this.menus = [
                // {
                //     name: "Hem",
                //     state: "home"
                // },
                {
                    name:  "Studenter",
                    state: "students"
                },
                {
                    name:  "Klasser",
                    state: "classunits"
                },
                {
                    name:  "Login",
                    state: "login"
                }
            ];
        }
    });

})();