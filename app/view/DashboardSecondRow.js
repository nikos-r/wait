Ext.define('NonQ.view.DashboardSecondRow', {
	extend: 'Ext.Panel',
	requires: ['NonQ.view.DashboardButton'],
	xtype: 'dashboardsecondrowview',
	config: {
		layout:{
			type:'hbox',
			pack: 'center'			 
		},
		items:[
       		{
		    	xtype: 'dashboardbutton',
	    		buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'NBG'
		    	
			},
			{
		    	xtype: 'dashboardbutton',
	    		buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'OAEE'
		    	
			},
			{
		    	xtype: 'dashboardbutton',
   				buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'Εφορία',
   				isDisabled: true
			}				
		]
	}
});