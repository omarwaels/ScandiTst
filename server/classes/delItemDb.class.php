<?php 
class delItemDb extends dbConnect{

    private $prodId ;


    // Create connection
    public function setId($_prodId){
        $this -> prodId = $_prodId;
    }
    public function delItem(){
        echo $this-> prodId;
        $sql = "DELETE FROM products WHERE `products`.`SKU` = ".$this-> prodId;
        $stmt = $this->connect()->query($sql);
        $stmt->fetch();
    }
    

}    




?>