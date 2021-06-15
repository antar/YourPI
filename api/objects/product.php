<?php

class Product {
	
	private $conn;
	private $table_name = "products";
  
	public $id;
	public $name;
	public $description;
	public $price;
	public $category_id;
	public $category_name;
	public $created;
  
	public function __construct($db) {
		$this->conn = $db;
	}
	
	function read() {
	  
		// select all query
		$query = "SELECT
					c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
				FROM
					" . $this->table_name . " p
					LEFT JOIN
						categories c
							ON p.category_id = c.id
				ORDER BY
					p.created DESC";
	  
		// prepare query statement
		$stmt = $this->conn->prepare($query);
	  
		// execute query
		$stmt->execute();
	  
		return $stmt;
		
	}
	
	function create() {
	  
		// query to insert record
		$query = "INSERT INTO
					" . $this->table_name . "
				SET
					name=:name, price=:price, description=:description, category_id=:category_id, created=:created";
	  
		// prepare query
		$stmt = $this->conn->prepare($query);
	  
		// sanitize
		$this->name=htmlspecialchars(strip_tags($this->name));
		$this->price=htmlspecialchars(strip_tags($this->price));
		$this->description=htmlspecialchars(strip_tags($this->description));
		$this->category_id=htmlspecialchars(strip_tags($this->category_id));
		$this->created=htmlspecialchars(strip_tags($this->created));
	  
		// bind values
		$stmt->bindParam(":name", $this->name);
		$stmt->bindParam(":price", $this->price);
		$stmt->bindParam(":description", $this->description);
		$stmt->bindParam(":category_id", $this->category_id);
		$stmt->bindParam(":created", $this->created);
	  
		// execute query
		if ($stmt->execute()) {
			return true;
		}
	  
		return false;
		  
	}
	
	function readOne() {
	  
		// query to read single record
		$query = "SELECT
					c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
				FROM
					" . $this->table_name . " p
					LEFT JOIN
						categories c
							ON p.category_id = c.id
				WHERE
					p.id = ?
				LIMIT
					0,1";
	  
		// prepare query statement
		$stmt = $this->conn->prepare( $query );
	  
		// bind id of product to be updated
		$stmt->bindParam(1, $this->id);
	  
		// execute query
		$stmt->execute();
	  
		// get retrieved row
		$row = $stmt->fetch(PDO::FETCH_ASSOC);
	  
		// set values to object properties
		$this->name = $row['name'];
		$this->price = $row['price'];
		$this->description = $row['description'];
		$this->category_id = $row['category_id'];
		$this->category_name = $row['category_name'];
	}
}
?>