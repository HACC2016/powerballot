$(document).ready(function() {

    $('#s12galuteria').click(function(event){
    	$('#s12galuteria-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#s12galuteria-box').fadeIn(100);
        });
    });
    $('#s12galuteria-boxclose').click(function(){
        $('#s12galuteria-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#s12middleton').click(function(event){
    	$('#s12middleton-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#s12middleton-box').fadeIn(100);
        });
    });
    $('#s12middleton-boxclose').click(function(){
        $('#s12middleton-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#s12lethem').click(function(event){
    	$('#s12lethem-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#s12lethem-box').fadeIn(100);
        });
    });
    $('#s12lethem-boxclose').click(function(){
        $('#s12lethem-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#h18hashem').click(function(event){
      event.preventDefault();
      var y_pos = event.pageY - event.clientY + 20;
        $('#h18hashem-box').css({position:"absolute",top: y_pos + "px"});
        $('#overlay').fadeIn(500, function(){
            $('#h18hashem-box').fadeIn(100);
        });
    });
    $('#h18hashem-boxclose').click(function(){
        $('#h18hashem-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#h18halvorsen').click(function(event){
    	$('#h18halvorsen-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#h18halvorsen-box').fadeIn(100);
        });
    });
    $('#h18halvorsen-boxclose').click(function(){
        $('#h18halvorsen-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#hon4iwasa').click(function(event){
    	$('#hon4iwasa-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#hon4iwasa-box').fadeIn(100);
        });
    });
    $('#hon4iwasa-boxclose').click(function(){
        $('#hon4iwasa-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#hon4ozawa').click(function(event){
    	$('#hon4ozawa-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#hon4ozawa-box').fadeIn(100);
        });
    });
    $('#hon4ozawa-boxclose').click(function(){
        $('#hon4ozawa-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#hon4strouble').click(function(event){
    	$('#hon4strouble-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#hon4strouble-box').fadeIn(100);
        });
    });
    $('#hon4strouble-boxclose').click(function(){
        $('#hon4strouble-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

    $('#hon4waters').click(function(event){
    	$('#hon4waters-box').css({position:"absolute",top:"20px"});
        $('#overlay').fadeIn(500, function(){
            $('#hon4waters-box').fadeIn(100);
        });
    });
    $('#hon4waters-boxclose').click(function(){
        $('#hon4waters-box').fadeOut(100, function(){
            $('#overlay').fadeOut(100);
        });
    });

});
