<?php
include 'includes/auto_loader.include.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


// $productData = json_decode( file_get_contents('php://inputs') );
// echo $productData;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  $product = json_decode( file_get_contents('php://input') );
  if(isset($product->type)){
    var_dump($product->type) ;
    $classname=$product->type;
    $product=new $classname($product);
    $product->addProductDb();
  }else{
    $delItem = new delItemDb;
    
    foreach ($product as $value) {

      $delItem->setId($value);
      $delItem->delItem();

    }
  }
  // collect value of input field
  // if (empty($product)) {
  //   echo "product is empty";
  // } else {

  //   echo "product is empty";
  // }
}
if ($_SERVER["REQUEST_METHOD"] == "GET") {
  // collect value of input field
  $products = new getAllProducts ();
  $products->getAll();
}
?>

