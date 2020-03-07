function shipping_active(){
  $('.CustomerInfo').css('display','none');
  $('.ShippedInfo').css('display','flex');
  $('.person-icon').removeClass("active");
  $('.truck-icon').addClass("active");
}

function custumer_active() {
  $('.CustomerInfo').css('display','flex');
  $('.ShippedInfo').css('display','none');
  $('.truck-icon').removeClass("active");
  $('.person-icon').addClass("active");
}
function activeOrder(id){
	$('[jsIdOrder]').removeClass("activeOrder");
  $('[jsIdOrder='+id+']').addClass("activeOrder");
}