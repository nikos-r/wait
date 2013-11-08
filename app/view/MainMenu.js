Ext.define('NonQ.view.MainMenu', {
	extend: 'Ext.Panel',
	requires: ['Ext.TitleBar', 'NonQ.view.Dashboard', 'NonQ.view.Map'],
	xtype: 'mainmenuview',
	config: {
		layout: {
			type: 'vbox'
		},
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
				        iconCls: 'question'
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
				xtype:'dashboardview'				
			},
			{
				xtype:'mapview'				
			}
			
		]
			
	}

})