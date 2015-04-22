define(['jquery', 'underscore', 'backbone','app/collection/userCollection'],function($, _, Backbone,userCollection){ 

var userModel = Backbone.Model.extend({
	
	urlRoot : "/createUser",
	 defaults: {
	    name: '',
	    email: ''
	},
	
	saveDetails : function(details){
		this.save(details, {
	        success: function (data) {
	            console.log(data.toJSON());
	        }
		});
	},
	
	fetchDetails : function(){
		this.fetch({
	        success: function (data) {
	        	console.log(data.toJSON());
	       }
	    });
	}
	
});

return userModel;

});