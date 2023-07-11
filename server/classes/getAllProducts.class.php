<?php 
class getAllProducts extends dbConnect {

    public function getAll(){
        $sql = "SELECT * FROM products";
        $stmt = $this->connect()->query($sql);
        $users = $stmt->fetchAll();
        echo json_encode($users);
        
    }
}


?>