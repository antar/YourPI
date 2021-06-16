<?php

header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
include_once '../config/database.php';
include_once '../config/header.php';
include_once '../objects/product.php';

$database = new Database();
$db = $database->getConnection();

$product = new Product($db);

$product->id = isset($_GET['id']) ? $_GET['id'] : die();

// read the details of product to be edited	
$product->readOne();

if ($product->name != null) {
	// create array
	$product_arr = array(
		"id" =>  $product->id,
		"name" => $product->name,
		"description" => $product->description,
		"price" => $product->price,
		"category_id" => $product->category_id,
		"category_name" => $product->category_name
  
	);
  
	// set response code - 200 OK
	http_response_code(200);
  
	// make it json format
	echo json_encode($product_arr);
}
  
else {
	// set response code - 404 Not found
	http_response_code(404);
  
	// tell the user product does not exist
	echo json_encode(array("message" => "Product does not exist."));
}
