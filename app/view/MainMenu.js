Ext.define('NonQ.view.MainMenu', {
	extend: 'Ext.Panel',
	requires: ['Ext.TitleBar', 'NonQ.view.Dashboard', 'NonQ.view.Map'],
	xtype: 'mainmenuview',
	config: {
		layout: 'vbox',		
		items: [
		   {
			    xtype: 'titlebar',
			    title: 'Non-Q',
			    docked: 'top',
			    items: [
			        {
			            xtype: 'button',
			            itemId: 'helpButton',
			            align: 'right',
				        iconCls: 'question',
				        html: "Help"
			        },
			        {
			            xtype: 'button',
			            itemId: 'menuButton',
			            align: 'left',
				        iconCls: 'list'
			        }
			    ]
			},
			{
				xtype:'dashboardview',
				flex: 3
			},
			{
				//whereever the map appears it needs to be in a panel with fit layout
				xtype:'panel',
	            layout:'fit',
	            flex: 1,	            
	            items:[{xtype:'mapview'}]				
			}
			
			
		]
			
	}

})