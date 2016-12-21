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
                }
            }
        }
        var classUnitState = {
            name: 'classunits',
            url: '/classunits',
            component: 'classUnitIndex',
            resolve: {
                classunits: function() {
                    return sampleClassUnits;
                }
            }
        }
        var loginState = {
            name: 'login',
            url: '/login',
            component: 'loginIndex',
        }
    //  student: function(Student) {
    //      return Student.query();
    //  }

    $stateProvider.state(studentState);
    $stateProvider.state(classUnitState);
    $stateProvider.state(loginState);
    }); 

})();