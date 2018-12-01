'use strict'
maverick.controller('portfolioController',function(){
     var vm = this;
     vm.date = new Date();
vm.sendMessage=function(formName){    
     var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
    vm.subject='';
    vm.mailFrom='';
    vm.message='';
}
     
    });