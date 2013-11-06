Ext.define('NonQ.view.DashboardButton', {
	extend: 'Ext.Panel',	
	xtype: 'dashboardbutton',
	config: {
		style: 'margin: 20px',
		layout:{
			type:'vbox',
			pack: 'center',
			align: 'center'
			
		},
		items:[
		       {xtype: 'image',
	    	    src: 'resources/icons/login.jpg',
	    	    style: 'width:60px;height:60px;margin:auto'
		       }
		       ,
		       {html:'Login',
	    	    docked: 'bottom',
	    	    style: 'text-align: center;'
		       }
		]
	},
	initialize: function() {
        this.element.on({
            tap: function() { 
        	console.log('tapped!'); }
        });
    }
});
	