Ext.define('NonQ.view.Map', {
	xtype: 'mapview',
	requires: ['Ext.Map',         'Ext.plugin.google.Traffic',
    'Ext.plugin.google.Tracker'
],
	extend: 'Ext.Panel',
	
	config: {
		layout:{
			type:'vbox',
			pack: 'center'			 
		},
		items:[
		    { html:'Check near you',
		      style: 'text-align: center;'
		    },
       		{
       			xtype: 'map',
//       			useCurrentLocation: true,
	       		config: {
	       			mapOptions : {
	                center : new google.maps.LatLng(37.381592, -122.135672),  //nearby San Fran
	                zoom : 12,
	                mapTypeId : google.maps.MapTypeId.ROADMAP,
	                navigationControl: true,
	                navigationControlOptions: {
	                    style: google.maps.NavigationControlStyle.DEFAULT
	                }
	            },

	            plugins : [
	                new Ext.plugin.google.Tracker({
	                    trackSuspended: true,   //suspend tracking initially
	                    allowHighAccuracy: false,
	                    marker: new google.maps.Marker({
	                        position: position,
	                        title: 'My Current Location',
	                        shadow: shadow,
	                        icon: image
	                    })
	                }),
	                new Ext.plugin.google.Traffic()
	            ],
	            mapListeners: {
	                dragstart: function() {
	                    var segmented = Ext.getCmp('segmented'),
	                        pressedButtons = segmented.getPressedButtons().slice(),
	                        trackingIndex = pressedButtons.indexOf(trackingButton);
	                    if (trackingIndex != -1) {
	                        pressedButtons.splice(trackingIndex, 1);
	                        segmented.setPressedButtons(pressedButtons);
	                    }
	                }
	            },

	            listeners: {
	                maprender: function(comp, map) {
	                    var marker = new google.maps.Marker({
	                        position: position,
	                        title : 'Sencha HQ',
	                        map: map
	                    });

	                    google.maps.event.addListener(marker, 'click', function() {
	                        infowindow.open(map, marker);
	                    });

	                    setTimeout(function() {
	                        map.panTo(position);
	                    }, 1000);
	                }

	            }
	       		}
			}
		]
	}
	
});
