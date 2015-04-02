'use strict';

angular.module('wallet')

   	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      	$stateProvider
      // 	.state('account', {
	     //  url: '/account',
	     //  templateUrl: 'user_modules/shared/account.html'
	     // })
	    .state('wallet',{
      		url:'/wallet',
      		templateUrl: '/user_modules/wallet/account.wallet.html'
      	});
      	// .state('account.wallet.income',{
      	// 	url:'/income',
      	// 	templateUrl: '/user_modules/wallet/wallet-income.html'
      	// })
      	// .state('account.wallet.expense',{
      	// 	url:'/expense',
      	// 	templateUrl: '/user_modules/wallet/wallet-expense.html'
      	// });
    $urlRouterProvider.otherwise('/');  
  }]);