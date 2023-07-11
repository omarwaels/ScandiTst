<?php 

class addProductDb extends dbConnect{
    public function addProducts($_product){
        $sql = "INSERT INTO `products` (`SKU`, `name`, `price`, `type_value_id`, `value_slot`, `height`, `width`) 
        VALUES (NULL, 'trousers', '5', 'size', '5', NULL, NULL)";
        $stmt = $this->connect()->query($sql);
        $stmt->fetch();
            
        
    }
}

?>