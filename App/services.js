var serverurl = "";

angular.module("app.data", ["ngResource"])
    .config(function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
    })
    .factory("ClassUnit", function ($resource) {
        return $resource(
            serverurl + "/api/classunits/:Id",
            { Id: "@Id" },
            { update: { method: "PUT" },
            }
        );
    })
    .factory("Student", function ($resource) {
        return $resource(
            serverurl + "/api/students/:Id",
            { Id: "@Id" },
            { update: { method: "PUT" },
            }
        );
    })
    .service('loginservice', function ($http) {
        this.register = function (userInfo) {
            var resp = $http({
                url: "/api/Account/Register",
                method: "POST",
                data: userInfo
            });
            return resp;
        };

        this.login = function (userlogin) {
            var resp = $http({
                url: "/TOKEN",
                method: "POST",
                data: $.param({
                    grant_type: 'password',
                    username: userlogin.username, password: userlogin.password
                }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });
            return resp;
        };
    })
    .service('empservice', function ($http) {
        this.get = function () {

            var accesstoken = sessionStorage.getItem('accessToken');

            var authHeaders = {};
            if (accesstoken) {
                authHeaders.Authorization = 'Bearer ' + accesstoken;
            }

            var response = $http({
                url: "/api/EmployeeAPI",
                method: "GET",
                headers: authHeaders
            });
            return response;
        };
    })

// create: { method: "POST" },
// create: { method: "POST", isArray: true },
// save: { method:'POST', headers: [{'Content-Type': 'application/json'}] }

// $scope.wordImageTest.response = new WordImage();
// $scope.wordImageTest.response.$save();
// WordImage.save(data);