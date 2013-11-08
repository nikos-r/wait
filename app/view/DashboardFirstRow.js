Ext.define('NonQ.view.DashboardFirstRow', {
	extend: 'Ext.Panel',
	requires: ['NonQ.view.DashboardButton'],
	xtype: 'dashboardfirstrowview',
	config: {
		layout:{
			type:'hbox',
			pack: 'center'			 
		},
		items:[
       		{
		    	xtype: 'dashboardbutton',
	    		buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'Login1'
		    	
			},
			{
		    	xtype: 'dashboardbutton',
	    		buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'Login2'
		    	
			},
			{
		    	xtype: 'dashboardbutton',
   				buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'Login3'	
			}				
		]
	}
});