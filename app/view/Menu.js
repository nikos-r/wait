Ext.define('NonQ.view.Menu', {
//	extend: 'Ext.ActionSheet',
	extend: 'Ext.dataview.List',
	xtype: 'menuview',
	config:{
		modal: true,
		top: '0',
		right: '70%',
		width: '30%',
		height: '100%',
		hideOnMaskTap: 'true',
		showAnimation: {type:'slide', direction: 'right'},
		hideAnimation: {type:'slideOut'},
		disableSelection: true,
		cls: 'menu',
		itemTpl: '<div style="height: 1.5em; color: white; font-size: 90%" class="x-button-plain x-button x-layout-box-item x-stretched"><span class="x-button-icon x-shown {iconCls}"></span> <span style="padding-left: 0.5em" >{title}</span>',
		data: [
	        { title: 'Profile', iconCls: 'user'},
	        { title: 'History', iconCls: 'table' },
	        { title: 'Favorites', iconCls: 'favorites' },
	        { title: 'Notifications', iconCls: 'bell' },
	        { title: 'To do', iconCls: 'compose' },
	        { title: 'About NonQ', iconCls: 'info' },
	        { title: 'Legal & Privacy', iconCls: 'case' },
	        { title: 'Share', iconCls: 'team' }
	    ],

		
		listeners: [
		   {element: 'element',
		    event: 'tap',
		    fn: 'onMenuTap'}
		]
	},
	onMenuTap: function(){
		console.log('tapped!'); 
		this.fireEvent('menuHideCommand');
	}

	
});
