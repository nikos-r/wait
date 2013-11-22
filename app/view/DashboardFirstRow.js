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
	    		buttonImage: 'resources/icons/alphaline_orange_117x110.png',
   				buttonText: 'Alpha'
			},
			{
		    	xtype: 'dashboardbutton',
	    		buttonImage: 'resources/icons/peiraiws_orange_95x89.png',
   				buttonText: 'Piraeus',
   				imageWidth: 2.3
			},
			{
		    	xtype: 'dashboardbutton',
   				buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'Eurobank'	
			}				
		]
	}
});