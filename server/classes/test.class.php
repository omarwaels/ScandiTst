<?php 
class test extends dbConnect {

    public function getUser(){
        $sql = "SELECT * FROM products";
        $stmt = $this->connect()->query($sql);
        while($row = $stmt->fetch()){
            echo $row['SKU'];
        }
    }
}


?>