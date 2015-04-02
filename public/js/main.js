require.config({
    paths: {
        jquery: 'js/libs/jquery/jquery',
        underscore: 'js/libs/underscore/underscore',
        backbone: 'js/libs/backbone/backbone',
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
    }
});
