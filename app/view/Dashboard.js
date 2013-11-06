Ext.define('NonQ.view.Dashboard', {
	xtype: 'dashboardview',
	
	/*
	extend: 'Ext.Toolbar',
	config:{
		ui: 'neutral',
	    scrollable: null,
	    defaults: {
	        ui: 'plain'
	    },
	    items: [
	        { text: 'Round',iconCls: 'action',
            ui: 'round'},
	        { iconCls: 'add' },
	        { iconCls: 'compose' },
	        { iconCls: 'delete' },
	        { iconCls: 'refresh' },
	        { iconCls: 'reply' }
	    ],
	    layout: {
	        pack : 'center',
	        align: 'center'
	    }
	}
	*/
	extend: 'Ext.Panel',
	requires: ['NonQ.view.DashboardFirstRow'],
	
	config: {
		layout:{
			type:'vbox',
			pack: 'center'			 
		},
		items:[
       		{
		    	xtype: 'dashboardfirstrowview'
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
