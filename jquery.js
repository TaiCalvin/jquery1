$("#action").on("click", main);
function main (){
  $("#grow-me").addClass("big");
  $("#shrink-me").removeClass("big");
  $(".link").attr("href", "https://www.example.com").text("somewhere");
  $("#hide-me").css("display","none");
  $("#show-me").css("display","block");
  $("li").text(console.log);
  $("h1").html("Welcome " + $('#name').val());
};