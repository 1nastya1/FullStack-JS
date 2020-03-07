window.onload = function(){
	add_orders();
	shipping_active();
	getOrdInfo(Orders[0].id);
	activeOrder(Orders[0].id);
}
function add_orders(flag){
	let bufferOrders = Orders.slice();
	$(".orders").html(" ");
	if(flag=="searchRes"){
		for(let i=0; i<bufferOrders.length; ++i)
		{
			if(bufferOrders[i].coincidence==0)
			{
				bufferOrders.splice(i,1);
				--i;
			}
		}
		function compare(a,b)
		{
			if (a.coincidence > b.coincidence) return -1; // если первое значение больше второго
      	if (a.coincidence == b.coincidence) return 0; // если равны
      	if (a.coincidence < b.coincidence) return 1; // если первое значение меньше второго
		}
		bufferOrders.sort(compare);
	}
	$(".head-name").text("Orders ("+bufferOrders.length+")")
	if(bufferOrders.length==0)
	{
		$(".orders").html("<div class='small' style='text-align:center'>Заказы не найдены :(</div>");
	}
	bufferOrders.forEach((item,i)=>{

		var status;
		switch(item.OrderInfo.status)
		{
			case "Accepted":
			status = "status-success"
			break;
			case"Pending":
			status = "status-pending"
			break;
			default:
			status = "status-late"
		}
		var id = item.id;
		$('<div>', {
		class: 'order',
		append:	
		$('<div>',{
			class: "order-info",
			append:
			$('<div>',{
				class:"order-number",
				text:"Order "+item.id,}).add(
				$('<div>',{
				class: "order-date",
				text: item.OrderInfo.createdAt})
				)
			}).add(
			$('<div>',{
				class:'order-container-1',
                append:
                $('<div>',{
                    class: 'order-container-2',
                    append: $('<div>',{
                    	class:"order-customer",
                    	text:item.OrderInfo.customer,
                    }).add(
                    $('<div>',{
                    	class:"order-ship-date",
                    	text:item.OrderInfo.shippedAt,
                    })
                )
			}).add(
              	$('<div>',{
              		class:"order-status "+status,
              		text:item.OrderInfo.status,
          		})
				)
			})
		)
		}).attr('onClick', 'getOrdInfo('+item.id+'); activeOrder('+item.id+')').attr('jsIdOrder', item.id)
       .appendTo(".orders");
	});
}    



function getOrdInfo(id, key){
	let bufferOrders = Orders.concat();
	$(".buffer-line-tr").html(" ");
	bufferOrders.forEach((item, i) =>{
		if(item.id==id){
			$(".number-of-order").text("Order " +item.id);
			$(".custumer").text("Custumer " +item.OrderInfo.customer);
			$(".ordered").text("Ordered " +item.OrderInfo.createdAt);
			$(".shipped").text("Shipped " +item.OrderInfo.shippedAt);

			$(".shipped-name").text(item.ShipTo.name);
      		$(".shiped-address").text(item.ShipTo.Address);
      		$(".zip").text(item.ShipTo.ZIP);
      		$(".region").text(item.ShipTo.Region);
      		$(".country").text(item.ShipTo.Country);

      		$(".name-surname").text(item.CustomerInfo.firstName+" "+item.CustomerInfo.lastName);
      		$(".custumer-address").text(item.CustomerInfo.address);
      		$(".phone").text(item.CustomerInfo.phone);
      		$(".email").text(item.CustomerInfo.email);

      		var total=0;
      		var t=0;
      		item.products.forEach((item_prod, i)=>{
      			total+=parseInt(item_prod.price) * parseInt(item_prod.quantity);

      			if(item_prod.coincidence!=0 && key=="searchRes")
      			{
      				t++;
      				$('<div>',{
      					class: "line-tr",
      				}).html(
      				'<div> <span class="bold naming">'+item_prod.name+'</span> <span class="little number">'+item_prod.id+'</span></div>'+
		            '<div class="hidder">Unit Price:    </div>'+ '<div> <span><span class="price">'+item_prod.price+'</span><span class="little wallet-table"> '+item_prod.currency+'</span></span></div>'+
		            '<div class="hidder">Quantity:   </div>'+ 
		            '<div><span><span class="little">'+item_prod.quantity+'</span></span></div>'+
		            '<div class="hidder">Total:   </div>'+
		            '<div class="bold"><span> <span class="price">'+item_prod.totalPrice+'</span><span class="little wallet-table">EUR</span></span></div>'
		            ).appendTo(".buffer-line-tr")
      			}
      			else if(key != "searchRes"){
      				t++;
      				$('<div>',{
      					class: "line-tr",
      				}).html(
      				'<div> <span class="bold naming">'+item_prod.name+'</span> <span class="little number">'+item_prod.id+'</span></div>'+
		            '<div class="hidder">Unit Price:    </div>'+ '<div> <span><span class="price">'+item_prod.price+'</span><span class="little wallet-table">'+item_prod.currency+'</span></span></div>'+
		            '<div class="hidder">Quantity:   </div>'+ '<div><span><span class="little">'+item_prod.quantity+'</span></span></div>'+
		            '<div class="hidder">Total:   </div>'+
		            '<div class="bold"><span> <span class="price">'+item_prod.totalPrice+'</span><span class="little wallet-table">EUR</span></span></div>'
		            ).appendTo(".buffer-line-tr")
      			}
      			$(".lineItem").text("Line Items("+(t)+")");
      		});

      		$("[data-label=Product]").attr("onClick","sort("+id+",'product')");
      		$("[data-label=UnitPrice]").attr("onClick","sort("+id+",'price')");
      		$("[data-label=Quantity]").attr("onClick","sort("+id+",'quantity')");
     			$("[data-label=Total]").attr("onClick","sort("+id+",'total')");
     			$("#jsOrderRefresher").attr("onClick","getOrdInfo("+id+")");
      		$(".line-th").attr("idOrd",id); //хранение id ордера в произвольном аттрибуте
      		$(".eu").text(total);
      	}
    });
}  
