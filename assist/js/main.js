//clear function
  $("#op1").on("click", function(event){
     $(".screen").val("");
 });

 //btn value an append to screen
 $("#num1").on("click", function(event){
   var value=$(".screen").val();
    $(".screen").val(value + "1");
});
$("#num2").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"2");
});
$("#num3").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"3");
});
$("#num4").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"4");
});
$("#num5").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"5");
});
$("#num6").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"6");
});
$("#num7").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"7");
});
$("#num8").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"8");
});
$("#num9").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"9");
});
$("#num0").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"0");
});
$("#point").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+".");
});
$(".add").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"+");
});
$(".mult").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"×");
});
$(".divide").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"÷");
});
$(".sub").on("click", function(event){
  var value=$(".screen").val();
   $(".screen").val(value+"-");
});
//add function
$(".equal").on("click", function(event){
  var addN = parseInt( $(".screen").val() );
   var operation ="+"
   var last_number  =  parseInt( $(".screen").val()) ;
if(operation === "+"){
    var result = addN + last_number
   $(".screen").val(result);
};
});
//mult
// $(".equal").on("click", function(event){
//   var addN = parseInt( $(".screen").val() );
//    var operation ="×"
//    var last_number  =  parseInt( $(".screen").val()) ;
// if(operation === "×"){
//     var result = addN * last_number
//    $(".screen").val(result);
// };
// });
// //divide
// $(".equal").on("click", function(event){
//   var addN = parseInt( $(".screen").val() );
//    var operation ="÷"
//    var last_number  =  parseInt( $(".screen").val()) ;
// if(operation === "÷"){
//     var result = addN / last_number
//    $(".screen").val(result);
// };
// });
//sub
// $(".equal").on("click", function(event){
//   var addN = parseInt( $(".screen").val() );
//    var operation ="-"
//    var last_number  =  parseInt( $(".screen").val()) ;
// if(operation === "-"){
//     var result = addN - last_number
//    $(".screen").val(result);
// };
// });
