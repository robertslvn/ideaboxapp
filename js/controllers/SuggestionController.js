app.controller('SuggestionController', [
	'$scope',
	'$routeParams',
	'suggestions',
	
	function ($scope, $routeParams, suggestions) {
		$scope.post = suggestions.posts[$routeParams.id];
		
		$scope.comments = $scope.post.comments;
		
		$scope.addComment = function () {
			
			// if input empty, don't submit.
			if (!$scope.comment || $scope.comment === "") {
				return;
			}
			
			// push comment into the suggestions.js service.
			$scope.comments.push({
				body: $scope.comment,
				upvotes: 0
			});
			
			// after submit, clear input
			$scope.comment = '';
		};
		
		$scope.upVoteComment = function (comment) {
			comment.upvotes += 1;
		};

		$scope.downVoteComment = function (comment) {
			comment.upvotes -= 1;
		};
	}
]);