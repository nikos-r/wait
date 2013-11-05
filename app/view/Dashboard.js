Ext.define('NonQ.view.Dashboard', {
	extend: 'Ext.Panel',
	requires: ['NonQ.view.DashboardFirstRow'],
	xtype: 'dashboardview',
	config: {
		layout:{
			type:'vbox',
			pack: 'center'			 
		},
		defaults: { flex: 1 },
		items:[
       		{
		    	xtype: 'dashboardfirstrowview',
		    	style: "margin-top: 50px;"
		    			    	
			},
			{
		    	xtype: 'dashboardfirstrowview'
			},
			{
		    	xtype: 'dashboardfirstrowview'		    	
			}				
		]
	}
});
