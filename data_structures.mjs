"use strict";

import dayjs from 'dayjs';
import sqlite from 'sqlite3';

const db = new sqlite.Database('objects.sqlite', (err) => { if (err) throw err });

function Bag(id, reservation_id, establishment_id, type, size, price, time_range) {
	this.id = id;
	this.reservation_id = reservation_id;
	this.establishment_id = establishment_id;
	this.type = type;							// Type can only be either regular or surprise
	this.size = size;							// Only three possible sizes: small, medium and large
	this.price = price;							// Price may depend on the food items, I should pay attention to this later
	this.time_range = time_range;  				// TODO: I don't really know how to manage this
	this.state = "available";					// I assume every bag is available initially

	this.food_items = []; 						// This should contain a list of all the food items in the bag
}

function FoodItem(id, food_item) {
	this.id = id;
	this.food_item = food_item;
	this.specifications = []; 					// This attribute is used to refer to the special requests
}

function FoodSpecification(id, food_specification) {	// This object is used to manage food specifications in a standardized way.
														// Although, I don't think I can actually link them to the user's special requests.
	this.id = id;
	this.food_specification = food_specification;
}

function Establishment(id, type, name, address, phone_number, category) {
	this.id = id;
	this.type = type;
	this.name = name;
	this.address = address;
	this.phone_number = phone_number;
	this.category = category;
}

function User(id, username, password, name, surname) {
	this.id = id;
	this.username = username;
	this.password = password;		// This attribute will need encryption but I don't know how it's managed in sqlite
	this.name = name;
	this.surname = surname;
	this.special_requests = [];		// This attribute is weird because the user must be able to specify it textually,
									// but in this way it's impossible to apply foreign keys

	this.add_request = (special_request) => {
		this.special_requests.push(special_request);
	}

	this.remove_request = (special_request) => this.special_requests.filter(sr => sr === special_request)
}


function ShoppingCart(id, user_id) {
	this.id = id;
	this.user_id = user_id;
	this.selected_bags = [];
	this.price = 0;

	this.add_bag = (bag) => {
		if (bag.state === "available")
			this.selected_bags.push(bag);
		else
			console.log("bag already reserved");
	}

	this.remove_bag = (bag_id) => this.selected_bags.filter(b => b.id === bag_id)

	this.calculatePrice = () => {
		this.selected_bags.forEach((bag) => {
			this.price += bag.price;
		});
	}

	this.confirm_reservation = () => {
		this.selected_bags.forEach((bag, index) => {
			this.selected_bags[index].state = "reserved";
		});
		calculatePrice();	// is "this" necessary in this case?
	}

	this.cancel_reservation = () => {
		this.selected_bags.forEach((bag, index) => {
			this.selected_bags[index].state = "available";
		});
		this.price = 0;
	}
}


function Reservation(id, user_id, shopping_cart_id, purchase_time, price) {
	this.id = id;
	this.user_id = user_id;						// Is user_id actually needed?
	this.shopping_cart_id = shopping_cart_id;
	this.purchase_time = purchase_time;
	this.price = price;
	
	// Should I also put the list of selected bags here?
	

	//TODO: if a reservation is canceled, the reservation object has to be deleted,
	//		but I don't know how to manage that yet.
}