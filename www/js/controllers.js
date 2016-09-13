angular.module('app.controllers', [])
 //angular.module('app.services', ['angularSoap']) 


.controller('LoginCtrl', function($scope) {
$scope.data={};//declaracaion del scope
$scope.login=function () {
    console.log("Login Usuario:"+$scope.data.username);
}
})
.controller('MyCtrlC', function ($scope, $ionicScrollDelegate) {
    console.log("Hola mundo");
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('Agenda');
        }).error(function(data) {
           var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
               template: 'Please check your credentials!'
            });
        });
    }
})

//nueva seccion
.run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
               
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        .controller('MyCtrl', function ($scope, $ionicScrollDelegate) {

            var startHour = 8;
            var endHour = 18;
            var usehalfhour = true;

            $scope.timerleft = '0px';

            $scope.hours = getHours();
            $scope.days = getDays();
            $scope.events = getEvents();

            function getHours()
            {
                var tmp = [];
                for (i = startHour; i <= endHour; i++)
                {
                    tmp.push(('0' + i).slice(-2) + ':00');
                    if (usehalfhour && i < endHour)
                    {
                        tmp.push(('0' + i).slice(-2) + ':30');
                    }
                }

                return tmp;
            }
            ;
            function getDays()
            {
                var tmp = [];
                var date1 = new Date();
                var date2 = new Date();
                date2.setDate(date2.getDate() + 1);
                var weekday = new Array(7);
                weekday[0] = "Domingo";
                weekday[1] = "Lunes";
                weekday[2] = "Martes";
                weekday[3] = "Miercoles";
                weekday[4] = "Jueves";
                weekday[5] = "Viernes";
                weekday[6] = "Sabado";

                var monthname = new Array(12);
                monthname[0] = "Enero";
                monthname[1] = "Febrero";
                monthname[2] = "Marzo";
                monthname[3] = "Abril";
                monthname[4] = "Mayo";
                monthname[5] = "Junio";
                monthname[6] = "Julio";
                monthname[7] = "Agosto";
                monthname[8] = "Septiembre";
                monthname[9] = "Octubre";
                monthname[10] = "Noviembre";
                monthname[11] = "Diciembre";
                tmp.push({day: weekday[date1.getDay()], longdate: weekday[date1.getDay()] + ', ' + monthname[date1.getMonth()] + ' ' + date1.getDate() + ', ' + date1.getFullYear(), datevalue: date1, dateformat: date1.toLocaleDateString()});                console.log(tmp);
                return tmp;
            }

            $scope.gotScrolled = function () {

                $scope.timerleft = $ionicScrollDelegate.getScrollPosition().left + 'px';
                $scope.$apply();

            };

            function getEvents() {
                var tmp = [];
                var date1 = new Date();
                tmp.push({eventname: 'Cesfam Cordillera    Cupos Disponibles :20', starthour: '08:00', endhour: '13:30', eventtype: 'ion-mic-c', room: 'Morpheus', left: (60 + 0 * 120) + 'px', top: (23 + 1*100) + 'px', height: (1.5 * 100) + 'px', color: 'rgba(0,157,151,0.75)', dateformat: date1.toLocaleDateString()});
                tmp.push({eventname: 'Networking + Coffee', starthour: '12:00', endhour: '14:00', eventtype: 'ion-chatbubbles', room: 'Morpheus', left: (60 + 0 * 120) + 'px', top: (23 + 5 * 100) + 'px', height: (1.75 * 100) + 'px', color: 'rgba(18,67,172,0.75)', dateformat: date1.toLocaleDateString()});
                return tmp;
            }
            ;

        });

//fin nueva seccion
//boton flotante
