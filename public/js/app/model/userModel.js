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
		})
	},
	
	fetchDetails : function(){
		this.fetch({
	        success: function (data) {
	        	console.log(data.toJSON());
	        	
	        	/*data.each(function(user){
	        		var obj = jQuery.parseJSON(user);
	        		var name = obj.name;
	        		var email = obj.email
	        		var dat = this({name : name , email : email})
	        		new userCollection([dat]);
	        	});*/
	        }
	    })
	}
	
});

return userModel;

});