require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        userView: 'app/view/userView'
    },
    shim:{
    	'backbone' : {
			deps : [ 'underscore','jquery' ],
			exports : 'Backbone'
		},
		underscore: {	
		    exports: "_"
		},
		'userView' : {
			deps : [ 'backbone']
		}
    },
});
require(["jquery", "underscore", "backbone","userView"],function ($, _, Backbone,userView) {});
