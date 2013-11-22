Ext.define('NonQ.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
		    loginView: 'loginview',
		    mainMenuView: 'mainmenuview',
		    menuView: 'menuview'
		},
		control: {
		    loginView: {
		        signInCommand: 'onSignInCommand'
		    },
		    mainMenuView:{
		    	menuShowCommand: 'onMenuShowCommand'
		    },
		    menuView:{
		    	menuHideCommand: 'onMenuHideCommand'
		    }
		    
		}
	},
	onMenuHideCommand : function(){
		var menuView = this.getMenuView();
		menuView.hide();
	},
	onMenuShowCommand: function(){
		var menuView = this.getMenuView();
		menuView.show();
	},
	onSignInCommand: function(view, username, password) {
	 	console.log('sign in');
	 	var loginView = this.getLoginView();
	 	loginView.setMasked({
	 			xtype:'loadmask',
	 			message: 'Signing in...'
	 		});
	 	this.signInSuccess();
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
	 	this.mainMenuView = Ext.create('NonQ.view.Menu');
	 	this.mainMenuView.hide();
	 	//TODO check when views should be created/initialized, etc.
	 	Ext.Viewport.add(this.mainMenuView);
	}
})