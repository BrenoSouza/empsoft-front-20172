angular.module('ChegouAgua').controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $state) {

	$scope.login = login;
	$scope.goToSignup = goToSignup;
	
	$scope.$on('$ionicView.beforeEnter', function () {

	});

	function login() {
		let user = $scope.user;
        $state.go('app.home', {user}, { reload: true });
	};

	function goToSignup() {
		$state.go('signup');
	}

}