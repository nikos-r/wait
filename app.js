/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Ext.plugin': 'lib/plugin'
});
//</debug>

Ext.application({
    name: 'NonQ',
        
    requires: [
//        'Ext.util.GeoLocation', 'Ext.Toolbar','Ext.Map', 'NonQ.view.Map'
    ],
	views: [
        'Login', 'MainMenu', 'Menu'
    ],

    controllers: ['Main'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
/*
     launch: function() {
            trackingButton = Ext.create('Ext.Button', {
                iconCls: 'locate'
            });

            trafficButton = Ext.create('Ext.Button', {
                pressed: true,
                iconCls: 'maps'
            });

            toolbar = Ext.create('Ext.Toolbar', {
                docked: 'top',
                ui: 'light',
                items: [
                    {
                        iconCls: 'home',
                        handler: function() {
                            //disable tracking
                            var segmented = Ext.getCmp('segmented'),
                                pressedButtons = segmented.getPressedButtons(),
                                trafficIndex = pressedButtons.indexOf(trafficButton),
                                newPressed = (trafficIndex != -1) ? [trafficButton] : [];
                            segmented.setPressedButtons(newPressed);
                            mapdemo.getMap().panTo(position);
                        }
                    },
                    {
                        id: 'segmented',
                        xtype: 'segmentedbutton',
                        allowMultiple: true,
                        listeners: {
                            toggle: function(buttons, button, active) {
                                        
var geo = new Ext.util.GeoLocation({
    autoUpdate: false,
    listeners: {
        locationupdate: function(geo) {
            alert('New latitude: ' + geo.getLatitude());
        },
        locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
        	console.log(bTimeout);
        	console.log(bPermissionDenied);
        	console.log(bLocationUnavailable);
        	console.log(message);
            if(bTimeout){
                alert('Timeout occurred.');
            } else {
                alert('Error occurred.');
            }
        }
    }
});
geo.updateLocation();
//geo.getLoca
//        var position = new google.maps.LatLng(geo.getLatitude(), geo.getLongtitude());  //Sencha HQ
//mapdemo.getMap().panTo(position);
console.log(geo.getLatitude());
console.log(geo.getLongitude());
                            }
                        },
                        items: [
                            trackingButton, trafficButton
                        ]
                    }
                ]
            }); 

        var mapdemo = Ext.create('Ext.Map', {
        	id: 'mymap', 
        	useCurrentLocation: true
        });

        Ext.create('Ext.Panel', {
            fullscreen: true,
            layout: 'fit',
            items: [mapdemo]
        });
        
    },	
	*/
    
    launch: function() {
        Ext.Viewport.add([
            { xtype: 'loginview' },
            { xtype: 'mainmenuview'}            				
        ]);
    },
    

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
