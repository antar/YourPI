<?php
class Category {
  
	private $conn;
	private $table_name = "categories";
  
	public $id;
	public $name;
	public $description;
	public $created;
  
	public function __construct($db) {
		$this->conn = $db;
	}
  
	public function readAll() {
		//select all data
		$query = "SELECT
					id, name, description
				FROM
					" . $this->table_name . "
				ORDER BY
					name";
  
		$stmt = $this->conn->prepare( $query );
		$stmt->execute();
  
		return $stmt;
	}
	
	public function read(){
	  
		//select all data
		$query = "SELECT
					id, name, description
				FROM
					" . $this->table_name . "
				ORDER BY
					name";
	  
		$stmt = $this->conn->prepare( $query );
		$stmt->execute();
	  
		return $stmt;
		
	}
}