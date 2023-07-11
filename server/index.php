<?php
include 'includes/auto_loader.include.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


// $productData = json_decode( file_get_contents('php://inputs') );
// echo $productData;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $product = json_decode( file_get_contents('php://input') );
  if (empty($product)) {
    echo "product is empty";
  } else {
    var_dump($product->type) ;
    $classname=$product->type;
    $product=new $classname($product);
    $product->addProductDb();
  }
}
if ($_SERVER["REQUEST_METHOD"] == "GET") {
  // collect value of input field
  $products = new getAllProducts ();
  $products->getAll();
}
?>

