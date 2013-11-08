Ext.define('NonQ.view.DashboardButton', {
	extend: 'Ext.Panel',	
	xtype: 'dashboardbutton',
	
	config: {
		style: 'margin: 20px',
		buttonImage: null,
		buttonText: null,
		layout:{
			type:'vbox',
			pack: 'center',
			align: 'center'
		},
		items:[
		       {xtype: 'image',
		        itemId: 'dashboardImageItem', 
	    	    style: 'width:60px;height:60px;margin:auto'
		       }
		       ,
		       {itemId: 'dashboardTextItem',
	    	    docked: 'bottom',
	    	    style: 'text-align: center;'
		       }
		]
	},
	initialize: function() {
		this.callParent();
		this.down("#dashboardImageItem").setSrc(this.getButtonImage());
		this.down("#dashboardTextItem").setHtml(this.getButtonText());
        this.element.on({ 
        	scope: this,
            tap: 'onTap',
            touchstart : 'onPress',
            touchend   : 'onRelease'
        });
    },
    onTap :   	function() {console.log('tapped '+this.getButtonText()+'!'); },
    onPress : function() {
        this.element.addCls('dashboardButtonPressed');
        
    },
    
    onRelease : function() {
    	this.element.removeCls('dashboardButtonPressed');
    }
	
});
	