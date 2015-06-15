var app=angular.module("app",["ngRoute","ngCookies","ngMockE2E","n3-pie-chart"]).config(["$routeProvider",function(n){n.when("/",{templateUrl:"partials/pie_chart.html",controller:"MainCtrl"}).when("/signin",{templateUrl:"partials/signin.html",controller:"UserCtrl"}).when("/signup",{templateUrl:"partials/signup.html",controller:"UserCtrl"}).otherwise({redirectTo:"/"})}]).run(["$location","$cookies","$httpBackend","UserService","ChartService",function(n,r,e,t,o){e.whenGET(/\.html$/).passThrough(),e.whenPOST("/auth").respond(function(n,r,e){var o=angular.fromJson(e);return t.findUser(o.login,o.password,!1)?[200,"Ok",{}]:[401,"Unauthorized",{}]}),e.whenPOST("/reg").respond(function(n,r,e){var o=angular.fromJson(e);return t.findUser(o.login,"",!0)?[403,"Forbidden",{}]:(t.addUser(o),[200,"Ok",{}])}),e.whenGET("/chart_data").respond(o.getData()),n.path("true"===r.get("isLogged")?"/":"/signup"==n.path()?"/signup":"/signin")}]);app.controller("UserCtrl",["$scope","$location","$cookies","$http",function(n,r,e,t){var o="/signin"==r.path()?"/auth":"/reg";n.userInput=function(){t.post(o,{login:n.user.login,password:n.user.password}).success(function(n,t,o,a){e.put("isLogged",!0),r.path("/")}).error(function(r,e,t,o){n.errors=!0})}}]),app.controller("MainCtrl",["$scope","$location","$cookies","$http",function(n,r,e,t){n.options={thickness:90},t.get("/chart_data").success(function(r,e,t,o){n.data=r}),n.signOut=function(){e.put("isLogged",!1),r.path("/signin")}}]),app.factory("UserService",["$httpBackend",function(n){var r=[{login:"test",password:"test"},{login:"admin",password:"12345"},{login:"simple_user",password:"12345"}];return{getUsers:function(){return r},findUser:function(n,e,t){var o=!1;return angular.forEach(r,function(r){t?o||r.login!=n||(o=!0):o||r.login!=n||r.password!=e||(o=!0)}),o},addUser:function(n){r.push(n)}}}]),app.factory("ChartService",["$httpBackend",function(n){var r=[{label:"One",value:25,color:"#18BC9C"},{label:"Two",value:75,color:"#e74c3c"},{label:"Three",value:45,color:"#F39C12"},{label:"Four",value:15,color:"#3498DB"}];return{getData:function(){return r}}}]);