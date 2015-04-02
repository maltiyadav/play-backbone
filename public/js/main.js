require.config({
    paths: {
        jquery: 'libs/jquery/jquery',
        underscore: 'libs/underscore/underscore',
        backbone: 'libs/backbone/backbone',
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