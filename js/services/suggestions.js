app.factory('suggestions', [function() {
	var demoSuggestions = {
		posts: [
			{
				title: 'Provide free snacks for all employees once per week',
				description: 'Snacks would be provided in the 2nd floor break room each Friday at 12pm.',
				upvotes: 15,
				id: 0,
				comments: []
			},
			{
				title: 'Hold company wide meetings once a month through video conference',
				upvotes: 9,
				id: 1,
				comments: []
			},
			{
				title: 'Require company email signatures to be in a standard format',
				description: 'We would provide a pre-determined layout and logo for all employees to include in their signitures.',
				upvotes: 7,
				id: 2,
				comments: []
			},
		]
	};
	return demoSuggestions;
}]);