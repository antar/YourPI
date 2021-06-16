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
  
$product->id = $data->id;
  
// delete the product
if ($product->delete()) {
  
	// set response code - 200 ok
	http_response_code(200);
  
	// tell the user
	echo json_encode(array("message" => "Product was deleted."));
}
  
// if unable to delete the product
else {
  
	// set response code - 503 service unavailable
	http_response_code(503);
  
	// tell the user
	echo json_encode(array("message" => "Unable to delete product."));
}