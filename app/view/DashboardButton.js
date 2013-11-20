Ext.define('NonQ.view.DashboardButton', {
	extend: 'Ext.Panel',	
	xtype: 'dashboardbutton',
	
	config: {		
		cls: 'dashboardButton',
		buttonImage: null,
		buttonText: null,
		isDisabled: false,
		layout:{
			type:'vbox',
			pack: 'center',
			align: 'center'
		},
		defaults: {
			flex: 1
		},
		items:[
		       {xtype: 'image',
		        itemId: 'dashboardImageItem'
		        	,
		        style: 'width: 100%'
		       }
		       ,
		       {itemId: 'dashboardTextItem',
	    	    docked: 'bottom',
	    	    style: 'text-align: center; font-size: 80%'
		       }
		]
	},
	initialize: function() {
		this.callParent();
		this.down("#dashboardImageItem").setSrc(this.getButtonImage());
		this.down("#dashboardTextItem").setHtml(this.getButtonText());
		if(this.getIsDisabled()){
			this.element.addCls('dashboardButtonDisabled')
		}
			
        this.element.on({ 
        	scope: this,
            tap: 'onTap',
            touchstart : 'onPress',
            touchend   : 'onRelease'
        });
    },
    onTap :   	function() {
    	if(this.getIsDisabled()) return;
    	console.log('tapped '+this.getButtonText()+'!'); 
    },
    onPress : function() {
    	if(this.getIsDisabled()) return;
        this.element.addCls('dashboardButtonPressed');
    },
    
    onRelease : function() {
    	if(this.getIsDisabled()) return;
    	this.element.removeCls('dashboardButtonPressed');
    }
	
});
	