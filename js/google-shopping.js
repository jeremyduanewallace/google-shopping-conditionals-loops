

var data = require('../products.json');

// var shoppingCount = 0;
// for(var i = 0; i < data.items.length; i++) {
//   var item = data.items[i];
//   if(item.kind === 'shopping#product') {
//     shoppingCount++;
//   }
// }

// console.log(shoppingCount);


// for(var i = 0; i < data.items.length; i++) {
// 	var item = data.items[i];
// 	if (item.product.inventories[0].availability === 'backorder') {
		
// 		console.log(item.product.title);
// 	}
// }

  //  for(var i = 0; i < data.items.length; i++){
  //  	var item = data.items[i];
  //  	if (item.product.images.length > 1) {
		// console.log(item.product.title);
  //  	}
  //  }

   // for(var i = 0; i < data.items.length; i++){
   // 	   var item = data.items[i];
   // 	   if (item.product.brand === 'Nikon'){
   	   	
   // 	   console.log(item.product.title)
   // 	   }
   // }

   // for(var i = 0; i < data.items.length; i++){
   // 	   var item = data.items[i];
   // 	   if (item.product.author.name === 'eBay' && item.product.brand === 'Canon'){
   	   	
   // 	   console.log(item.product.title);
   // 	   }
   // }

       for(var i = 0; i < data.items.length; i++){
          	   var item = data.items[i];
          	   console.log();
          	   
          	   	}
          




// 1.) Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?
// 2.) Print the `title` all items with a `backorder` availability in `inventories`

// 3.) Print the `title` all items with more than one image link.

// 4.) Print all "Canon" products in the items (careful with case sensitivity).
// 5.) Print all `items` that have an author name of "eBay" and are brand "Canon".
// 6.) Print all the products with their **brand**, **price**, and an **image link**