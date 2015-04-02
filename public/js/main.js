require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        baseView: 'app/view/baseView'
    },
    shim:{
    	'backbone' : {
			deps : [ 'underscore','jquery' ],
			exports : 'Backbone'
		},
		underscore: {	
		    exports: "_"
		}
    },
});

define(["jquery", "underscore", "backbone"],function ($, _, Backbone) {});