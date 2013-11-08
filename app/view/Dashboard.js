Ext.define('NonQ.view.Dashboard', {
	xtype: 'dashboardview',
	extend: 'Ext.Panel',
	requires: ['NonQ.view.DashboardFirstRow', 
	           'NonQ.view.DashboardSecondRow', 
	           'NonQ.view.DashboardThirdRow',
	],
	config: {
		layout:{
			type:'vbox',
			pack: 'center'			 
		},
		items:[
		    { html:'Hi! Where are you going today?',
		      style: 'text-align: center;'
		    },
		    
       		{
		    	xtype: 'dashboardfirstrowview'
			},
			{
		    	xtype: 'dashboardsecondrowview'
			},
			{
		    	xtype: 'dashboardthirdrowview'		    	
			}
			
		]
	}
	
});
