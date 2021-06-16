<?php

header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
include_once '../config/database.php';
include_once '../objects/product.php';
  
$database = new Database();
$db = $database->getConnection();
  
$product = new Product($db);
  
$data = json_decode(file_get_contents("php://input"));
  
if (!empty($data->name) && !empty($data->price) && !empty($data->description) && !empty($data->category_id)) {
  
	$product->name = $data->name;
	$product->price = $data->price;
	$product->description = $data->description;
	$product->category_id = $data->category_id;
	$product->created = date('Y-m-d H:i:s');
  
	// create the product
	if ($product->create()) {
  
		// set response code - 201 created
		http_response_code(201);
  
		// tell the user
		echo json_encode(array("message" => "Product was created."));
	}
  
	// if unable to create the product, tell the user
	else {
  
		// set response code - 503 service unavailable
		http_response_code(503);
  
		// tell the user
		echo json_encode(array("message" => "Unable to create product."));
	}
}
  
// tell the user data is incomplete
else {
  
	// set response code - 400 bad request
	http_response_code(400);
  
	// tell the user
	echo json_encode(array("message" => "Unable to create product. Data is incomplete."));
}