(function () {
    "use strict"

    angular.module("app").component('menuBar', {
        bindings: {
            // students: '<'
            // studygroups: '<'
        },
        templateUrl: '/App/navbar/index.html',
        controllerAs: "model",
        controller: function() {
            this.menus = [{
                name: "Students",
                state: "students"
            }
            // , {
            //     name: "Klasser",
            //     state: "studygroups"
            // }
            ];
        }
    });

})();