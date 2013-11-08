Ext.define('NonQ.view.DashboardThirdRow', {
	extend: 'Ext.Panel',
	requires: ['NonQ.view.DashboardButton'],
	xtype: 'dashboardthirdrowview',
	config: {
		layout:{
			type:'hbox',
			pack: 'center'			 
		},
		items:[
       		{
		    	xtype: 'dashboardbutton',
	    		buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'ΤΣΜΕΔΕ',
   				isDisabled: true
		    	
			},
			{
		    	xtype: 'dashboardbutton',
	    		buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'IKA'
		    	
			},
			{
		    	xtype: 'dashboardbutton',
   				buttonImage: 'resources/icons/login.jpg',
   				buttonText: 'ΕΛΤΑ',
   				isDisabled: true
			}				
		]
	}
});