Ext.define('NonQ.view.Map', {
	xtype: 'mapview',
	requires: ['Ext.Map'],
	extend: 'Ext.Panel',
	
	
	config: {
		layout:'vbox',		
		items:[
		    { html:'Check near you',
		      style: 'text-align: center;',
		      docked: 'top'
		    },
       		{
       			xtype:'panel',
                layout:'fit',
                flex: 1,
                items:[
                       {xtype:'map',
                       itemId: 'map'
                       }
                ]
       		}
		]
	},
	initialize: function () {
	     this.callParent(arguments);
	     
	     var map = this.down("#map");
	     
	     var positionAlpha = new google.maps.LatLng(37.989669, 23.729439);
	     var positionNBG = new google.maps.LatLng(37.989669, 23.739439);
	     map.getMap().panTo(positionAlpha);
	     
	     var markerAlpha = new google.maps.Marker({
                        position: positionAlpha,
                        title : 'Alpha Bank',
                        map: map.getMap()
                    });
	     var markerNBG = new google.maps.Marker({
                        position: positionNBG,
                        title : 'NBG',
                        map: map.getMap()
                    });
	}
	
});
