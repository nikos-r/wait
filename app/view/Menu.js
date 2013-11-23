Ext.define('NonQ.view.Menu', {
	extend: 'Ext.ActionSheet',
	xtype: 'menuview',
	config:{
		right: '70%',
		top: 0,
		enter: 'left',
		hideOnMaskTap: 'true',
		exit: 'left',
		items:[
		    {
                text: 'Delete draft',
                ui: 'decline',
                scope: this
            },
            {
                text: 'Save draft',
                scope: this
            },
            {
                xtype: 'button',
                text: 'Favorites',
                scope: this,
                iconCls: 'favorites',
                itemId: 'favoritesButton'
            }
		]
		,
		listeners: [
		   {element: 'element',
		    event: 'tap',
		    fn: 'onMenuTap'},
		   {delegate: '#favoritesButton',
		    event: 'tap',
		    fn: function(){console.log('fav button tapped')}}
		]
	},
	onMenuTap: function(){
		console.log('tapped!'); 
		this.fireEvent('menuHideCommand');
	}

	
});
