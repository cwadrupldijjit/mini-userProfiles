var app = angular.module('UserProfiles');

app.controller('MainController', ['MainService', function(MainService) {
	this.getUsers = function() {
		return this.users;
	};
	
	this.users = MainService.getUsers();
	
	this.getUsers();
}]);