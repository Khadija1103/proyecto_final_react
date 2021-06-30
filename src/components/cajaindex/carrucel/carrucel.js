import React from 'react';
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";


import './carrucel.css';

function carrucel() {
	return (
	  
 
		<div className="container-all">

			<input type="radio" id="1" name="image-slide" hidden />
			<input type="radio" id="2" name="image-slide" hidden />
			<input type="radio" id="3" name="image-slide" hidden />
		
			<div className="slide">
	  
				<div className="item-slide">
				<img src={img1} alt="..."/>
				</div>
			
				<div className="item-slide">
				<img src={img2} alt="..."/>
				</div>
			
				<div className="item-slide">
				<img src={img3} alt="..."/>
				</div>
		
			</div>
		
			<div className="pagination">
		
				<label className="pagination-item" for="1">
				<img src={img1} alt="..."/>
				</label>
			
				<label className="pagination-item" for="2">
				<img src={img2} alt="..."/>
				</label>
			
				<label className="pagination-item" for="3">
				<img src={img3} alt="..."/>
				</label>
			
			</div>
	  </div>
	  
    );
    
  }
 

 
export default carrucel;