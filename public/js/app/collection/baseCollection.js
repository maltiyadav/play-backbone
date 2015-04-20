define(['jquery', 'underscore', 'backbone','app/model/baseModel'],function($, _, Backbone,baseModel){ 

var baseCollection = Backbone.Collection.extend({
	model : baseModel
	
});

return new baseCollection;

});