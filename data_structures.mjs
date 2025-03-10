"use strict";

import dayjs from 'dayjs';

function Bag(id, reservation_id, establishment_id, type, size, content, price, time_range) {
	this.id = id;
	this.reservation_id = reservation_id;
	this.establishment_id = establishment_id;
	this.type = type;
	this.size = size;
	this.content = content;		//TODO: probably this line will have to be changed
	this.price = price;
	this.time_range = time_range;  //TODO: also this will have to be changed
	this.state = "available";
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
	this.password = password;
	this.name = name;
	this.surname = surname;
	this.special_requests = [];

	this.add_request = (special_request) => {
		this.special_requests.push(special_request);
	}

	this.remove_request = (special_request) => this.special_requests.filter(sr => sr === special_request)
}

function FoodItem(id, type, specifications) {
	this.id = id;
	this.type = type;
	this.specifications = specifications;
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

function Reservation(id, user_id, shopping_cart, purchase_time, price) {
	this.id = id;
	this.user_id = user_id;
	this.shopping_cart = shopping_cart;
	this.purchase_time = purchase_time;
	this.price = price;
	

	//TODO: if a reservation is canceled, the reservation object has to be deleted,
	//		but I don't know how to manage that yet.
}

