Ext.define('NonQ.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
		    loginView: 'loginview',
		    mainMenuView: 'mainmenuview'
		},
		control: {
		    loginView: {
		        signInCommand: 'onSignInCommand'
		    }
		}
	},
	onSignInCommand: function(view, username, password) {
	 	console.log('sign in');
//	 	var loginView = this.getLoginView();
//	 	loginView.setMasked({
//	 			xtype:'loadmask',
//	 			message: 'Signing in...'
//	 		});
//	 	this.signInSuccess();
	},
	signInSuccess: function() {
	 	var loginView = this.getLoginView();
	 	var mainMenuView = this.getMainMenuView();
	 	loginView.setMasked(false);
	 	Ext.Viewport.animateActiveItem(mainMenuView, this.getSlideLeftTransition())
	},
	getSlideLeftTransition : function(){
		return {type: 'slide', direction: 'left'};
	},
	init: function() {
	 	console.log('inited');
	}
})