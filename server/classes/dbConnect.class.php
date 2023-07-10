<?php 
class dbConnect{

    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $db_name="scandidb";
    
    // Create connection
    
    protected function connect(){
        $dsn = "mysql:host=" . $this->servername . ';dbname=' . $this->db_name ;
        $conn = new PDO($dsn, $this->username, $this->password);
        $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        return $conn;
    }

}    




?>
