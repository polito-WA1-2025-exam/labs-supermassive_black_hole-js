# Group "supermassive_black_hole.js"

## Members
- s344108 OTHMANI AMIR

# Exercise "Rescuing Surplus Food"

# Lab Journal

## Lab 1

During this lab we defined the objects needed to contain the data required for this project, specifying all the attributes and some useful methods to retrieve and handle all of this data correctly.

## Lab 2

During this lab we created the database that will actually contain the data needed for the project. As a consequence, we had to make some changes to the JS objects in order to support data handling from the db and, especially, in an  asynchronous way.

These are the tables we are working with:

- Establishment(id: INT PK, type: TEXT, name: TEXT, address: TEXT, phone_number: TEXT, category: TEXT)
  - type indicates if it is a store or a restaurant and category indicates what type of food they serve
- FoodItem(id: INT PK, food_item: TEXT, specifications: TEXT)
- Bag(id: INT PK, establishment_id: TEXT FK(Establishment.id), type: TEXT, size: TEXT, price: INT, time_range: TEXT, state: TEXT)
- AssociationBagFoodItem(bag_id: INT FK(Bag.id), food_item_id: INT FK(FoodItem.id), PRIMARY KEY(bag_id, food_item_id))
  - This table does not directly correspond to a JS object, it is used only because the JS object "Bag" has a list of food items as one of its attributes
- User(id: INT PK, username: TEXT, password: TEXT, name: TEXT, surname: TEXT, special_requests: TEXT)
- ShoppingCart(id: INT PK, user_id: TEXT FK(User.id))
- Reservation(id: INT PK, user_id: TEXT FK(User.id), shopping_cart_id: TEXT FK(ShoppingCart.id), purchase_time: TEXT, price: INT)
- AssociationReservationBags(reservation_id: INT FK(Reservation.id), bag_id: INT FK(Bag.id), PRIMARY KEY(reservation_id, bag_id))
  - Also this table does not correspond to a JS object for the same reasons of AssociationBagFoodItem.
 
If we want to visualize the whole database, it looks like this:
![image](https://github.com/user-attachments/assets/e5e83f7b-d959-4002-badb-ba64e1945d63)


## Lab n

Bla bla bla test.
