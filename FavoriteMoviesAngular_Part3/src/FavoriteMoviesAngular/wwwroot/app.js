!function(){"use strict";function config($routeProvider,$locationProvider){$routeProvider.when("/",{templateUrl:"/Views/list.html",controller:"MoviesListController"}).when("/movies/add",{templateUrl:"/Views/add.html",controller:"MoviesAddController"}).when("/movies/edit/:id",{templateUrl:"/Views/edit.html",controller:"MoviesEditController"}).when("/movies/delete/:id",{templateUrl:"/Views/delete.html",controller:"MoviesDeleteController"}),$locationProvider.html5Mode(!0)}config.$inject=["$routeProvider","$locationProvider"],angular.module("favMoviesApp",["ngRoute","moviesServices"]).config(config)}(),function(){"use strict";function MoviesListController($scope,Movie){$scope.movies=Movie.query()}function MoviesAddController($scope,$location,Movie){$scope.movie=new Movie,$scope.add=function(){$scope.movie.$save(function(){$location.path("/")})}}function MoviesEditController($scope,$routeParams,$location,$http,Movie){$scope.movie=Movie.get({id:$routeParams.id}),$scope.edit=function(){$http.put("/api/movies/"+$scope.movie.Id,$scope.movie).success(function(data,status,headers,config){$location.path("/")}).error(function(response,status,headers,config){$location.path("/")})}}function MoviesDeleteController($scope,$routeParams,$location,Movie){$scope.movie=Movie.get({id:$routeParams.id}),$scope.remove=function(){$scope.movie.$remove({id:$scope.movie.Id},function(){$location.path("/")})}}angular.module("favMoviesApp").controller("MoviesListController",MoviesListController).controller("MoviesAddController",MoviesAddController).controller("MoviesEditController",MoviesEditController).controller("MoviesDeleteController",MoviesDeleteController),MoviesListController.$inject=["$scope","Movie"],MoviesAddController.$inject=["$scope","$location","Movie"],MoviesEditController.$inject=["$scope","$routeParams","$location","$http","Movie"],MoviesDeleteController.$inject=["$scope","$routeParams","$location","Movie"]}(),function(){"use strict";function Movie($resource){return $resource("/api/movies/:id")}angular.module("moviesServices",["ngResource"]).factory("Movie",Movie),Movie.$inject=["$resource"]}();