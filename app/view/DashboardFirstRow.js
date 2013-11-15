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
	    		buttonImage: 'resources/icons/alphaline_117x110.png',
   				buttonText: 'Alpha'
		    	
			},
			{
		    	xtype: 'dashboardbutton',
	    		buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'Piraeus'
			},
			{
		    	xtype: 'dashboardbutton',
   				buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'Eurobank'	
			}				
		]
	}
});