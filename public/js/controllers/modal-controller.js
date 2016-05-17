angular.module('kendoGrid').controller('MainGrid', function($scope) {

            $scope.mainGridOptions = {
                dataSource: {
                   
                     data: [
                    {ProjName: "HDI", Sales:"wwww.1234.com", TipPro:"Reforma", Mkp:"75%", Despesa:"Taxi", Depcust:"10",Investimento:"notebook", 
                    InvCust:"100", Recurso:"Gerente de projeto", Nivel:"Principal", RecCusto:"40", Imposto:"ISS", Valor:"15%" }
                    ],
                    pageSize: 5,
                    serverPaging: true,
                    serverSorting: true
                },
                sortable: true,
                pageable: true,
                dataBound: function() {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
                },
                columns: [{
                    field: "ProjName",
                    title: "Projeto",
                    width: "120px"
                    },{
                    field: "Sales",
                    title: "Oportunidade Salesforce",
                    width: "120px"
                    },{
                    field: "TipPro",
                    title: "Tipo do Projeto",
                    width: "120px"
                    },{
                    field: "Mkp",
                    title: "Markup",
                    width: "120px"
                    }]
            };

            $scope.detailGridOptions = function(dataItem) {
                return {
                    dataSource: {
                      
                     data: [
                    {Imposto: "ISS", Valor:"15%", TipPro:"Reforma", City:"aaaa", }
                    ],
                        serverPaging: true,
                        serverSorting: true,
                        serverFiltering: true,
                        pageSize: 5
                        
                    },
                    scrollable: false,
                    sortable: true,
                    pageable: true,
                    columns: [
                    { field: "Imposto", title: "Imposto:", width: "190px" },
                    { field: "Valor", title: "Valor:", width: "190px" }
                    ]
                };
            };
        })