app.controller('HomeController', [
	'$scope',
	'suggestions',
	
	function ($scope, suggestions) {
		// controller code here.
		$scope.posts = suggestions.posts;
		
		$scope.addSuggestion = function () {
			
			// if input empty, don't submit.
			if (!$scope.title || $scope.title === "") {
				return;
			}
			
			// push suggestion posts in suggestions.js.
			$scope.posts.push({
				title: $scope.title,
				description: $scope.description,
				upvotes: 0,
				id: $scope.posts.length,
				comments: []
			});
			// after submit, clear input
			$scope.title = '';
			$("[data-dismiss=modal]").trigger({ type: "click" });
		};
		
		$scope.upVote = function (post) {
			post.upvotes += 1;
		};
		$scope.downVote = function (post) {
			post.upvotes -= 1;
		};

	}
]);