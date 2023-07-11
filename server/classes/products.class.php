<?php 
abstract class products {

    protected $sku ;
    protected $name ;
    protected $price ;
    protected $typeID ;
    protected $dbConnection ;

    // public function __construct($_sku ,$_name , $_price,$_typeID )
    // {
    //     $this->sku = $_sku;
    //     $this->name = $_name;
    //     $this->price = $_price;
    //     $this->typeID = $_typeID;
    //     $this->dbConnection = new dbConnect();
    // }

    public function setSku($_Sku){
        $this->sku = $_Sku;
     }
     public function getSku(){
        return $this->sku;
     }
    public function setName($_name){
        $this->name = $_name;
     }
     public function getName(){
        return $this->name;
     }
    public function setPrice($_price){
        $this->price = $_price;
     }
     public function getPrice(){
        return $this->price;
     }
    public function setTypeID($_typeID){
        $this->typeID = $_typeID;
     }
     public function getTypeID(){
        return $this->typeID;
     }
    abstract public function addProductDb();
}

?>
