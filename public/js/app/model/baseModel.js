define(['jquery', 'underscore', 'backbone'],function($, _, Backbone){ 

var baseModel = Backbone.Model.extend({
	
	urlRoot : "/createUser",
	 defaults: {
	    name: 'Malti Yadav',
	    email: 'maltiyadav@gmail.com'
	}
	
});


return baseModel;

});