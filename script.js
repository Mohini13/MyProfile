 $( window ).on('load',function(){
var currentIndex = 0;
var images = $("#viewport img");
images.first().fadeIn();
images.each( function(i){
  var paddingTop = 0.5 *($('#viewport').height()-$(this).height());
  console.log(paddingTop)
  $ (this).css('padding-top',paddingTop);
});
$('#right img').on('click',function(event){
  images.eq( currentIndex).hide();
  currentIndex = (currentIndex + 1) % images.length;
  images.eq( currentIndex ).fadeIn();
}); 
$('#left img').on('click',function(event){
  images.eq( currentIndex).hide();
  var prevIndex = currentIndex -1;
  currentIndex = ( prevIndex < 0 ) ? images.length -1 : prevIndex;
 images.eq( currentIndex ).fadeIn();
});

/*});

$(document).ready( function () {*/
  $('#info').hide();
$('#form1').on('submit', function(event) {
  event.preventDefault();
if(validate()){

console.log($("input.First").val());

$('#info').show();}
});

function validate() {

 $("input").css("border-color","white")
 var success = true;
 
   
  var errorbox = $("span.error")
  errorbox.hide();
  errorbox.empty();


  var fill = $("input.First");
  var fill2 = $("input.Last");
  var fill3 = $("input.Address");
  var fill4 = $("input.Email");
  var fill5 = $("input.Phone");
  var fill6 = $("input.Course");
  var fill7 = $("input.Semester");

  //console.log($("input.verb1").val());
  
  if(fill.val().length==0) {
    errorbox.append("Please enter your first name here<br />")
    errorbox.show();
    fill.css("border-color","purple");
    success=false;

    }
    if(fill2.val().length==0) {
    errorbox.append("Please enter your last name here <br />")
    errorbox.show();
    fill2.css("border-color","purple");
        success=false;
    }
    if(fill3.val().length==0) {
      errorbox.append("Please enter your Adderss <br />")
    errorbox.show();
    fill3.css("border-color","purple");
        success=false;
    }
     if(fill4.val().length==0) {
       errorbox.append("Please enter your Email Adderss <br />")
    errorbox.show();
    fill4.css("border-color","purple");
        success=false;
    }
     if(fill5.val().length==0) {
       errorbox.append("Please enter your Phone No: <br />")
    errorbox.show();
    fill5.css("border-color","purple");
        success=false;
    }
     if(fill6.val().length==0) {
       errorbox.append("Please enter your Course<br />")
    errorbox.show();
    fill6.css("border-color","purple");
        success=false;
    }
     if(fill7.val().length==0) {
       errorbox.append(" Please enter your Semester <br />")
    errorbox.show();
    fill7.css("border-color","purple");
        success=false;
    }
    
   return success;
}

});







