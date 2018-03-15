angular.module('ChegouAgua').controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $state, $ionicSideMenuDelegate, $window) {

	$scope.$on('unauthorizedResponseError', function (event) {
		if (event.defaultPrevented)
			return;

		event.defaultPrevented = true;
	});

	$scope.logout = function() {
		$state.go('/login');
	};

	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
}