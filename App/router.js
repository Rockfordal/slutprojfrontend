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

    angular.module("app").config(function($stateProvider) {
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
    //  student: function(Student) {
    //      return Student.query();
    //  }

    $stateProvider.state(studentState);
    }); 

})();