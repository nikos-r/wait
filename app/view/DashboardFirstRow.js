Ext.define('NonQ.view.DashboardFirstRow', {
	extend: 'Ext.Panel',
	xtype: 'dashboardfirstrowview',
	config: {
		layout:{
			type:'hbox',
			pack: 'center'			 
		},
		style: "margin-left: 30%; margin-right: 30%;",
		defaults: { flex: 1 },
		items:[
       		{
		    	xtype: 'button',
		    	text: 'one',		    
		    	style: 'padding: 10px'
			},
			{
		    	xtype: 'button',
		    	text: 'two', 
		    	style: 'padding: 10px'
			},
			{
		    	xtype: 'button',
		    	text: 'three',
		    	style: 'padding: 10px'
			}				
		]
	}
});