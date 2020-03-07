var sort_counter=0;
function sort(id,column)
{
  sort_counter++;
  Orders.forEach((item, i) => {
    if(item.id==id)
    {
      if(sort_counter==0)
      {
        item.products.sort(sort_default);
      }
      if(sort_counter==1 && column=="product")
      {
        item.products.sort(sort_products_asc);
      }
      if(sort_counter==1 && column=="price")
      {
        item.products.sort(sort_price_asc);
      }
      if(sort_counter==1 && column=="quantity")
      {
        item.products.sort(sort_quantity_asc)
      }
      if(sort_counter==1 && column=="total")
      {
        item.products.sort(sort_totalPrice_asc)
      }


      if(sort_counter==2 && column=="product")
      {
        item.products.sort(sort_products_desc);
      }
      if(sort_counter==2 && column=="price")
      {
        item.products.sort(sort_price_desc);
      }
      if(sort_counter==2 && column=="quantity")
      {
        item.products.sort(sort_quantity_desc)
      }
      if(sort_counter==2 && column=="total")
      {
        item.products.sort(sort_totalPrice_desc)
      }

    }
  });
  if(sort_counter==2)
  {
    sort_counter=-1;
  }
  getOrdInfo(id,"searchRes");
}
function sort_products_asc(a,b){
  if (a.name > b.name) return -1; // если первое значение больше второго
  if (a.name == b.name) return 0; // если равны
  if (a.name < b.name) return 1; // если первое значение меньше второго
}
function sort_products_desc(a,b){
  if (a.name > b.name) return 1; // если первое значение больше второго
  if (a.name == b.name) return 0; // если равны
  if (a.name < b.name) return -1; // если первое значение меньше второго
}
function sort_price_asc(a,b){
  if ( parseInt(a.price) > parseInt( b.price)) return -1; // если первое значение больше второго
  if (parseInt(a.price) == parseInt(b.price)) return 0; // если равны
  if (parseInt(a.price) < parseInt(b.price)) return 1; // если первое значение меньше второго
}
function sort_price_desc(a,b){
  if ( parseInt(a.price) > parseInt( b.price)) return 1; // если первое значение больше второго
  if (parseInt(a.price) == parseInt(b.price)) return 0; // если равны
  if (parseInt(a.price) < parseInt(b.price)) return -1; // если первое значение меньше второго
}
function sort_totalPrice_asc(a,b){
  if ( parseInt(a.totalPrice) > parseInt( b.totalPrice)) return -1; // если первое значение больше второго
  if (parseInt(a.totalPrice) == parseInt(b.totalPrice)) return 0; // если равны
  if (parseInt(a.totalPrice) < parseInt(b.totalPrice)) return 1; // если первое значение меньше второго
}
function sort_totalPrice_desc(a,b){
  if ( parseInt(a.totalPrice) > parseInt( b.totalPrice)) return 1; // если первое значение больше второго
  if (parseInt(a.totalPrice) == parseInt(b.totalPrice)) return 0; // если равны
  if (parseInt(a.totalPrice) < parseInt(b.totalPrice)) return -1; // если первое значение меньше второго
}
function sort_default(a,b){
  if ( parseInt(a.id) > parseInt( b.id)) return 1; // если первое значение больше второго
  if (parseInt(a.totalPrice) == parseInt(b.id)) return 0; // если равны
  if (parseInt(a.id) < parseInt(b.id)) return -1; // если первое значение меньше второго
}
function sort_quantity_desc(a,b){
  if ( parseInt(a.quantity) > parseInt( b.quantity)) return 1; // если первое значение больше второго
  if (parseInt(a.quantity) == parseInt(b.quantity)) return 0; // если равны
  if (parseInt(a.quantity) < parseInt(b.quantity)) return -1;
}
function sort_quantity_asc(a,b){
  if ( parseInt(a.quantity) > parseInt( b.quantity)) return -1; // если первое значение больше второго
  if (parseInt(a.quantity) == parseInt(b.quantity)) return 0; // если равны
  if (parseInt(a.quantity) < parseInt(b.quantity)) return 1;
}
