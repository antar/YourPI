<?php

header("Content-Type: application/json; charset=UTF-8");
  
include_once '../config/database.php';
include_once '../config/header.php';
include_once '../objects/category.php';
  
$database = new Database();
$db = $database->getConnection();
  
$category = new Category($db);
  
$stmt = $category->read();
$num = $stmt->rowCount();
  
if ($num > 0) {
  
	$categories_arr = array();
	$categories_arr["records"] = array();
  
	// retrieve our table contents
	// fetch() is faster than fetchAll()
	// http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
	while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
		// extract row
		// this will make $row['name'] to
		// just $name only
		extract($row);
  
		$category_item= array(
			"id" => $id,
			"name" => $name,
			"description" => html_entity_decode($description)
		);
  
		array_push($categories_arr["records"], $category_item);
	}
  
	http_response_code(200);
  
	echo json_encode($categories_arr);
}
  
else {
  
	http_response_code(404);
  
	echo json_encode(
		array("message" => "No categories found.")
	);
}