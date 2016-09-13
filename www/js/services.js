angular.module('app.services', [])


.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

//nuevo codigo para crear un servicio de login
.service('LoginService', function($q,$http) {
    return {
        loginUser: function(name, pw,dom) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
        var msgdata = {
                message : ''
            };
            //validaciones de usuario y contraseña
          var respuesta='';
        var res = $http.get('http://172.16.0.169/RayenRumi/api/staff/login?user='+name+'&password='+pw,msgdata);
        res.success(function(data, status, headers, config) {
             
            respuesta=data;   
        });
        function isEmptyJSON(obj) {
  for(var i in obj) { return false; }
  return true;
}
console.log(respuesta);
            if (isEmptyJSON(respuesta)) {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;        
            
        }
    }
})
