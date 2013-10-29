Ext.define('NonQ.view.Login', {
	extend: 'Ext.form.Panel',
	xtype: 'loginpanel',
	requires: ['Ext.form.FieldSet', 
	           'Ext.form.Password', 
	           'Ext.Label', 
	           'Ext.Img',
	           'Ext.Button',
	           'Ext.util.DelayedTask'
	],
    config:{
		title: 'Login',
		items:[
	       	{
	       		xtype: 'image',
	       		src: Ext.Viewport.getOrientation() == 'portrait'
	       				? 'resources/icons/login.jpg' : 'resources/icons/login.jpg',
	       		style: 'width:80px;height:80px;margin:auto'
	       	},
	       	{
	       	    xtype: 'fieldset',
	       	    title: 'Login Example',
	       	    items: [
	       	        {
	       	            xtype: 'textfield',
	       	            placeHolder: 'Username',
	       	            itemId: 'userNameTextField',
	       	            name: 'userNameTextField',
	       	            required: true
	       	        },
	       	        {
	       	            xtype: 'passwordfield',
	       	            placeHolder: 'Password',
	       	            itemId: 'passwordTextField',
	       	            name: 'passwordTextField',
	       	            required: true
	       	        }
	       	    ]
	       	},
	       	{
			    xtype: 'button',
			    itemId: 'logInButton',
			    ui: 'action',
			    padding: '10px',
			    text: 'Log In'
			}
		],
		listeners: [{
		    delegate: '#logInButton',
		    event: 'tap',
		    fn: 'onLogInButtonTap'
		}]
	},
	onLogInButtonTap : function() {
	 	var usernameField = this.down('#userNameTextField');
	 	var passwordField = this.down('#passwordTextField');
	 	
	 	console.log(usernameField.getValue());
	 	var task = Ext.create('Ext.util.DelayedTask', function () {
			this.fireEvent('signInCommand', this, usernameField.getValue(), passwordField.getValue());
			
			usernameField.setValue('');
			passwordField.setValue('');
		});	
	 	task.delay(500);
//		task.call
	}

		
})