Ext.define('NonQ.view.MainMenu', {
	extend: 'Ext.Panel',
	requires: ['Ext.TitleBar'],
	xtype: 'mainmenuview',
	config: {
		layout: {
			type: 'fit'
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
			}
			
		]
			
	}

})