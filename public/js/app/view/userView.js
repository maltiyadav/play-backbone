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
		if(name && email){
			var checkEmail = this.validateEmail(email);
			if(checkEmail){
				 var userDetails = {
			        name: name,
			        email: email
				};
				 var userModelObj = new userModel(userDetails);
				 userModelObj.saveDetails(userDetails);
				 this.fetchDetails(userModelObj);
			}else{
				$("#error").show();
				$("#error").html("*Please enter correct email id");
			}
		}else{
			$("#error").show();
		}
	},
	
	validateEmail : function(emailID){
    	if(emailID.length != 0){
			var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
			var emailStatus = pattern.test(emailID);
			return emailStatus;
    	}
	},
	
	fetchDetails : function(userModelObj){
		userModelObj.fetch({
	        success: function (data) {
	        	var jsonData = data.toJSON();
	        	$("tbody").empty();
	        	_.each(jsonData,function(data) {
	        		var name = JSON.stringify(data.name[0]);
	        		var email = JSON.stringify(data.email[0]);
	        	var record ="<tr>"+
			         "<td>"+name.replace(/^"(.*)"$/, '$1')+"</td>"+
			         "<td>"+email.replace(/^"(.*)"$/, '$1')+"</td>"+
			         "<td><button type=\"button\" class=\"btn btn-danger\">Delete</button></td>"+
			      "</tr>";
	        		
	        		$("tbody").append(record);
	        	});
	       }
	});
	}
	
});

return new userView;

});