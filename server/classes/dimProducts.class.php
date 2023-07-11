<?php 

class dimProducts extends products
{
	protected $length;
	protected $width;
	protected $height;

	public function __construct($_sku ,$_name , $_price,$_typeID , $_length, $_width, $_height)
	{
		parent::__construct($_sku ,$_name , $_price,$_typeID );

		$this->length = $_length;
		$this->width = $_width;
		$this->height = $_height;
	}
    public function setLength($_length){
        $this->length = $_length;
     }
     public function getLength(){
        return $this->length;
     }
    public function setWidth($_width){
        $this->width = $_width;
     }
     public function getWidth(){
        return $this->width;
     }
    public function setHeight($_height){
        $this->height = $_height;
     }
     public function getHeight(){
        return $this->height;
     }
}
?>