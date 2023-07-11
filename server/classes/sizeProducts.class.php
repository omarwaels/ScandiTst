<?php 

class sizeProducts extends products
{
	protected $size;

	public function __construct($product)
	{
        $this->sku = $product->sku;
        $this->name = $product->name;
        $this->price = $product->price;
       
        $this->dbConnection = new dbConnect();

		$this->size = $product->size;
	}
    public function setSize($_size){
        $this->size = $_size;
     }
     public function getSize(){
        return $this->size;
     }
     public function addProductDb(){
        $sql = "INSERT INTO `products` (`SKU`, `name`, `price`, `type_value_id`, `value_slot`, `height`, `width`) 
        VALUES (NULL, '$this->name', '$this->price', '1', '$this->size', NULL, NULL)";
        $stmt = $this->dbConnection->connect()->query($sql);
        $stmt->fetch();
        echo'done';

        
     }
}
?>