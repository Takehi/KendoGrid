(function(){
	'use strict';

    angular.module('kendoGrid').controller('homeController', [homeController]);


function homeController(){

var vm = this;

//vm.activate = activate;
activate();

function activate(){
    vm.investimentoOptions = {
        dataSource: {
        	data: [
     {name:"notebook", custo:20},
     {name:"servidores", custo:100},
      ]
 },
  dataTextField: "name",
  dataValueField: "custo",
  optionLabel: "Selecione um investimento."
    }
vm.recursoOptions = {
    dataSource: {
      data: [
  {name: "Gerente de Projeto", id:1, custo:10},
  {name: "Desenvolvedor", id:2, custo:20},
  {name: "Sales", id:3, custo:30},
      ]
    },
  dataTextField: "name",
  dataValueField: "custo",
  optionLabel: "Selecione um recurso."
    
}
vm.despesaOptions = {
    dataSource: {
      data: [
     {name:"taxi", custo:20},
     {name:"hotel", custo:100},
      ]
    },
  dataTextField: "name",
  dataValueField: "custo",
  optionLabel: "Selecione uma despesa."
    
}

vm.impostoOptions = {
    dataSource: {
      data: [
     {name:"ISS", custo:10},
     {name:"PIS", custo:13},
      ]
    },
  dataTextField: "name",
  dataValueField: "custo",
  optionLabel: "Selecione uma imposto."
    
}






  }
}

	





})();

