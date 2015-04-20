define(['jquery', 'underscore', 'backbone','app/collection/baseCollection','app/model/baseModel'],function($, _, Backbone,baseCollection,baseModel){ 

var baseView = Backbone.View.extend({
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
		var name = $("#name").val();
		var email = $("#email").val();
		var baseModelObj = new baseModel();
		 var userDetails = {
	        name: name,
	        email: email
		};
		 baseModelObj.save(userDetails, {
	        success: function (user) {
	            console.log(user.toJSON());
	        }
		})
	}
	
});

return new baseView;

});