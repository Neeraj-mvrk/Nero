'use strict'
maverick.controller('instaController',function($http){
     var vm = this;
     // vm.init=function(){
     	$http({
    url: 'https://api.instagram.com/v1/users/self/media/recent/', 
    method: "GET",
    params: {access_token: '598985191.1677ed0.9527960ac79c417db8948befa138b1f2'}
 }).then(function success(resp){
		vm.data = resp.data;
	},function error(err){
	vm.error = err;
	});
 $http({
    url: 'https://api.instagram.com/v1/users/self/', 
    method: "GET",
    params: {access_token: '598985191.1677ed0.9527960ac79c417db8948befa138b1f2'}
 }).then(function success(resp){
		vm.pdata = resp.data;
	},function error(err){
	vm.error = err;
	});
     // }
     // vm.init();
     
    });