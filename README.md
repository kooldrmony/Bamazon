# *Bamazon*

This application is an amazon-like application that allows the user/customer to select from a certain number of items (in this case, 10 items) and place an order of how ever many units of that item they choose to purchase. If there is a sufficient amount of that item, the application will allow the transaction and provide the total amount for the purchase. If, however, there is not enough units of that item in stock, the application will notify the customer and cancel the order.

## **How to deploy the Bamazon Application**

To deploy the application on your computer, simply clone the git repository to onto your command line so that you can access the application.

Once you have cloned the repository onto your computer, you will type in *node bamazonCustomer.js* into your command line to deploy the application. Below is an example of this:

![Screenshot](step1.png)


After you input that command in your command line it will deploy the application and show the list of available items in the store along with a prompt question asking you to choose the item number of the item you wish to purchase. 

![Screenshot](step2.png)

Once you enter the id number of the item, a second prompt question will occur asking you the number of units you would like to purchase of this item.

![Screenshot](step3.png)

If there is sufficient supplies of that item in the database, the application will give you the total amount for the purchase. Additionally, it will also update the database with the new/remaining number of units for that item in the database.

![Screenshot](step4.png)


If there is insufficient supplies of the item, the application will notify you and cancel the order.

![Screenshot](step5.png)

## **Technologies Used**

The following programs/technologies were used in creating of this application:

1. NodeJS
2. MySQL

## **NPM Packages Used**

There were two NPM packages used in this application which are MYSQL and Inquirer.
