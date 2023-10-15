/*$(".arrow").click(function(){
    let emailStr = $('.input-text').val();
    $('input').css('border', '2px solid red');
    $(".icon-error").toggle()
  

    $("span").text("Please Provide A Valid Email")
    console.log(emailStr)
})



$(".icon-arrow").click(function(){
    let emailStr = $('.input-text').val();
    $('input').css('border', '2px solid red');
    $(".icon-error").toggle()
  

    $("span").text("Please Provide A Valid Email")
    console.log(emailStr)
   
})
*/


$(".icon-arrow").on("click",function(){
    
    $('input').css('border', '2px solid red');
    $(".icon-error").toggle()
    $(".arrow").addClass("clicked")
    $("span").text("Please Provide A Valid Email")
    let emailStr = $('.input-text').val();
    console.log(emailStr)
    
   
    
})

if (window.innerWidth < 1220){

    
    $("h3").html("C O M I N G`+"<br>"+ ` S O O N`" );

}
