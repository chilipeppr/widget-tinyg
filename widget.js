/* global requirejs cprequire cpdefine chilipeppr */

// Test this element. This code is auto-removed by the chilipeppr.load()
cprequire_test(["inline:com-chilipeppr-widget-tinyg"], function (tinyg) {
    console.log("test running of " + tinyg.id);
    tinyg.init();

    $('body').css("padding", "20px");
    
    // create a typical test of planner buffer
    // you never want planner buffer with more than 12 items queued, 4 are reserved for pulling
    // from serial buffer, so you want qr to be no less than 12
    var buf = [27, 26, 25, 18, 14, 15, 16, 18, 17, 16, 12, 11, 10, 14, 17, 16, 15, 10, 22, 28];
    var delay = 1000;
    var delayPlus = 500;
    chilipeppr.currentCtr = -1;
    /*
    for (var ctr = 0; ctr < buf.length; ctr++) {
        
        setTimeout(function () {
            chilipeppr.currentCtr++;
            //console.log("chilipeppr.currentCtr:", chilipeppr.currentCtr);
            var cmd = '{"qr":' + buf[chilipeppr.currentCtr] + '}';
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {dataline: cmd});
            //chilipeppr.currentCtr = chilipeppr.currentCtr + 1;
        }, delay);
        delay = delay + delayPlus;
    }    
    */

    // manual test of coordinates and how we publish them to the generic interface
    var testRecvline = function () {
        // {"r":{"qr":28},"f":[1,0,10,8758]}
        // {"r":{"fb":435.10},"f":[1,0,10,2670]}
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"qr":28},"f":[1,0,10,8758]}'
            });
        }, 900);
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"fb":380.08},"f":[1,0,10,2670]}'
            });
        }, 1500);
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"qr":23},"f":[1,0,10,8758]}'
            });
        }, 2900);
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"qr":21},"f":[1,0,10,8758]}'
            });
        }, 3900);
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"sr":{"vel":0.02,"mpox":10.474,"dist":1,"stat":1}}'
            });
        }, 1000);
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"sr":{"vel":0.02,"mpox":0.574,"mpoy":32.424,"mpoz":-3.424,"dist":1,"stat":2}}'
            });
        }, 2000);
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"sr":{"vel":0.02,"mpox":940.5744,"mpoz":1.12,"dist":1,"stat":5}}'
            });
        }, 3000);

        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"sr":{"vel":0.02,"mpox":-3288.73,"mpoy":-0.000,"mpoz":1.12,"dist":1,"stat":5}}'
            });
        }, 4000);
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"sr":{"line":0,"vel":180.00,"mpox":0.005,"mpoy":10.460,"mpoz":0.304,"mpoa":0.000,"coor":1,"ofsa":0.000,"ofsx":0.000,"ofsy":0.000,"ofsz":0.000,"dist":0,"unit":0,"stat":3,"homz":0,"homy":0,"homx":0,"momo":1},"f":[1,0,10,5440]}}'
            });
        }, 5000);
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"mt":10.00},"f":[1,0,10,449]}'
            });
        }, 5500);
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"sr":{"line":9,"posx":192.000,"posy":0.028,"posz":0.010,"posa":0.000,"feed":300.00,"vel":4.00,"unit":1,"coor":2,"dist":0,"frmo":0,"momo":1,"stat":4},"f":[1,0,10,4683]}}'
            });
        }, 6000);
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"mt":2.00},"f":[3,0,4]}'
            });
        }, 7000);
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"mt":2.00},"f":[3,0,2]}'
            });
        }, 8000);
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"mt":2.00},"f":[3,0,1]}'
            });
        }, 9000);
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"mt":2.00},"f":[3,0,0]}'
            });
        }, 10000);
        // Character Mode test
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"mt":2.00},"f":[2,0,56]}'
            });
        }, 11000);
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"r":{"mt":2.00},"f":[2,0,78]}'
            });
        }, 12000);
    }

    var testCoords = function () {
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/requestCoords");
        }, 9000);
        setTimeout(function () {
            chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/requestCoords");
        }, 1000);
    }
    
    // {"Cmd":"Complete","Id":"g38","P":"COM7","LocalBufSize":0}
    var testLocalBufSize = function () {
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"LocalBufSize":0}'
            });
        }, 2000);
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"LocalBufSize":25}'
            });
        }, 5000);
        
        setTimeout(function () {
            chilipeppr.publish(
                "/com-chilipeppr-widget-serialport/recvline", {
                dataline: '{"LocalBufSize":0}\n'
            });
        }, 6000);
    }
    
    var testFroUpdate = function () {
        setTimeout(function () {
            chilipeppr.publish(
                '/com-chilipeppr-widget-serialport/onFeedRateOverride', 
                {
                    Cmd: "FeedRateOverride", Desc: "Providing you status of feed rate override.", Port: "COM7", FeedRateOverride: 0, IsOn: false
                }
            );
        }, 2000);
        setTimeout(function () {
            chilipeppr.publish(
                '/com-chilipeppr-widget-serialport/onFeedRateOverride', 
                {
                    Cmd: "FeedRateOverride", Desc: "Providing you status of feed rate override.", Port: "COM7", FeedRateOverride: 0.5, IsOn: false
                }
            );
        }, 3000);
    };
    
    //testCoords();

    //testRecvline();
    
    testLocalBufSize();
    
    testFroUpdate();

} /*end_test*/ );

cpdefine("inline:com-chilipeppr-widget-tinyg", ["chilipeppr_ready", "jquerycookie"], function () {
    return {
        id: "com-chilipeppr-widget-tinyg",
        implements: {
            "com-chilipeppr-interface-cnccontroller": "The CNC Controller interface is a loosely defined set of publish/subscribe signals. The notion of an interface is taken from object-oriented programming like Java where an interface is defined and then specific implementations of the interface are created. For the sake of a Javascript mashup like what ChiliPeppr is, the interface is just a rule to follow to publish signals and subscribe to signals by different top-level names than the ID of the widget or element implementing the interface. Most widgets/elements will publish and subscribe on their own ID. In this widget we are publishing/subscribing on an interface name. If another controller like Grbl is defined by a member of the community beyond this widget for TinyG, this widget can be forked and used without other widgets needing to be changed and the user could pick a Grbl or TinyG implementation of the interface."
        },
        url: "(auto fill by runme.js)",       // The final URL of the working widget as a single HTML file with CSS and Javascript inlined. You can let runme.js auto fill this if you are using Cloud9.
        fiddleurl: "(auto fill by runme.js)", // The edit URL. This can be auto-filled by runme.js in Cloud9 if you'd like, or just define it on your own to help people know where they can edit/fork your widget
        githuburl: "(auto fill by runme.js)", // The backing github repo
        testurl: "(auto fill by runme.js)",   // The standalone working widget so can view it working by itself
        name: "Widget / Tinyg v2.0",
        desc: "The TinyG widget subscribes and publishes to the SPJS widget (com-chilipeppr-widget-serialport) and intermediates the serial data to and from the TinyG. This widget parses the incoming data to normalize it for sending off axes reports, onExecuted signals, etc. This widget also allows monitoring of the status of the TinyG as well as configuring it.",
        publish: {
            '/com-chilipeppr-interface-cnccontroller/feedhold': "Feedhold (Emergency Stop). This signal is published when user hits the Feedhold button for an emergency stop of the TinyG. Other widgets should see this and stop sending all commands such that even when the plannerresume signal is received when the user clears the queue or cycle starts again, they have to manually start sending code again. So, for example, a Gcode sender widget should place a pause on the sending but allow user to unpause.",
                '/com-chilipeppr-interface-cnccontroller/plannerpause': "This widget will publish this signal when it determines that the planner buffer is too full on the TinyG and all other elements/widgets need to stop sending data. You will be sent a /plannerresume when this widget determines you can start sending again. The TinyG has a buffer of 28 slots for data. You want to fill it up with around 12 commands to give the planner enough data to work on for optimizing velocities of movement. However, you can't overfill the TinyG or it will go nuts with buffer overflows. This signal helps you fire off your data and not worry about it, but simply pause the sending of the data when you see this signal. This signal does rely on the TinyG being in {qv:2} mode which means it will auto-send us a report on the planner every time it changes. This widget watches for those changes to generate the signal. The default setting is when we hit 12 remaining planner buffer slots we will publish this signal.",
                '/com-chilipeppr-interface-cnccontroller/plannerresume': "This widget will send this signal when it is ok to send data to the TinyG again. This widget watches the {qr:[val]} status report from the TinyG to determine when the planner buffer has enough room in it to send more data. You may not always get a 1 to 1 /plannerresume for every /plannerpause sent because we will keep sending /plannerpause signals if we're below threshold, but once back above threshold we'll only send you one /plannerresume. The default setting is to send this signal when we get back to 16 available planner buffer slots.",
                '/com-chilipeppr-interface-cnccontroller/axes': "This widget will normalize the TinyG status report of axis coordinates to send off to other widgets like the XYZ widget. The axes publish payload contains {x:float, y:float, z:float, a:float} If a different CNC controller is implemented, it should normalize the coordinate status reports like this model. The goal of this is to abstract away the specific controller implementation from generic CNC widgets.",
                '/com-chilipeppr-interface-cnccontroller/units': "This widget will normalize the TinyG units to the interface object of units {units: \"mm\"} or {units: \"inch\"}. This signal will be published on load or when this widget detects a change in units so other widgets like the XYZ widget can display the units for the coordinates it is displaying.",
                '/com-chilipeppr-interface-cnccontroller/coords': "This widget will broadcast out any change in the coordinate system. The value is {coord:\"g55\", coordNum: 55} or for G92 {coord:\"g92\", coordNum: 92} or for machine {coord:\"g53\", coordNum: 53}",
                '/com-chilipeppr-interface-cnccontroller/firmware': "This widget will broadcast out a firmware build/version number when it sees it come in from the CNC controller to help other widgets pivot off of that data. The firmware build number is requested when the /onconnect is seen. Your widget must be loaded to see this signal as there is no request/recv signal implemented (please ask if you need one).",
                '/com-chilipeppr-interface-cnccontroller/status': "Status. This signal is published when machine change the status.",
        },
        subscribe: {
            '/com-chilipeppr-interface-cnccontroller/jogdone': 'We subscribe to a jogdone event so that we can fire off an exclamation point (!) to the TinyG to force it to drop all planner buffer items to stop the jog immediately.',
                '/com-chilipeppr-interface-cnccontroller/energizeMotors': 'Send in this signal to fully energize motors so you can do things like a tool change without moving your axis accidentally. This widget will send the correct command to the serial port for your CNC controller.',
                '/com-chilipeppr-interface-cnccontroller/unEnergizeMotors': 'Send in this signal to turn off the full power to the motors. Puts motors back into your configured motor settings. This widget will send the correct command to the serial port for your CNC controller.',
                '/com-chilipeppr-interface-cnccontroller/requestCoords': 'Send in this signal to request a callback signal of "/com-chilipeppr-interface-cnccontroller/coords" to be sent back. You wil be sent whatever value this widget currently has stored as the last coordinates.',
        },
        foreignPublish: {
            "/com-chilipeppr-widget-serialport/send": "We send to the serial port certain commands like the initial configuration commands for the TinyG to be in the correct mode and to get initial statuses like planner buffers and XYZ coords. We also send the Emergency Stop and Resume of ! and ~"
        },
        foreignSubscribe: {
            "/com-chilipeppr-widget-serialport/ws/onconnect": "When we see a new connect, query for status.",
                "/com-chilipeppr-widget-serialport/recvline": "When we get a dataline from serialport, process it and fire off generic CNC controller signals to the /com-chilipeppr-interface-cnccontroller channel."
        },
        plannerPauseAt: 2, // if planner buffer gets to this number, then send pause
        plannerResumeAt: 3, // when planner buffer gets back to this number, send a resume
        init: function () {

            this.setupUiFromCookie();
            this.btnSetup();

            this.forkSetup();

            // if user asks us for coordinates to be published off
            var that = this;
            chilipeppr.subscribe("/com-chilipeppr-interface-cnccontroller/requestCoords", function () {
                chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/coords", that.lastCoords);
            });

            // setup onconnect pubsub event
            chilipeppr.subscribe("/com-chilipeppr-widget-serialport/ws/onconnect", this, function (msg) {
                console.log("got onconnect so will init controller");
                this.initController(true);
            });

            // setup recv pubsub event
            // this is when we receive data in a per line format from the serial port
            // notice we are subscribing at high priority. that means we'll get the recvline
            // first before any other widget. this is important for flow control as we need
            // to be as responsive as possible to pause other widgets. pubsub is synchronous
            // inside chilipeppr. so all functions we call after getting this event are called
            // first and only after we return from our functions do the other widgets get
            // their pubsub listeners for this event.
            chilipeppr.subscribe("/com-chilipeppr-widget-serialport/recvline", this, function (msg) {
                this.onRecvCmd(msg);
            }, 1 /* priority of 1 to beat other widgets */ );

            // subscribe to jogdone so we can stop the planner buffer immediately
            chilipeppr.subscribe("/com-chilipeppr-interface-cnccontroller/jogdone", this, function (msg) {
                chilipeppr.publish("/com-chilipeppr-widget-serialport/send", '!%\n{"qr":""}\n');
                setTimeout(function () {
                    chilipeppr.publish("/com-chilipeppr-widget-serialport/send", '!%\n{"qr":""}\n');
                }, 500);
                setTimeout(function () {
                    chilipeppr.publish('/com-chilipeppr-interface-cnccontroller/plannerresume', "");
                }, 100);
                setTimeout(function () {
                    chilipeppr.publish("/com-chilipeppr-widget-serialport/send", '{"qr":""}\n');
                }, 1500);
            });

            // subscribe to motor energize/unenergize
            chilipeppr.subscribe("/com-chilipeppr-interface-cnccontroller/energizeMotors", this, this.energizeMotors);
            chilipeppr.subscribe("/com-chilipeppr-interface-cnccontroller/unEnergizeMotors", this, this.unEnergizeMotors);

            // query for status as well as put TinyG in correct reporting mode
            //this.initController();

            // riley wanted a warning before leaving
            this.warnBeforeLeavingPage();

            // Setup Kevin Hauser's config dialog
            this.setupConfig();
            
            // setup feed rate override
            this.setupFro();

            console.log(this.name + " done loading.");
        },
        initsInFlight: false,
        initIdCtr: 0, // we just increment this so we have unique id's as we send init commands to SPJS
        initController: function (reinit) {
            if (this.initsInFlight) return; //We are called by both init and onconnect. Only run once.  

            // Wait 1 and 3 seconds to send init commands, because the full load is such that
            // we may not have everything good to go yet, i.e. other widgets looking for responses
            // to these issued commands

            // if immediate flag is set, this is a do over, because items are missing
            // from the status report.  Most likely, the controller got reset.

            // TODO: watch when we get an event from serial port to send this, instead of fixed timers. 

            // Add {"rxm":1} for line mode
            // Latest firmware defaults to rxm:1 which is line mode (footer of 3 and support for TID)
            // This is new approach of array of commands with allowance for a pause on specific commands
            var initCmds = [
                { cmd: '?', pauseAfter: 150 },
                //{ cmd: '{"ej":1}', pauseAfter: 150},
                { cmd: '{"js":1}', pauseAfter: 150},
                '{"sr":n}',
                { cmd: '{"sv":1}', pauseAfter: 50},
                { cmd: '{"si":250}', pauseAfter: 50},
                '{"qr":n}',
                { cmd: '{"qv":1}', pauseAfter: 50},
                { cmd: '{"ec":0}', pauseAfter: 50},
                { cmd: '{"jv":4}', pauseAfter: 50},
                '{"hp":n}',
                '{"fb":n}',
                '{"mt":n}',
                { cmd: '{"sr":{"line":t,"posx":t,"posy":t,"posz":t,"vel":t,"unit":t,"stat":t,"feed":t,"coor":t,"momo":t,"plan":t,"path":t,"dist":t,"mpox":t,"mpoy":t,"mpoz":t}}', pauseAfter: 250}
                // { cmd: '%' }
            ];
            // old approach of just a string
            //var initCmds = '{"ej":1}\n{"js":1}\n{"sr":""}\n{"sv":1}\n{"si":250}\n{"qr":""}\n{"qv":1}\n{"ec":0}\n{"jv":4}\n{"hp":""}\n{"fb":""}\n{"mt":""}\n{"sr":{"line":t,"posx":t,"posy":t,"posz":t,"vel":t,"unit":t,"stat":t,"feed":t,"coor":t,"momo":t,"plan":t,"path":t,"gc":t,"dist":t,"mpox":t,"mpoy":t,"mpoz":t}}\n';

            var href = window.location.href;
            console.log("url href", href);
            if (href.match(/v9=true/)) {
                initCmds = [
                    '{"sr":n}',
                    '{"qr":n}',
                    '{"hp":n}',
                    '{"fb":n}',
                    '%'
                ];
            } else if (href.match(/linemode=true/i)) {
                // we need to act a bit different with regard to linemode
                // we need to send incremental sr's
                // we also need to pause
                
            }

            var that = this;
            
            /*
            if (reinit) {
                
                this.initsInFlight = true;
                chilipeppr.publish("/com-chilipeppr-widget-serialport/jsonSend", {
                    D: initCmds,
                    Id: "tinygReInit"
                });
                setTimeout(function () {
                    that.initsInFlight = false;
                }, 1000);
                
            } else {
            */
                
            this.initsInFlight = true;
            setTimeout(function () {
                //var cmdArr = initCmds.split(/\n/);
                for (var cmdCtr = 0; cmdCtr < initCmds.length; cmdCtr++) {
                    var initCmd = initCmds[cmdCtr];
                    var rawCmd = "";
                    var rawPause = 0;
                    if (typeof initCmd === 'object' && 'cmd' in initCmd) {
                        rawCmd = initCmd.cmd;
                    } else {
                        rawCmd = initCmd;
                    }
                    rawCmd += "\n";
                    if (typeof initCmd === 'object' && 'pauseAfter' in initCmd) {
                        rawPause = initCmd.pauseAfter;
                    }
                    chilipeppr.publish("/com-chilipeppr-widget-serialport/jsonSend", {
                        D: rawCmd,
                        Id: "tinygInit-cmd" + that.initIdCtr++,
                        Pause: rawPause
                    });
                }
            }, 2000);
            
            setTimeout(function() {
                chilipeppr.publish("/com-chilipeppr-widget-serialport/requestFro", "");
            }, 3000);

                /*
                setTimeout(function () {
                    chilipeppr.publish("/com-chilipeppr-widget-serialport/jsonSend", {
                        D: initCmds,
                        Id: "tinygInit2"
                    });
                }, 3000);
				*/

            setTimeout(function () {
                that.initsInFlight = false;
            }, 3200);
            
            //}

        },
        comPort: null,
        lastFroVal: null,
        setupFro: function() {
            $('#com-chilipeppr-widget-tinyg-fro').on("change", this.onFroChange.bind(this));
             $('#com-chilipeppr-widget-tinyg-fro').on("mousemove", this.onFroMousemove.bind(this));
            $('.com-chilipeppr-widget-tinyg-fro-1xbtn').click(this.onFro1x.bind(this));
            
            chilipeppr.subscribe('/com-chilipeppr-widget-serialport/onFeedRateOverride', this, this.updateFro);
            
            // now trigger to get the Feed Rate Override status a few seconds from now so we get ourselves an update
            setTimeout(function() {
                chilipeppr.publish("/com-chilipeppr-widget-serialport/requestFro", "");
            }, 5000);
        },
        onFro1x: function(evt) {
            this.onFroChange(1);
        },
        onFroMousemove: function(evt) {
            // just do span text update so user sees val being picked. fortunately we only get a change event
            // when mouse is let up on
            //console.log("got onFroMousemove. evt:", evt);
            
            var valEl = $('.com-chilipeppr-widget-tinyg-fro-val');
            
            // set its value
            var val = $('#com-chilipeppr-widget-tinyg-fro').val();
            $('.com-chilipeppr-widget-tinyg-fro-val').text(val + " x");

            // make text gray
            if (valEl.hasClass('com-chilipeppr-widget-tinyg-fro-val-preview') == false && this.lastFroVal != val) {
                valEl.addClass('com-chilipeppr-widget-tinyg-fro-val-preview');
            }
            
        },
        onFroChange: function(evt) {
            console.log("got onFroChange. evt:", evt);
            
            // we can be passed an int or an object
            var val;
            if (typeof evt === 'number') {
                val = evt;
            } else {
                val = $('#com-chilipeppr-widget-tinyg-fro').val();
            }
            $('.com-chilipeppr-widget-tinyg-fro-val').text(val + " x");
            
            // send actual change command to SPJS
            if (this.comPort != null && this.lastFroVal != val) {
                //var cmd = "fro " + this.comPort + " " + val  + "\n";
                //chilipeppr.publish('/com-chilipeppr-widget-serialport/ws/send', cmd);
                // use spjs widget pubsub
                chilipeppr.publish('/com-chilipeppr-widget-serialport/requestFro', val);
                
                // make text black again
                $('.com-chilipeppr-widget-tinyg-fro-val').removeClass('com-chilipeppr-widget-tinyg-fro-val-preview');
            
            }
            
            this.lastFroVal = val;
        },
        updateFro: function(val) {
            console.log("got updateFro. val:", val);
            var fro = val.FeedRateOverride;
            if (fro == 0) fro = 1.0;
            $('#com-chilipeppr-widget-tinyg-fro').val(fro);
            $('.com-chilipeppr-widget-tinyg-fro-val').text(fro + " x");
            
            this.lastFroVal = fro;
            
            if (this.comPort == null) {
                // we have not been initialized yet
                this.comPort = val.Port;
                $('.com-chilipeppr-widget-tinyg-fro-row').removeClass("hidden");
            }
        },
        configtinyg: null, // holds the reference to Kevin Hauser's config widget
        setupConfig: function () {
            $('.com-chilipeppr-kevinhauser-widget-configtinyg').click(this.popupConfigDialog.bind(this));
        },
        popupConfigDialog: function () {

            // See if our widget is dynamically loaded or not
            if (this.configtinyg != null) {
                // We must have loaded it already
                this.configtinyg.show();
            } else {
                // Dynamically inject Kevin Hauser's TinyG Config widget

                // Load Kevin's widget into the placeholder DIV we put in our
                // HTML at the end of the TinyG widget (just below the footer in
                // a hidden DIV).
                var that = this;
                // Old URL
                // 'http://fiddle.jshell.net/khauser/vc1vd3n5/show/light'
                // New Github URL
                // "http://raw.githubusercontent.com/chilipeppr/widget-configtinyg/master/auto-generated-widget.html"
                chilipeppr.load(
                    "#com-chilipeppr-widget-tinyg-holderAreaForConfigWidget", 
                    "http://raw.githubusercontent.com/chilipeppr/widget-configtinyg/master/auto-generated-widget.html", function () {
                    require(["inline:com-chilipeppr-widget-configtinyg"], function (configtinyg) {

                        // We get here after the widget is loaded and instantiated
                        console.log("configtinyg:", configtinyg);
                        configtinyg.init();
                        // store a reference
                        that.configtinyg = configtinyg;
                        console.log("Kevin Hauser's TinyG config widget loaded.");
                    });
                });
            }

        },
        warnBeforeLeavingPage: function () {
            //window.onbeforeunload = function(){
            //   return 'Are you sure you want to leave?';
            //};
            $(document).keydown(function (e) {
                var elid = $(document.activeElement).is("input:focus, textarea:focus");
                if (e.keyCode === 8 && !elid) {
                    return false;
                };
            });
        },
        options: null,
        setupUiFromCookie: function () {
            // read vals from cookies
            var options = $.cookie('com-chilipeppr-widget-tinyg-options');

            if (true && options) {
                options = $.parseJSON(options);
                console.log("just evaled options: ", options);
            } else {
                options = {
                    showBody: true
                };
            }
            this.options = options;
            console.log("options:", options);

            // show/hide body
            if (options.showBody) {
                this.showBody();
            } else {
                this.hideBody();
            }
        },
        saveOptionsCookie: function () {
            var options = {
                showBody: this.options.showBody
            };
            var optionsStr = JSON.stringify(options);
            console.log("saving options:", options, "json.stringify:", optionsStr);
            // store cookie
            $.cookie('com-chilipeppr-widget-tinyg-options', optionsStr, {
                expires: 365 * 10,
                path: '/'
            });
        },
        showBody: function (evt) {
            //$('#com-chilipeppr-widget-tinyg .panel-body .stat-row').removeClass('hidden');
            $('#com-chilipeppr-widget-tinyg .panel-body').removeClass('hidden');
            $('#com-chilipeppr-widget-tinyg .hidebody span').addClass('glyphicon-chevron-up');
            $('#com-chilipeppr-widget-tinyg .hidebody span').removeClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = true;
                this.saveOptionsCookie();
            }
        },
        hideBody: function (evt) {
            //$('#com-chilipeppr-widget-tinyg .panel-body .stat-row').addClass('hidden');
            $('#com-chilipeppr-widget-tinyg .panel-body').addClass('hidden');
            $('#com-chilipeppr-widget-tinyg .hidebody span').removeClass('glyphicon-chevron-up');
            $('#com-chilipeppr-widget-tinyg .hidebody span').addClass('glyphicon-chevron-down');
            if (!(evt == null)) {
                this.options.showBody = false;
                this.saveOptionsCookie();
            }
        },
        resetTinyG: function () {
            var gcode = String.fromCharCode(24) + "\n";
            chilipeppr.publish("/com-chilipeppr-widget-serialport/jsonSend", {
                D: gcode,
                Id: "tinygReset"
            });
        },
        btnSetup: function () {

            $('#com-chilipeppr-widget-tinyg .btn-toolbar .dropdown a').popover();

            // ctrl-x
            $('#com-chilipeppr-widget-tinyg .tinyg-ctrlx').click(this.resetTinyG.bind(this));

            // chevron hide body
            var that = this;
            $('#com-chilipeppr-widget-tinyg .hidebody').click(function (evt) {
                console.log("hide/unhide body");
                //if ($('#com-chilipeppr-widget-tinyg .panel-body .stat-row').hasClass('hidden')) {
                if ($('#com-chilipeppr-widget-tinyg .panel-body').hasClass('hidden')) {
                    // it's hidden, unhide
                    that.showBody(evt);
                } else {
                    // hide
                    that.hideBody(evt);
                }
            });

            // Feedhold !
            $('#com-chilipeppr-widget-tinyg .tinyg-feedhold').click(function () {
                console.log("tinyg-feedhold emergency stop");
                chilipeppr.publish("/com-chilipeppr-widget-serialport/send", "!\n");
                // announce to other widgets that user hit e-stop
                chilipeppr.publish('/com-chilipeppr-interface-cnccontroller/plannerpause', "");
                chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/feedhold", "");

                // update button and others to indicate what's next
                //$('#com-chilipeppr-widget-tinyg .tinyg-feedhold span').css('opacity', '0.5');
                $('#com-chilipeppr-widget-tinyg .tinyg-feedhold span').addClass('hidden');
                $('#com-chilipeppr-widget-tinyg .tinyg-cyclestart').addClass('btn-success');
                $('#com-chilipeppr-widget-tinyg .tinyg-cyclestart').text("Resume ~");
                $('#com-chilipeppr-widget-tinyg .tinyg-queueflush').text("Wipe %");
            });

            // Cycle resume ~
            $('#com-chilipeppr-widget-tinyg .tinyg-cyclestart').click(function () {
                console.log("tinyg-cyclestart");
                chilipeppr.publish("/com-chilipeppr-widget-serialport/send", '~\n{"qr":""}\n');
                chilipeppr.publish('/com-chilipeppr-interface-cnccontroller/plannerresume', "");
                // update button and others to indicate what's next
                //$('#com-chilipeppr-widget-tinyg .tinyg-feedhold span').css('opacity', 'initial');
                $('#com-chilipeppr-widget-tinyg .tinyg-feedhold span').removeClass('hidden');
                $('#com-chilipeppr-widget-tinyg .tinyg-cyclestart').removeClass('btn-success');
                $('#com-chilipeppr-widget-tinyg .tinyg-cyclestart').text("~");
                $('#com-chilipeppr-widget-tinyg .tinyg-queueflush').text("%");
            });
            $('#com-chilipeppr-widget-tinyg .tinyg-queueflush').click(function () {
                console.log("tinyg-queueflush");
                chilipeppr.publish("/com-chilipeppr-widget-serialport/send", '%\n{"qr":""}\n');
                chilipeppr.publish('/com-chilipeppr-interface-cnccontroller/plannerresume', "");

                // update button and others to indicate what's next
                $('#com-chilipeppr-widget-tinyg .tinyg-feedhold span').removeClass('hidden');
                $('#com-chilipeppr-widget-tinyg .tinyg-cyclestart').removeClass('btn-success');
                $('#com-chilipeppr-widget-tinyg .tinyg-cyclestart').text("~");
                $('#com-chilipeppr-widget-tinyg .tinyg-queueflush').text("%");
            });

            $('#com-chilipeppr-widget-tinyg .btn-toolbar .btn').popover({
                delay: 500,
                animation: true,
                placement: "auto",
                trigger: "hover",
                container: 'body'
            });

            // energize motors
            $('#com-chilipeppr-widget-tinyg .tinyg-motors-energize').click(function () {
                console.log("tinyg-motors-energize");
                that.energizeMotors();
                // update button and others to indicate what's next
                //$('#com-chilipeppr-widget-tinyg .tinyg-feedhold span').css('opacity', 'initial');
                $('#com-chilipeppr-widget-tinyg .tinyg-motors-unenergize').addClass('btn-danger');
            });
            $('#com-chilipeppr-widget-tinyg .tinyg-motors-unenergize').click(function () {
                console.log("tinyg-motors-unenergize");
                that.unEnergizeMotors();
                $('#com-chilipeppr-widget-tinyg .tinyg-motors-unenergize').removeClass('btn-danger');
            });
        },
        energizeTimer: null,
        energizeTimeoutTimer: null,
        energizeMotors: function () {
            if (this.energizeTimer == null) {
                // To keep the motors energized indefinitely we need to setup a timer. 
                // We can only do that correctly if we know what the timeout is ($mt) for 
                // the motors. If we don’t. Just fall back to the old way if issuing one 
                // "me" command. We will always issue an "me" command first as if we didn't
                // we would have to wait for the timer to pop before the motors are energized.
                chilipeppr.publish("/com-chilipeppr-widget-serialport/send", '{"me":""}\n');
                if (this.mt != null) {
                    // Setup a timer for keeping the motors energized. this.mt is in seconds
                    // and setInterval requires ms. We also need to shave off a half second
                    // to provide some overlap. If we don't, then the motors will unenergize
                    // themselves for a fraction of a second before being reenergized. My 
                    // testing has shown that issuing overlapping "me" commands is not 
                    // accumulative. Issuing a new "me" just appears to reset tinyg’s internal 
                    // timer, not add to it.
                    // Added a max timeout value so the motors would not run longer than 30 min.
                    // 30min = 1,800,000ms
                    this.energizeTimeoutTimer = setTimeout(this.energizeMotorTimeout, 1800000, this);
                    this.energizeTimer = setInterval(function () {
                        chilipeppr.publish("/com-chilipeppr-widget-serialport/send", '{"me":""}\n');
                    }, (this.mt * 1000) - 500);
                }
            }
        },
        unEnergizeMotors: function () {
            // If we have a valid timer running (may not if the button was pressed multiple
            // times), then kill the timer.
            if (this.energizeTimer != null) {
                clearInterval(this.energizeTimer);
                this.energizeTimer = null;
            }
            if (this.energizeTimeoutTimer != null) {
                clearTimeout(this.energizeTimeoutTimer);
                this.energizeTimeoutTimer = null;
            }
            chilipeppr.publish("/com-chilipeppr-widget-serialport/send", '{"md":""}\n');
        },
        energizeMotorTimeout: function (that) {
            // If we get here, then the motors have been on long enough. Let's kill the timer
            // and give the motors a rest.
            that.energizeTimeoutTimer = null;
            if (that.energizeTimer != null) {
                clearInterval(that.energizeTimer);
                that.energizeTimer = null;
            }
            chilipeppr.publish("/com-chilipeppr-widget-serialport/send", '{"md":""}\n');
            $('#com-chilipeppr-widget-tinyg .tinyg-motors-unenergize').removeClass('btn-danger');
        },
        getUrlParameter: function (sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName.length > 0) {
                    if (sParameterName[0] == sParam) {
                        return sParameterName[1];
                    }
                }
            }
        },
        urlParam: function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results == null) {
                return null;
            } else {
                return results[1] || 0;
            }
        },
        onRecvCmd: function (recvline) {
            // get a per line command from the serial port server via pubsub
            //console.log("onRecvCmd. recvline:", recvline);

            // we want to process the qr reports for buffer planner
            // sample: 
            // {"qr":27}

            if (!(recvline.dataline)) {
                console.log("got recvline but it's not a dataline, so returning.");
                return;
            }
            var msg = recvline.dataline;
            if (msg.match(/^{/)) {
                // it is json
                d = $.parseJSON(msg);
                //console.log("d:", d);
                if (d.qr) {
                    //console.log("it is a status report");
                    this.processPlannerStatus(d.qr);
                } else if (d.r && d.r.qr) {
                    //console.log("it is a status report from a direct request");
                    this.processPlannerStatus(d.r.qr);
                } else if (d.r && d.r.sr) {
                    // status report of position
                    this.publishAxisStatus(d.r.sr);
                } else if (d.sr) {
                    this.publishAxisStatus(d.sr);
                } else if (d.r && d.r.fb) {
                    this.processFirmwareBuild(d.r.fb);
                } else if (d.r && d.r.hp) {
                    this.processHardwarePlatform(d.r.hp);
                } else if (d.r && d.r.mt) {
                    this.processMotorTimeout(d.r.mt);
                }
                
                // see if footer has packet (line) mode data or char mode data
                // {"r":{"mt":2.00},"f":[3,0,6]}
                if (d.f && d.f.length > 0) {
                    if (d.f[0] == 2) {
                        this.updateCharModePProgBar(d.f[2]);
                    } else if (d.f[0] == 3) {
                        this.updatePktModePProgBar(d.f[2]);
                    }
                }
                
                // see if we have a local buffer size
                //{"Cmd":"Complete","Id":"g38","P":"COM7","LocalBufSize":0}
                if ('LocalBufSize' in d) {
                    this.updateCharModePProgBar(255 - d.LocalBufSize);
                } else if ('Lbs' in d) {
                    this.updateCharModePProgBar(255 - d.Lbs);
                }
            }

        },
        mt: null, // motor timeout value
        processMotorTimeout: function (mt) {
            // Read in the motor's timeout value. If the value is below
            // 1 second, then we will just consider it non-existant as
            // the value will not work correctly when used above. My 
            // testing has shown that issuing "me":"###" where ### is a
            // fixed timout value does not work in the current TinyG
            // firmware. If this is ever fixed, then we will not need to
            // get the timeout value as we can just use our own timeout
            // in the "me" command. This would be helpful if someone has
            // a really short "mt" value.
            var motorTimeout = parseFloat(mt);
            // I could not figure out how to set the motor timeout to less
            // than one second--this test may not be needed.
            if (motorTimeout >= 1.0) this.mt = motorTimeout;
        },
        hp: null, // hardware platform version
        processHardwarePlatform: function (hp) {
            var hpver = parseFloat(hp);
            this.hp = hpver;
            if (hpver >= 3) {
                // we're ok
                $('#com-chilipeppr-widget-tinyg .fb-alert').addClass("hidden");
            }
        },
        fbver: null,
        processFirmwareBuild: function (fb) {
            //debugger;
            fbver = parseFloat(fb);

            // publish off a signal so other widgets can pivot off this data too
            var pubData = {
                fbFloat: fbver,
                fb: fb,
                hp: this.hp
            }
            chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/firmware", pubData);

            // check if we have a hardware platform
            if (this.hp != null) {
                // we do. now do additional check on alternate versions
                if (this.hp >= 3) {
                    // this is G2 or TinyG v9
                    // we're fine for now. any firmware on this hp is fine.
                    $('#com-chilipeppr-widget-tinyg .fb-build').text("G2 " + fb.toFixed(2));
                    $('#com-chilipeppr-widget-tinyg .fb-alert').addClass("hidden");
                } else {
                    if (fbver >= 440.16) {
                        console.log("FB is safe. fbver:", fbver);
                        $('#com-chilipeppr-widget-tinyg .fb-build').text(fb.toFixed(2));
                        $('#com-chilipeppr-widget-tinyg .fb-alert').addClass("hidden");
                    } else {
                        // they are below threshold
                        $('#com-chilipeppr-widget-tinyg .fb-build').text(fb);
                        $('#com-chilipeppr-widget-tinyg .fb-alert').removeClass("hidden");
                    }
                }

            } else {

                // if we have no hardware platform, assume hp = 1
                if (fbver >= 435.10) {
                    console.log("FB is safe. fbver:", fbver);
                    $('#com-chilipeppr-widget-tinyg .fb-build').text(fb);
                    $('#com-chilipeppr-widget-tinyg .fb-alert').addClass("hidden");
                } else if (fbver < 200) {
                    // assume if we're down this low that it's v9
                    $('#com-chilipeppr-widget-tinyg .fb-build').text("G2 " + fb.toFixed(2));
                    $('#com-chilipeppr-widget-tinyg .fb-alert').addClass("hidden");
                
                } else {
                    // they are below threshold
                    $('#com-chilipeppr-widget-tinyg .fb-build').text(fb);
                    $('#com-chilipeppr-widget-tinyg .fb-alert').removeClass("hidden");
                }
            }
        },
        lastUnits: null,
        isShowingStats: true,
        lastCoords: {
            coord: null,
            coordNum: null
        },
        coor: ["G53", "G54", "G55", "G56", "G57", "G58", "G59"],
        publishAxisStatus: function (sr) {

            // Check if units are attached and are different from last units
            // [unit] units_mode - 0=inch, 1=mm
            if ("unit" in sr) {
                var units = sr.unit == 0 ? "inch" : "mm";

                // yes we have units. see if changed and thus why we should publish
                if (this.lastUnits != units) {
                    console.log("we have a unit change. publish it. units:", units);
                    chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/units", units);
                }
            }

            if ("coor" in sr) {
                var layerNum = sr.coor + 53;
                if (this.lastCoords.coordNum != layerNum) {

                    var layer = this.coor[sr.coor];
                    this.lastCoords = {
                        coord: layer,
                        coordNum: layerNum
                    };
                    console.log("we have a coordinate layer change. publish it. coord:", this.lastCoords);
                    chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/coords", this.lastCoords);

                }
            }

            // check other stats if user is showing full stats
            if (this.isShowingStats) {
                this.processStats(sr);
            }

            // Publish the axes updates last, so subscribers will process them with the correct units, coordinate system, etc. 
            // build normalized interface object
            var axes = {
                x: sr.posx != undefined ? sr.posx : null,
                y: sr.posy != undefined ? sr.posy : null,
                z: sr.posz != undefined ? sr.posz : null,
                a: sr.posa != undefined ? sr.posa : null,
                type: 'work'
            }
            // As of 29 Jun 2015, the init commands include machine coordinates. 
            /*if ((sr.posx != undefined) && (sr.mpox == undefined)) {
                this.initController(true);
                return; //Don't publish, it won't be correct. And, we will be redriven by the direct response. 
            };*/
            axes.mpo = {
                x: sr.mpox != undefined ? sr.mpox : null,
                y: sr.mpoy != undefined ? sr.mpoy : null,
                z: sr.mpoz != undefined ? sr.mpoz : null,
                a: sr.mpoa != undefined ? sr.mpoa : null,
                type: 'machine'
            }

            chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/axes", axes);


        },
        statEls: null,
        processStats: function (sr) {
            console.log("processStats. sr:", sr);
            if (this.statEls == null) this.statGetDomElements(); // lazy load stat dom for speed
            var e = this.statEls;
            // sample stats
            // '{"r":{"sr":{"line":0,"vel":0.00,"mpox":0.005,"mpoy":10.460,"mpoz":0.304,"mpoa":0.000,"coor":1,"ofsa":0.000,"ofsx":0.000,"ofsy":0.000,"ofsz":0.000,"dist":0,"unit":1,"stat":3,"homz":0,"homy":0,"homx":0,"momo":1},"f":[1,0,10,5440]}}'
            // {"r":{"sr":{"line":0,"posx":0.000,"posy":0.028,"posz":0.000,"posa":0.000,"feed":0.00,"vel":0.00,"unit":1,"coor":1,"dist":0,"frmo":0,"momo":1,"stat":4},"f":[1,0,10,4683]}}
            if ("line" in sr) {
                // we got a gcode line number
                e.line.text(sr.line);
                // let's publish an onExecute command
                chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/onExecute", {
                    line: sr.line
                });
            }
            if ("feed" in sr) e.feedrate.text(sr.feed);
            if ("vel" in sr) e.velocity.text(sr.vel);
            if ("dist" in sr) e.distance.text(sr.dist == 0 ? "Absolute" : "Incremental");
            if ("unit" in sr) e.units.text(sr.unit == 0 ? "Inch" : "mm");
            if ("stat" in sr) {
                var state = ["Initializing", "Ready", "Shutdown", "Stop", "End", "Run", "Hold", "Homing"];
                e.state.text(state[sr.stat]);
                chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/status", state[sr.stat]);
            }
            if ("momo" in sr) {
                var motion = ["Traverse", "Straight", "CW Arc", "CCW Arc"];
                e.motion.text(motion[sr.momo]);
            }
            if ("coor" in sr) {
                //var coor = ["G53", "G54", "G55", "G56", "G57", "G58", "G59"];
                e.coords.text(this.coor[sr.coor]);
            }
            if ("plan" in sr) {
                var plane = ["XY", "XZ", "YZ"];
                e.plane.text(plane[sr.plan]);
            }
            if ("path" in sr) {
                var path = ["Exact Stop", "Exact Path", "Continuous"];
                e.path.text(path[sr.path]);
            }


        },
        statGetDomElements: function () {
            console.log("statGetDomElements. this should only get called once.");
            this.statEls = {
                line: $('.com-chilipeppr-interface-cnccontroller-stat .stat-line'),
                velocity: $('.com-chilipeppr-interface-cnccontroller-stat .stat-velocity'),
                feedrate: $('.com-chilipeppr-interface-cnccontroller-stat .stat-feedrate'),
                state: $('.com-chilipeppr-interface-cnccontroller-stat .stat-state'),
                units: $('.com-chilipeppr-interface-cnccontroller-stat .stat-units'),
                coords: $('.com-chilipeppr-interface-cnccontroller-stat .stat-coords'),
                motion: $('.com-chilipeppr-interface-cnccontroller-stat .stat-motion'),
                plane: $('.com-chilipeppr-interface-cnccontroller-stat .stat-plane'),
                path: $('.com-chilipeppr-interface-cnccontroller-stat .stat-path'),
                distance: $('.com-chilipeppr-interface-cnccontroller-stat .stat-distance')
            }
        },
        plannerLastEvent: "resume",
        processPlannerStatus: function (qr) {
            //console.log("processPlannerStatus. qr:", qr);
            // see if we're below our happy threshold of where we'll allow the planner to get
            if (qr <= this.plannerPauseAt) {
                // we need to send pause signal
                if (this.plannerLastEvent == "resume") this.publishPlannerPause();
            } else if (qr >= this.plannerResumeAt) {
                // we need to send resume signal
                // but only if our last send was pause
                if (this.plannerLastEvent == "pause") this.publishPlannerResume();
            }

            // update ui
            this.updatePlannerProgBar(qr);
        },
        publishPlannerPause: function () {
            // tell other widgets to pause their sending because we're too far into
            // filling up the planner buffer
            this.plannerLastEvent = "pause";
            chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/plannerpause", "");
        },
        publishPlannerResume: function () {
            // tell other widgets they can send again
            this.plannerLastEvent = "resume";
            chilipeppr.publish("/com-chilipeppr-interface-cnccontroller/plannerresume", "");
        },
        progBar: null,
        progBarLbl: null,
        plannerMin: null,
        plannerMax: null,
        updatePlannerProgBar: function (qr) {
            if (this.progBar == null) {
                this.progBar = $('#com-chilipeppr-widget-tinyg .bufferprogress .progress-bar');
                this.progBarLbl = this.progBar.find('span');
                this.progBarMinMax = $('#com-chilipeppr-widget-tinyg .stat-plannerminmax');
                // let click on min/max reset
                var that = this;
                this.progBarMinMax.click(function (evt) {
                    console.log("resetting min/max for planner");
                    that.plannerMin = null;
                    that.plannerMax = null;
                    that.updatePlannerMinMax();
                });
            }
            // calc %
            var pct = (qr / 28) * 100;
            this.progBar.css('width', pct + "%");
            this.progBarLbl.text(qr);

            // color code based on planner fullness
            if (qr < this.plannerPauseAt) {
                this.progBar.addClass('progress-bar-danger');
                this.progBar.removeClass('progress-bar-warning');
            } else if (qr <= this.plannerResumeAt) {
                this.progBar.addClass('progress-bar-warning');
                this.progBar.removeClass('progress-bar-danger');
            } else {
                this.progBar.removeClass('progress-bar-warning');
                this.progBar.removeClass('progress-bar-danger');
            }

            // update max min
            var updatePlannerMinMax = false;
            if (this.plannerMin == null || qr < this.plannerMin) {
                this.plannerMin = qr;
                updatePlannerMinMax = true;
            }
            if (this.plannerMax == null || qr > this.plannerMax) {
                this.plannerMax = qr;
                updatePlannerMinMax = true;
            }
            if (updatePlannerMinMax) {
                this.updatePlannerMinMax();
            }
        },
        updatePlannerMinMax: function () {
            var min = this.plannerMin;
            if (min == null) min = "-";
            var max = this.plannerMax;
            if (max == null) max = "-";
            this.progBarMinMax.text(min + "/" + max);
        },
        pktModeProgBar: null,
        pktModeProgBarLbl: null,
        pktModeMin: null,
        pktModeMax: null,
        pktModeMinMax: null, // span el
        modeFormat: null, // should be 1 for Line (Pkt) Mode, 2 for Character Mode
        updatePktModePProgBar: function (qr) {
            if (this.modeFormat != 1) { //if (this.pktModeProgBar == null) {
                this.modeFormat = 1;
                $('#com-chilipeppr-widget-tinyg .pktmodelbl').html("Line&nbsp;Mode");
                this.pktModeProgBar = $('#com-chilipeppr-widget-tinyg .pktmodeprogress .progress-bar');
                this.pktModeProgBar.parents(".row").removeClass("hidden");
                this.pktModeProgBarLbl = this.pktModeProgBar.find('span');
                this.pktModeMinMax = $('#com-chilipeppr-widget-tinyg .stat-pktmodeminmax');
                // let click on min/max reset
                var that = this;
                this.pktModeMinMax.click(function (evt) {
                    console.log("resetting min/max for pkt mode");
                    that.pktModeMin = null;
                    that.pktModeMax = null;
                    that.updatePktModeMinMax();
                });
            }
            // calc %
            var pct = (qr / 26) * 100;
            if (pct < 10) pct = 10;
            this.pktModeProgBar.css('width', pct + "%");
            this.pktModeProgBarLbl.text(qr);

            // color code based on planner fullness
            if (qr < 2) {
                this.pktModeProgBar.addClass('progress-bar-danger');
                this.pktModeProgBar.removeClass('progress-bar-warning');
            } else if (qr <= 2) {
                this.pktModeProgBar.addClass('progress-bar-warning');
                this.pktModeProgBar.removeClass('progress-bar-danger');
            } else {
                this.pktModeProgBar.removeClass('progress-bar-warning');
                this.pktModeProgBar.removeClass('progress-bar-danger');
            }

            // update max min
            var updateMinMax = false;
            if (this.pktModeMin == null || qr < this.pktModeMin) {
                this.pktModeMin = qr;
                updateMinMax = true;
            }
            if (this.pktModeMax == null || qr > this.pktModeMax) {
                this.pktModeMax = qr;
                updateMinMax = true;
            }
            if (updateMinMax) {
                this.updatePktModeMinMax();
            }
        },
        updateCharModePProgBar: function (qr) {
            if (this.modeFormat != 2) { 
                this.modeFormat = 2;
                
                // we are hiding for now cuz don't like that it doesn't show
                // absolute buffer val, rather shows delta which is pointless
                //this.pktModeProgBar.parents(".row").addClass("hidden");
                //return;
                
                // original where we were showing
                $('#com-chilipeppr-widget-tinyg .pktmodelbl').html("Char&nbsp;Mode");
                this.pktModeProgBar = $('#com-chilipeppr-widget-tinyg .pktmodeprogress .progress-bar');
                this.pktModeProgBar.parents(".row").removeClass("hidden");
                this.pktModeProgBarLbl = this.pktModeProgBar.find('span');
                this.pktModeMinMax = $('#com-chilipeppr-widget-tinyg .stat-pktmodeminmax');
                // let click on min/max reset
                var that = this;
                this.pktModeMinMax.click(function (evt) {
                    console.log("resetting min/max for pkt mode");
                    that.pktModeMin = null;
                    that.pktModeMax = null;
                    that.updatePktModeMinMax();
                });
            }
            // calc %
            var pct = (qr / 255) * 100;
            if (pct < 10) pct = 10;
            this.pktModeProgBar.css('width', pct + "%");
            this.pktModeProgBarLbl.text(qr);

            // color code based on planner fullness
            if (qr < 20) {
                this.pktModeProgBar.addClass('progress-bar-danger');
                this.pktModeProgBar.removeClass('progress-bar-warning');
            } else if (qr < 100) {
                this.pktModeProgBar.addClass('progress-bar-warning');
                this.pktModeProgBar.removeClass('progress-bar-danger');
            } else {
                this.pktModeProgBar.removeClass('progress-bar-warning');
                this.pktModeProgBar.removeClass('progress-bar-danger');
            }

            // update max min
            var updateMinMax = false;
            if (this.pktModeMin == null || qr < this.pktModeMin) {
                this.pktModeMin = qr;
                updateMinMax = true;
            }
            if (this.pktModeMax == null || qr > this.pktModeMax) {
                this.pktModeMax = qr;
                updateMinMax = true;
            }
            if (updateMinMax) {
                this.updatePktModeMinMax();
            }
        },
        updatePktModeMinMax: function () {
            var min = this.pktModeMin;
            if (min == null) min = "-";
            var max = this.pktModeMax;
            if (max == null) max = "-";
            this.pktModeMinMax.text(min + "/" + max);
        },
        forkSetup: function () {
            var topCssSelector = '#com-chilipeppr-widget-tinyg';

            //$(topCssSelector + ' .fork').prop('href', this.fiddleurl);
            //$(topCssSelector + ' .standalone').prop('href', this.url);
            //$(topCssSelector + ' .fork-name').html(this.id);
            $(topCssSelector + ' .panel-title').popover({
                title: this.name,
                content: this.desc,
                html: true,
                delay: 200,
                animation: true,
                trigger: 'hover',
                placement: 'auto'
            });

            var that = this;
            //"http://raw.githubusercontent.com/chilipeppr/widget-pubsubviewer/master/auto-generated-widget.html",
            // chilipeppr.load("http://fiddle.jshell.net/chilipeppr/zMbL9/show/light/", function () {
            chilipeppr.load("http://raw.githubusercontent.com/chilipeppr/widget-pubsubviewer/master/auto-generated-widget.html", function () {
                require(['inline:com-chilipeppr-elem-pubsubviewer'], function (pubsubviewer) {
                    pubsubviewer.attachTo($('#com-chilipeppr-widget-tinyg .panel-heading .dropdown-menu'), that);
                });
            });

        },
    }
});