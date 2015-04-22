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
	        	var jsonData = data.toJSON();
	        	$("#record").empty();
	        	_.each(jsonData,function(data) {
	        		var name = JSON.stringify(data.name[0]);
	        		$("#record").append("<div>"+name.replace(/^"(.*)"$/, '$1')+"</div>");
	        	});
	        	
	       }
	    });
	}
	
});

return userModel;

});