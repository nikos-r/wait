Ext.define('NonQ.view.MainMenu', {
	extend: 'Ext.Panel',
	requires: ['Ext.TitleBar'],
	xtype: 'mainmenuview',
	config: {
		layout: {
			type: 'fit'
		},
		items: [{
		    xtype: 'titlebar',
		    title: 'Main Menu',
		    docked: 'top',
		    items: [
		        {
		            xtype: 'button',
		            text: 'Log Off',
		            itemId: 'logOffButton',
		            align: 'right'
		        }
		    ]
		}]
			
	}

})