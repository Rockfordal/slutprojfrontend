var serverurl = "";

angular.module("app.data", ["ngResource"])
    .config(function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
    })
    .factory("Student", function ($resource) {
        return $resource(
            serverurl + "/api/students/:Id",
            { Id: "@Id" },
            { update: { method: "PUT" },
            // create: { method: "POST" },
            // create: { method: "POST", isArray: true },
            // save: { method:'POST', headers: [{'Content-Type': 'application/json'}] }
            }
        );
    })

// $scope.wordImageTest.response = new WordImage();
// $scope.wordImageTest.response.$save();
// WordImage.save(data);