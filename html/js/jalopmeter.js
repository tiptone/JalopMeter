var total_score             = 0;
var engine_score            = 0;
var orig_engine_score       = 0;
var more_engine_score       = 0;
var more_engine_total_score = 0;
var tbs_score               = 0;
var carbs_score             = 0;
var aspiration_score        = 0;
var body_style_score        = 0;
var more_body_style_score   = 0;
var wheels_driven_score     = 0;
var engine_location_score   = 0;
var transmission_score      = 0;
var country_of_origin_score = 0;
var powa_score              = 0;
var age_score               = 0;
var other_score             = 0;

var hybrid_flag = false;

$(function() {
    $("#accordian").accordion({
        autoHeight: false,
        change: function (event, ui) {
            if (ui.newHeader.text() == 'Point Key')
            {
                score = parseInt(engine_score) + parseInt(more_engine_total_score) + parseInt(aspiration_score)
                      + parseInt(body_style_score) + parseInt(more_body_style_score) + parseInt(wheels_driven_score)
                      + parseInt(engine_location_score) + parseInt(transmission_score)
                      + parseInt(country_of_origin_score) + parseInt(powa_score) + parseInt(age_score) + parseInt(other_score);

                if (score == 0) {
                    $("#score_0").removeClass('light');
                }
                if (score >= 1 && score <= 5) {
                    $("#score_1").removeClass('light');
                }
                if (score >= 6 && score <= 15) {
                    $("#score_2").removeClass('light');
                }
                if (score >= 16 && score <= 30) {
                    $("#score_3").removeClass('light');
                }
                if (score >= 31 && score <= 45) {
                    $("#score_4").removeClass('light');
                }
                if (score >= 46 && score <= 75) {
                    $("#score_5").removeClass('light');
                }
                if (score >= 76 && score <= 100) {
                    $("#score_6").removeClass('light');
                }
                if (score >= 101 && score <= 150) {
                    $("#score_7").removeClass('light');
                }
                if (score >= 151 && score <= 200) {
                    $("#score_8").removeClass('light');
                }
                if (score >= 201 && score <= 250) {
                    $("#score_9").removeClass('light');
                }
                if (score >= 251) {
                    $("#score_10").removeClass('light');
                }

                $("#points_label").html(score);
            }
        }
    });
});

$("#engine").change(function () {
    $("#engine_tag").html('');
    $("#engine_hybrid").removeAttr('checked');
    engine_score = 0;
    orig_engine_score = 0;
    hybrid_flag = false;

    engine_score = $(this).val();

    switch ($("#engine").attr('selectedIndex'))
    {
        case 0:
            engine_score = 0;
            orig_engine_score = 0;
            hybrid_flag = false;
            $("#engine_hybrid").removeAttr('checked');
            break;
        case 3:
            $("#engine_tag").html('We heart Trabants');
            break;
        case 4:
            $("#engine_tag").html('May your Fuldamobil live long and prosper.');
            break;
        case 5:
            $("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
                        engine_score = -5;
                        $(this).dialog('close');
                        $("#engine_score_label").html(engine_score);
                     },
                    'No' : function() {
                        engine_score = 2;
                        $(this).dialog('close');
                        $("#engine_score_label").html(engine_score);
                    }
                }
            });
            $("#dialogText").html('Is this 5-cylinder engine in a Jetta?');
            $("#engine_tag").html('What, you think an Acura Vigor deserves more?');
            break;
        case 7:
            $("#engine_tag").html('Datsun Z, Jeep Cherokee, 3-Series, Dodge Dart? Hell yeah!');
            break;
        case 10:
            $("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
                        engine_score = 75;
                        $(this).dialog('close');
                        $("#engine_score_label").html(engine_score);
                    },
                    'No' : function() {
                        engine_score = 25;
                        $(this).dialog('close');
                        $("#engine_score_label").html(engine_score);
                    }
                }
            });
            $("#dialogText").html('Are you driving a Bristol Fighter?');
            break;
        case 12:
            $("#engine_tag").html('Especially if you drive a 917.');
            break;
        case 15:
            $("#engine_tag").html('I hear you, Udman.');
            break;
        case 16:
            $("#engine_tag").html('Give 2 points to the guy sitting next you.');
            break;
    }
    $("#engine_score_label").html(engine_score);
});

$("#engine_hybrid").click(function () {
    if (hybrid_flag)
    {
        hybrid_flag = false;
        engine_score = orig_engine_score;
    }
    else
    {
        hybrid_flag = true;
        orig_engine_score = engine_score;
        engine_score = engine_score / 1.4;
        engine_score = engine_score.toPrecision(3);
    }
    $("#engine_score_label").html(engine_score);
});

$("#more_engine").change(function () {
    $("#more_engine_tag").html('');

    more_engine_score = $(this).val();
    
    if ($("#more_engine").attr('selectedIndex') == 0)
    {
        more_engine_score = 0;
        tbs_score         = 0;
        carbs_score       = 0;
        
        $("#tbs").attr('selectedIndex', 0);
        $("#carbs").attr('selectedIndex', 0);
    }
    else if ($("#more_engine").attr('selectedIndex') == 1)
    {
        msg = 'Even if you have a 4-banger, that 4-banger could be in a '
            + '<a href="http://jalopnik.com/cars/part-i%7C-kicking-the-snot'
            + '-out-of-the-dragon/se7en-se7en-oh-my-se7en-277056.php" '
            + 'target="_blank">Se7en</a>.';
        $("#more_engine_tag").html(msg);
    }

    more_engine_total_score = parseInt(more_engine_score) + parseInt(tbs_score) + parseInt(carbs_score);
    
    $("#more_engine_score_label").html(more_engine_total_score);
});
$("#tbs").change(function() {
    tbs_score = $(this).val();
    more_engine_total_score = parseInt(more_engine_score) + parseInt(tbs_score) + parseInt(carbs_score);
    
    $("#more_engine_score_label").html(more_engine_total_score);
});
$("#carbs").change(function() {
    carbs_score = $(this).val();
    more_engine_total_score = parseInt(more_engine_score) + parseInt(tbs_score) + parseInt(carbs_score);
    
    $("#more_engine_score_label").html(more_engine_total_score);
});

$("#aspiration").change(function() {
    aspiration_score = $(this).val();
    $("#aspiration_score_label").html(parseInt(aspiration_score));
});

$("#body_style").change(function() {
	$("#body_style_tag").html('');
    
    body_style_score = $(this).val();

    switch ($("#body_style").attr('selectedIndex'))
    {
        case 0:
            body_style_score = 0;
            break;
        case 1:
        	$("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
                        body_style_score = 20;
                        $(this).dialog('close');
                        $("#body_style_score_label").html(body_style_score);
                        $("#body_style_tag").html('For stealth');
                    },
                    'No' : function() {
                        engine_score = 25;
                        $(this).dialog('close');
                        $("#body_style_score_label").html(body_style_score);
                    }
                }
            });
            $("#dialogText").html('Is your 4-door an E39 M5?');
            break;
        case 2:
        	$("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
                        body_style_score = -10;
                        $(this).dialog('close');
                        $("#body_style_score_label").html(body_style_score);
                        
                    },
                    'No' : function() {
                        body_style_score = 5;
                        $(this).dialog('close');
                        $("#body_style_score_label").html(body_style_score);
                        $("#body_style_tag").html('Despite what Lutz says, we love wagons.');
                    }
                }
            });
            $("#dialogText").html('Do any of those 5 doors slide?');
            break;
        case 3:
            $("#body_style_tag").html('Viva la shooting brake!');
            break;
        case 4:
        	$("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
                        body_style_score = 35;
                        $(this).dialog('close');
                        $("#body_style_score_label").html(body_style_score);
                        
                    },
                    'No' : function() {
                        body_style_score = 25;
                        $(this).dialog('close');
                        $("#body_style_score_label").html(body_style_score);
                    }
                }
            });
        	$("#dialogText").html('Are these two doors gullwing and/or scissors?');
        	$("#body_style_tag").html('Screw practicality.');
            break;
    }
    $("#body_style_score_label").html(body_style_score);
});

$("#more_body_style").change(function() {
    more_body_style_score = $(this).val();
    
    $("#more_body_style_score_label").html(more_body_style_score);
});

$("#wheels_driven").change(function() {
    $("#wheels_driven_tag").html('');

    wheels_driven_score = $(this).val();

    switch ($("#wheels_driven").attr('selectedIndex'))
    {
        case 0:
            break;
        case 1:
        	$("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
                        wheels_driven_score = -105;
                        $(this).dialog('close');
                        $("#wheels_driven_score_label").html(wheels_driven_score);
                        
                    },
                    'No' : function() {
                        $(this).dialog('close');
                        $("#wheels_driven_score_label").html(wheels_driven_score);
                    }
                }
            });
            msg = "Hey, I love a good front driver as much as "
                + "the next guy, but you just don't get any "
                + "points. Sorry.";
            $("#wheels_driven_tag").html(msg);
            $("#dialogText").html('Is the vehicle a SUV?');
            break;
        case 3:
        	$("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
                        wheels_driven_score = 15;
                        $(this).dialog('close');
                        $("#wheels_driven_score_label").html(wheels_driven_score);
                        
                    },
                    'No' : function() {
                        wheels_driven_score = -50;
                        $(this).dialog('close');
                        $("#wheels_driven_score_label").html(wheels_driven_score);
                    }
                }
            });
            msg = 'This means you have low gears and you use '
                + 'them. Have you ever moved your transfer case?';
        	$("#dialogText").html(msg);
            break;
        case 4:
        	$("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
                        wheels_driven_score = -55;
                        $(this).dialog('close');
                        $("#wheels_driven_score_label").html(wheels_driven_score);
                        
                    },
                    'No' : function() {
                        wheels_driven_score = 25;
                        $(this).dialog('close');
                        $("#wheels_driven_score_label").html(wheels_driven_score);
                    }
                }
            });
            $("#dialogText").html('Is the vehicle a SUV?');
            $("#wheels_driven_tag").html('Lets face facts. Rear-wheel drive is the best.');
            break;
    }

    $("#wheels_driven_score_label").html(wheels_driven_score);
});

$("#engine_location").change(function() {
    $("#engine_location_tag").html('');

    engine_location_score = $(this).val();

    if ($("#engine_location").attr('selectedIndex') == 0)
    {
        engine_location_score = 0;
    }
    else if ($("#engine_location").attr('selectedIndex') == 4)
    {
        $("#engine_location_tag").html('<a href="http://jalopnik.com/cars/retro/864-cubes-of-hairy-oldsmobile-goodness-246169.php" target="_blank">Hairy Olds</a>');
    }

    $("#engine_location_score_label").html(engine_location_score);
});

$("#transmission").change(function() {
    $("#transmission_tag").html('');

    transmission_score = $(this).val();

    if ($("#transmission").attr('selectedIndex') == 0)
    {
    	transmission_score = 0;
    }
    else if ($("#transmission").attr('selectedIndex') == 1)
    {
    	$("#modalDialog").dialog({
            resizable: false,
            width: 500,
            modal: true,
            buttons: {
                'Yes' : function() {
    		        $(this).dialog('close');

    		        $("#modalDialog").dialog({
                        resizable: false,
                        width: 500,
                        modal: true,
                        buttons: {
                            'Yes' : function() {
                                transmission_score = -30;
                                $(this).dialog('close');
                                $("#transmission_score_label").html(transmission_score);
                                
                            },
                            'No' : function() {
                            	transmission_score = 10;
                                $(this).dialog('close');
                                $("#transmission_score_label").html(transmission_score);
                            }
                        }
                    });
                	$("#dialogText").html('Is it that weird new BMW/MB column shifter?');
                },
                'No' : function() {
                    transmission_score = 0;
                    $(this).dialog('close');
                    $("#transmission_score_label").html(transmission_score);
                }
            }
        });
    	$("#dialogText").html('Is it column shift?');
    }
    else if ($("#transmission").attr('selectedIndex') == 2)
    {
        $("#transmission_tag").html('And good for you.');
    }
    else if ($("#transmission").attr('selectedIndex') == 4)
    {
        $("#transmission_tag").html("You really don't get this whole driving thing, do you?");
    }
    else if ($("#transmission").attr('selectedIndex') == 6)
    {
    	$("#modalDialog").dialog({
            resizable: false,
            width: 500,
            modal: true,
            buttons: {
                'Yes' : function() {
    		        transmission_score = 30;
                    $(this).dialog('close');
                    $("#transmission_score_label").html(transmission_score);
                    
                },
                'No' : function() {
                	transmission_score = 5;
                    $(this).dialog('close');
                    $("#transmission_score_label").html(transmission_score);
                }
            }
        });
    	$("#dialogText").html('Ferrari/Maserati-style setup where the paddles are stock-mounted?');
    }

    $("#transmission_score_label").html(transmission_score);
});

$("#country_of_origin").change(function() {
    $("#country_of_origin_tag").html('');

    country_of_origin_score = $(this).val();

    if ($("#country_of_origin").attr('selectedIndex') == 0)
    {
        country_of_origin_score = 0;
    }
    else if ($("#country_of_origin").attr('selectedIndex') == 2)
    {
    	$("#modalDialog").dialog({
            resizable: false,
            width: 500,
            modal: true,
            buttons: {
                'Yes' : function() {
    		        country_of_origin_score = -10;
                    $(this).dialog('close');
                    $("#country_of_origin_score_label").html(country_of_origin_score);
                    
                },
                'No' : function() {
                	country_of_origin_score = 1;
                    $(this).dialog('close');
                    $("#country_of_origin_score_label").html(country_of_origin_score);
                }
            }
        });
    	$("#dialogText").html('Are you driving a 4-banger slushbox Camry?');
    }
    else if ($("#country_of_origin").attr('selectedIndex') == 3)
    {
    	$("#modalDialog").dialog({
            resizable: false,
            width: 500,
            modal: true,
            buttons: {
                'Yes' : function() {
    		        country_of_origin_score = -5;
                    $(this).dialog('close');
                    $("#country_of_origin_score_label").html(country_of_origin_score);
                    
                },
                'No' : function() {
                	country_of_origin_score = 5;
                    $(this).dialog('close');
                    $("#country_of_origin_score_label").html(country_of_origin_score);
                }
            }
        });
    	$("#dialogText").html('Was your domestic car made in Korea?');
    }
    else if ($("#country_of_origin").attr('selectedIndex') == 4)
    {
    	$("#modalDialog").dialog({
            resizable: false,
            width: 500,
            modal: true,
            buttons: {
                'Yes' : function() {
    		        country_of_origin_score = -10;
                    $(this).dialog('close');
                    $("#country_of_origin_score_label").html(country_of_origin_score);
                    
                },
                'No' : function() {
                	$(this).dialog('close');

                	$("#modalDialog").dialog({
                        resizable: false,
                        width: 500,
                        modal: true,
                        buttons: {
                            'Yes' : function() {
                		        country_of_origin_score = -100;
                                $(this).dialog('close');
                                $("#country_of_origin_score_label").html(country_of_origin_score);
                                
                            },
                            'No' : function() {
                            	country_of_origin_score = 10;
                                $(this).dialog('close');
                                $("#country_of_origin_score_label").html(country_of_origin_score);
                            }
                        }
                    });
                	$("#dialogText").html('Are you driving a new Bug?');
                }
            }
        });
    	$("#dialogText").html('Are you driving a Jetta?');
    }
    else if ($("#country_of_origin").attr('selectedIndex') == 6)
    {
        $("#country_of_origin_tag").html('You brave man.');
    }
    else if ($("#country_of_origin").attr('selectedIndex') == 7)
    {
        $("#country_of_origin_tag").html('You brave fucker.');
    }
    else if ($("#country_of_origin").attr('selectedIndex') == 11)
    {
        $("#country_of_origin_tag").html('Land of the Raging Hoon.');
    }
    else if ($("#country_of_origin").attr('selectedIndex') == 12)
    {
    	$("#modalDialog").dialog({
            resizable: false,
            width: 500,
            modal: true,
            buttons: {
                'Yes' : function() {
    		        country_of_origin_score = -90;
                    $(this).dialog('close');
                    $("#country_of_origin_score_label").html(country_of_origin_score);
                    
                },
                'No' : function() {
                	country_of_origin_score = 100;
                    $(this).dialog('close');
                    $("#country_of_origin_score_label").html(country_of_origin_score);
                }
            }
        });
        msg = "As in your French SM has an Italian engine. Or "
            + "if your Cobra has a British chassis and a 'Merican "
            + "engine that was built in Canada.<br /><br />"
            + "Are you driving an R-Class built in Tennessee?";
    	$("#dialogText").html(msg);
    }
    else if ($("#country_of_origin").attr('selectedIndex') == 13)
    {
        $("#country_of_origin_tag").html("And you're lucky to be getting them.");
    }

    $("#country_of_origin_score_label").html(country_of_origin_score);
});

$("#powa").change(function() {
    $("#powa_tag").html('');

    powa_score = $(this).val();

    switch ($("#powa").attr('selectedIndex'))
    {
        case 0:
            powa_score = 0;
            break;
        case 1:
            $("#powa_tag").html("You're very brave.");
            break;
        case 2:
        	$("#powa_tag").html("You're very poor.");
            break;
        case 3:
        	$("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
        		        powa_score = 20;
                        $(this).dialog('close');
                        $("#powa_score_label").html(powa_score);
                        
                    },
                    'No' : function() {
                    	powa_score = 0;
                        $(this).dialog('close');
                        $("#powa_score_label").html(powa_score);
                    }
                }
            });
        	$("#dialogText").html('Are you driving a Se7en or a Miata?');
            break;
        case 4:
        	$("#powa_tag").html('Not too shabby.');
            break;
        case 5:
        	$("#powa_tag").html("We like where you're going.");
            break;
        case 6:
        	$("#powa_tag").html('Awesome. The power sweet spot. Not too hot, not too cold');
            break;
        case 7:
        	$("#powa_tag").html("You're rich. Big deal. Unless you drive a Z06. Then we're jealous and we hate you.")
            break;
        case 8:
        	$("#powa_tag").html('You might be rich, but we love your taste in cars.');
            break;
        case 9:
        	$("#powa_tag").html('50 points seems about right.');
            break;
        case 10:
        	$("#modalDialog").dialog({
                resizable: false,
                width: 500,
                modal: true,
                buttons: {
                    'Yes' : function() {
        		        powa_score = 1000000000;
                        $(this).dialog('close');
                        $("#powa_score_label").html(powa_score);
                        
                    },
                    'No' : function() {
                    	powa_score = 100;
                        $(this).dialog('close');
                        $("#powa_score_label").html(powa_score);
                    }
                }
            });
        	$("#dialogText").html('Are you driving a Vector?');
            break;
    }

    $("#powa_score_label").html(powa_score);
});

$("#age").change(function() {
    $("#age_tag").html('');

    age_score = $(this).val();
    
    switch ($("#age").attr('selectedIndex'))
    {
        case 1:
            $("#age_tag").html('Congratulations.');
            break;
        case 4:
        	$("#age_tag").html('You can wrench.');
            break;
        case 5:
        	$("#age_tag").html('You can really wrench.');
            break;
        case 6:
        	$("#age_tag").html('Can we have a ride? Pretty please?');
            break;
        case 7:
        	$("#age_tag").html('The golden age of rad. Sigh...');
            break;
        case 8:
        	$("#age_tag").html('Especially if you have Gullwings.');
            break;
        case 9:
        	$("#age_tag").html('And we tip our collective cap at you.');
            break;
    }

    $("#age_score_label").html(age_score);
});

var cupholder=0, ashtray=0, bondo=0, no_fear=0, truck_nutz=0;
var dashboard=0, working_dashboard=0, hydropneumatic=0, waterbed=0;

function sum_others ()
{
    out = parseInt(cupholder) + parseInt(ashtray)
        + parseInt(bondo) + parseInt(no_fear) + parseInt(truck_nutz)
        + parseInt(dashboard) + parseInt(working_dashboard)
        + parseInt(hydropneumatic) + parseInt(waterbed);

    other_score = out;

    $("#other_score_label").html(other_score);
}
$("#cupholders").change(function() {
    cnt = parseInt($(this).val());
    
    if ($("#cupholders").attr('selectedIndex') == 0)
    {
        cupholder = 0;
    }
    else
    {
        cupholder = cnt * -5;
    }
    sum_others();
});
$("#ashtrays").change(function() {
    cnt = parseInt($(this).val());

    if ($("#ashtray").attr('selectedIndex') == 0)
    {
        ashtray = 0;
    }
    else
    {
    	ashtray = cnt * 5;

        if (cnt > 5)
        {
            ashtray += 50;
        }
    }
    sum_others();
});
$("#bondo").blur(function() {
    cnt = parseInt($(this).val());

    bondo = cnt * 10;

    sum_others();
});
$("#no_fear").change(function() {
    if ($("#no_fear").attr('checked'))
    {
        no_fear = -1000;
    }
    else
    {
        no_fear = 0;
    }
    sum_others();
});
$("#truck_nutz").change(function() {
    if ($("#truck_nutz").attr('checked'))
    {
    	$("#modalDialog").dialog({
            resizable: false,
            width: 500,
            modal: true,
            buttons: {
                'Yes' : function() {
    		        truck_nutz = 500;
                    $(this).dialog('close');
                    sum_others();
                    
                },
                'No' : function() {
                	truck_nutz = -100;
                    $(this).dialog('close');
                    sum_others();
                }
            }
        });
    	$("#dialogText").html('Do you live in Virginia?');
    }
    else
    {
        truck_nutz = 0;
        sum_others();
    }
});
$("#dashboard").change(function() {
    if ($("#dashboard").attr('checked'))
    {
        dashboard = 25;
    }
    else
    {
        dashboard = 0;
    }
    sum_others();
});
$("#working_dashboard").change(function() {
    if ($("#working_dashboard").attr('checked'))
    {
        working_dashboard = 30;
    }
    else
    {
        working_dashboard = 0;
    }
    sum_others();
});
$("#hydropneumatic").change(function() {
    if ($("#hydropneumatic").attr('checked'))
    {
    	hydropneumatic = 50;
    }
    else
    {
    	hydropneumatic = 0;
    }
    sum_others();
});
$("#waterbed").change(function() {
    if ($("#waterbed").attr('checked'))
    {
        waterbed = 6.9;
    }
    else
    {
        waterbed = 0;
    }
    sum_others();
});

