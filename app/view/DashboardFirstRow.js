Ext.define('NonQ.view.DashboardFirstRow', {
	extend: 'Ext.Panel',
	requires: ['NonQ.view.DashboardButton'],
	xtype: 'dashboardfirstrowview',
	config: {
		layout:{
			type:'hbox',
			pack: 'center'			 
		},
//		style: "margin-left: 30%; margin-right: 30%;",
		items:[
       		{
		    	xtype: 'dashboardbutton'		    	
			},
			{
		    	xtype: 'dashboardbutton'
			},
			{
		    	xtype: 'dashboardbutton'
			}				
		]
	}
});