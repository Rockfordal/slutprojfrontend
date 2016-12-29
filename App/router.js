(function () {
    "use strict"

    var sampleStudents =
    [ {  Id: 1, 
           FirstName: "Nils", 
           LastName: "Nilsson"
           // Files: { Id: 1, FileName: "History001.docx" }
      },
      {  Id: 2, 
         FirstName: "Lars", 
         LastName: "Larsson"
      } ];

    var sampleClassUnits =
    [ {  Id: 1, 
         Name: "Klass 1A", 
      },
      {  Id: 2, 
         Name: "Klass 1B", 
      } ];

    angular.module("app")
    .config(function($stateProvider) {
        var studentState = {
            name: 'students',
            url: '/students',
            component: 'studentIndex',
            resolve: {
                students: function() {
                    return sampleStudents;
                    // return ClassUnit.query();
                }
            }
        }
        var classUnitState = {
            name: 'classunits',
            url: '/classunits',
            component: 'classUnitIndex',
            resolve: {
                classunits: function(ClassUnit) {
                    return ClassUnit.query();
                    // return sampleClassUnits;
                }
            }
        }
        var loginState = {
            name: 'login',
            url: '/login',
            component: 'loginIndex',
        }
        var logoutState = {
            name: 'logout',
            url: '/logout',
            component: 'logoutIndex',
        }
        var registerState = {
            name: 'register',
            url: '/register',
            component: 'registerIndex',
        }

    $stateProvider.state(loginState);
    $stateProvider.state(logoutState);
    $stateProvider.state(registerState);

    $stateProvider.state(studentState);
    $stateProvider.state(classUnitState);
    }); 

})();