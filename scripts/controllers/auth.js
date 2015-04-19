'user strict'; 

app.controller('AuthController', function($scope, $location, Auth, toaster) { 

	if(Auth.signedIn()) { 
		$location.path('/');
	}

	$scope.register = function(user) { 
		Auth.register(user).then(function() { 
			toaster.pop('success', 'Sweet. Registered successfully');
			//console.log("Register successfully!"); 
			$location.path('/'); 
		}, function(err) { 
			toaster.pop('error', 'Rats, something went wrong!');
			//console.log("Registration error..."); 
		}); 
	}; 

	$scope.login = function(user) { 

		Auth.login(user)
		.then(function() { 
			toaster.pop('success', 'Sweet. Login successfully');
			//console.log("Logged in successfully!"); 
			$location.path('/'); 
		}, function(err) {
			toaster.pop('error', 'Rats, something went wrong');
			//console.log("Error..."); 
		}); 
	}; 

	$scope.changePassword = function(user) { 

		Auth.changePassword(user)
		.then(function() { 

			//Reset form 
			$scope.user.email = ''; 
			$scope.user.oldPass = ''; 
			$scope.user.newPass = ''; 

			toaster.pop('success', 'Sweet. Password changed successfully');
			//console.log("Password changed successfully!"); 
		}, function(err) { 
			toaster.pop('error', 'Rats, something went wrong');
		});
	}; 

}); 