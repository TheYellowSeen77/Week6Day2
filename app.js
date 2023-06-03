for (let i = 0; i < 16; i++){
    $('#container').append('<div class="box"></div>');
}

$( ".box" ).on( "click", function() {
    $( this ).toggleClass( "diffBox" );
  });