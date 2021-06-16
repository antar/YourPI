<?php

error_reporting(0);

date_default_timezone_set('Europe/Zurich');
  
$home_url="https://api.wes.fm/";
  
$page = isset($_GET['page']) ? $_GET['page'] : 1;
  
$records_per_page = 5;
  
$from_record_num = ($records_per_page * $page) - $records_per_page;

$key = "example_key";
