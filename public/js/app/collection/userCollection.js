define(['jquery', 'underscore', 'backbone','app/model/userModel'],function($, _, Backbone,userModel){ 

var userCollection = Backbone.Collection.extend({
	model : userModel
	
});

return new userCollection;

});