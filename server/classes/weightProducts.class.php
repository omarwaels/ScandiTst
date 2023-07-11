<?php 

class weightProducts extends products
{
	protected $weight;

	public function __construct($_sku ,$_name , $_price,$_typeID , $_weight)
	{
		parent::__construct($_sku ,$_name , $_price,$_typeID );

		$this->weight = $_weight;
	}
    public function setSize($_size){
        $this->weight = $_weight;
     }
     public function getSize(){
        return $this->weight;
     }
}
?>