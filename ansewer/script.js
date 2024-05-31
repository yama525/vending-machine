let balance = 0;
let juiceData = "";
const juices = [
  {name: "コーラ", price: 100, class: "cola"},
  {name: "ポカリ", price: 200, class: "pocari"},
  {name: "レモン", price: 250, class: "lemon"}
];
$("#juice1").html(juices[0].name);
$("#juice2").html(juices[1].name);
$("#juice3").html(juices[2].name);
$("#price1").html(juices[0].price);
$("#price2").html(juices[1].price);
$("#price3").html(juices[2].price);

$("#input-price").html(balance);

// コイン押した時
$("#en10").on("click", function(){
  balance = balance + 10;
  $("#input-price").html(balance);
});
$("#en50").on("click", function(){
  balance = balance + 50;
  $("#input-price").html(balance);
});
$("#en100").on("click", function(){
  balance = balance + 100;
  $("#input-price").html(balance);
});
$("#en500").on("click", function(){
  balance = balance + 500;
  $("#input-price").html(balance);
});
$("#reset-btn").on("click", function(){
  balance = 0;
  $("#input-price").html(balance);
});

// ジュースボタンを押した時
$("#juice-btn1").on("click", function(){
  juiceData = juices[0]
  buy(juiceData);
});
$("#juice-btn2").on("click", function(){
  juiceData = juices[1]
  buy(juiceData);
});
$("#juice-btn3").on("click", function(){
  juiceData = juices[2]
  buy(juiceData);
});

function buy(juiceData){
  if(balance - juiceData.price >= 0){
    $(".wrapper").fadeOut(1000);
    $(".wrapper2").show();
    $("#wrapper2-can").addClass(juiceData.class);
    $("#wrapper2-can-label").addClass(juiceData.class + "-label");
    $("#wrapper2-juice").html(juiceData.name);
    balance = balance - juiceData.price;
    $("#change").html("お釣り：" + balance + "円");
  } else {
    $("#input-price").html("お金が足りません");
    setTimeout(function(){
      $("#input-price").html(balance);
    },2000); 
  }
}

// 続けて買うボタンを押した時
$("#next").on("click", function(){
  $(".wrapper2").hide();
  $(".wrapper").fadeIn(1000);
  $("#wrapper2-can").removeClass(juiceData.class);
  $("#wrapper2-can-label").removeClass(juiceData.class + "-label");
  $("#input-price").html(balance);
});
