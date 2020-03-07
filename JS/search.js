function find_order(){
  let string = $('.search_field').val();
  arr_string = string.split(" ");
  Orders.forEach((item, i) => {
    item.coincidence = 0; //свойство для подсчета кол-ва совпадений
    arr_string.forEach((word, i) => {
     if(item.id==word || item.id=="Order "+word)
      {
       item.coincidence++;
      }
    for (var field in item.OrderInfo) {

        if(1+item.OrderInfo[field].indexOf(word)){
          item.coincidence++;
        }

    }
    for (var field in item.ShipTo) {

        if(1+item.ShipTo[field].indexOf(word)){
          item.coincidence++;
        }

    }
    for (var field in item.CustomerInfo) {

        if(1+item.CustomerInfo[field].indexOf(word)){
          item.coincidence++;
        }
    }
  });
  });
  add_orders("searchRes");
}
function find_products(){
  let string = $('.search_products').val();
  let arr_string = string.split(" ");
  let id = $(".line-th").attr("idorder");//получаем id ордера
  Orders.forEach((item, i) => {
    if(item.id===id)
    {
      item.products.forEach((product, i) => {
        product.coincidence = 0; //свойство для подсчета кол-ва совпадений
        console.log(product);
        for (let key in product) {
          arr_string.forEach((word, i) => {

            if(1+(product[key].toString().indexOf(word))){
              product.coincidence++;
          }
          });

        }
      });

    }
  });
getOrdInfo(id,"searchRes");
}