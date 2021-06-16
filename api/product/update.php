<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
include_once '../config/database.php';
include_once '../config/header.php';
include_once '../objects/product.php';
  
$database = new Database();
$db = $database->getConnection();
  
$product = new Product($db);
  
$data = json_decode(file_get_contents("php://input"));

var_dump($data);
  
$product->id = $data->id;
  
$product->name = $data->name;
$product->price = $data->price;
$product->description = $data->description;
$product->category_id = $data->category_id;
  
if ($product->update()) {
  
	http_response_code(200);
  
	echo json_encode(array("message" => "Product was updated."));
}
  
else {
  
	http_response_code(503);
  
	echo json_encode(array("message" => "Unable to update product."));
}