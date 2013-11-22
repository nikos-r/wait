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
			            align: 'left',
				        iconCls: 'question'
			        },
			        {
			            xtype: 'button',
			            itemId: 'menuButton',
			            align: 'right',
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
		],
		listeners: [{
		    delegate: '#menuButton',
		    event: 'tap',
		    fn: 'onMenuShowTap'
		}]	
	},
	onMenuShowTap : function() {
	 	console.log('show menu');
 		this.fireEvent('menuShowCommand');
	}
})