// Instruction niveau 1

//Consigne 2 : Switch Color
$("#btn1").click(function() {
$('.ligne').removeClass('full');
$('.ligne').addClass('empty');
});

//Consigne 3 : Switch Color Again
$('#btn2').click(function() {
$('.ligne').removeClass('empty');
$('.ligne').addClass('full');
});

//Consigne 4
$(".circle").click(function() {
  $(this).toggleClass("empty");
});

$(".circle").click(function() {
  $(this).toggleClass("full");
});

// Instruction niveau 2 

// Consigne 1 
$(".carrer1").click(function(){
	$(this).toggleClass('empty');
	$('.l1.circle').toggleClass('empty');

	$(this).toggleClass('full');
	$('.l1.circle').toggleClass('full');
});

// if($(".circle").hasClass(".l1")==true){$(".l1").toggleClass("full");}

// else $(".l1").text("Non Il n'existe aucun élément p avec cette classe");

// $(".carrer1").click(function(){
// 	$('.l1.circle').removeClass('empty');
// 	$('.l1.circle').addClass('full');
// 	$(this).hasClass('full');
// 	$(this).toggleClass('full');

// });

// $(".carrer1").click(function(){
// 	$(this).hasClass('empty');
// 	$(this).toggleClass('empty');
// 	$('.l1.circle').hasClass('full');
// 	$('.l1.circle').toggleClass('full');
// });



$(".carrer2").click(function(){
	$(this).toggleClass('empty');
	$('.l2.circle').hasClass('empty');
	$('.l2.circle').toggleClass('empty');

	$(this).toggleClass('full');
	$('.l2.circle').hasClass('full');
	$('.l2.circle').toggleClass('full');
});



$(".carrer3").click(function(){
	$(this).toggleClass('empty');
	$('.l4.circle').hasClass('empty');
	$('.l4.circle').toggleClass('empty');

	$(this).toggleClass('full');
	$('.l4.circle').hasClass('full');
	$('.l4.circle').toggleClass('full');
});




$(".carrer4").click(function(){
	$(this).toggleClass('empty');
	$('.l5.circle').hasClass('empty');
	$('.l5.circle').toggleClass('empty');

	$(this).toggleClass('full');
	$('.l5.circle').hasClass('full');
	$('.l5.circle').toggleClass('full');
});


$(".losange").click(function(){
	$(this).toggleClass('empty');
	$(this).toggleClass('full');

	$('.l3.circle').hasClass('empty');
	$('.l3.circle').toggleClass('empty');
	$('.l3.circle').hasClass('full');
	$('.l3.circle').toggleClass('full');

	$('.l1:eq(1)').hasClass('full');
	$('.l1:eq(1)').toggleClass('full');
	$('.l1:eq(1)').hasClass('empty');
	$('.l1:eq(1)').toggleClass('empty');

	$('.l2:eq(2)').hasClass('full');
	$('.l2:eq(2)').toggleClass('full');
	$('.l2:eq(2)').hasClass('empty');
	$('.l2:eq(2)').toggleClass('empty');

	$('.l4:eq(2)').hasClass('full');
	$('.l4:eq(2)').toggleClass('full');
	$('.l4:eq(2)').hasClass('empty');
	$('.l4:eq(2)').toggleClass('empty');

	$('.l5:eq(2)').hasClass('full');
	$('.l5:eq(2)').toggleClass('full');
	$('.l5:eq(2)').hasClass('empty');
	$('.l5:eq(2)').toggleClass('empty');
});


$( "#btn1" )
  .on( "mouseenter", function() {
    $( this ).css({
      "background-color": "white",
      "font-weight": "bolder",
      "color": "black"
    });
  })
  .on( "mouseleave", function() {
    var styles = {
      backgroundColor : "darkred",
      fontWeight: "",
      color: "white"
    };
    $( this ).css( styles );
  });


$( "#btn2" )
  .on( "mouseenter", function() {
    $( this ).css({
      "background-color": "white",
      "font-weight": "bolder",
      "color": "black"
    });
  })
  .on( "mouseleave", function() {
    var styles = {
      backgroundColor : "darkred",
      fontWeight: "",
      color: "white"
    };
    $( this ).css( styles );
  });