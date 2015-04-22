define(['jquery', 'underscore', 'backbone','app/model/userModel','app/collection/userCollection'],function($, _, Backbone,userModel,userCollection){ 

var userView = Backbone.View.extend({
	el : $('.container'),
	initialize : function(){
		this.render();
	},
	
	render : function(e){	
		console.log("Start render");
	},
	events : {
		"click #submit" : 'Submit'
	},
	
	Submit : function(e){
		e.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		 var userDetails = {
	        name: name,
	        email: email
		};
		 var userModelObj = new userModel(userDetails);
		 userModelObj.saveDetails(userDetails);
		 userModelObj.fetchDetails();
	}
	
});

return new userView;

});