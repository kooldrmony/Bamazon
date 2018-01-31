//This section requires the packages that will be used in this application
var mysql = require("mysql");
var inquirer = require("inquirer");

//This section sets the total variable that is used in the buyer function
var total = total;

//This section creates a variable that connects and allows us to use the mysql package by creating the connection to the database.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Derrick#21",
  database: "bamazon"
});

//This section throws an error if the connection is not successful. If it is it logs connection id.
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
});


//This section creats the start function 
function start() {

//This section creates a connection to the database and determines which table to pull information from.
  connection.query("SELECT * FROM products", function(err, results) {
  
    if (err) throw err;

    else {
      //This section creates a for loop and logs each item in the database along with the ID, product name and price.
      for (var i = 0; i < results.length; i++) {
              console.log("Item Id: " + results[i].item_id, "Product Name: " + results[i].product_name, "Price: $" + results[i].price);
            }

         }
    //This calls the buyer function and runs it.
     buyer();
  });

}

//This section creats the buyer function
function buyer () {
//This section uses the inquirer package to set up an input type that asks the customer the two questions.
    inquirer.prompt([{
            name: "itemId",
            type: "input",
            message: "What is the item ID you would like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "Quantity",
            type: "input",
            message: "How many of this item would you like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        //This section checks to see if there is enough of the product selected to be sold.
        }]).then(function(answer){
  connection.query('SELECT * FROM products WHERE item_id = ?', [answer.itemId], function(err, res){
    if(answer.Quantity > res[0].stock_quantity){
      console.log('Insufficient Quantity');
      console.log('This order has been cancelled');
      console.log('');
      
    }
    //This section uses the total variable to give the total amount that customer owes for their order.
    else{
      total = res[0].price * answer.Quantity;
      console.log('Thanks for your order');
      console.log('You owe $' + total);
      console.log('');
      //This section is supposed to update the product table where the stock_quantity is updated with the new amount of inventory after the order.
      connection.query('UPDATE products SET ? Where ?',
        [
          {
            stock_quantity: res[0].stock_quantity - answer.Quantity
          },

          {
            item_id: answer.itemId
          }
        ], 

        function(err, res){});

    }
  })
})
};