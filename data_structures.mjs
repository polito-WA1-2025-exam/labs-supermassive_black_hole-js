"use strict";

import dayjs from 'dayjs';

function Bag(id, reservation_id, establishment_id, type, size, content, price, state, time_range) {
	this.id = id;
	this.reservation_id = reservation_id;
	this.establishment_id = establishment_id;
	this.type = type;
	this.size = size;
	this.content = content;		//probably this line will have to be changed
	this.price = price;
	this.state = state;
	this.time_range = time_range;
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

	this.add = (special_request) => {
		this.special_requests.push(special_request);
	}
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

	this.add = (bag) => {
		this.selected_bags.push(bag);
	}

	this.confirm_reservation = () => {
		// for now, I have no idea on how to implement this
	}
}

function Reservation(id, user_id, shopping_cart_id, bags_list, purchase_time) {
	this.id = id;
	this.user_id = user_id;
	this.shopping_cart_id = shopping_cart_id;
	this.bags_list = bags_list;		//this line is probably wrong
	this.purchase_time = purchase_time;

	//TODO: make a function that computes the total price

}

