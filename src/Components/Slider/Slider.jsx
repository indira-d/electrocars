import React from 'react'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';

const Slider = () => {
	const sliderData = useSelector(state => state.cars.sliderData)

  return (
	 <div className='main_photo'>
	{
		  sliderData?.map(it => (

	 <Carousel 
	 		autoPlay 
			showThumbs={false} 
			showIndicators={false} 
			showArrows={true}
			showStatus={false}>
	
		{/* <div>
			<video controls height='750' width={'100%'} autoPlay={true} loop>
				<source src={require(it.video_url)} type="video/mp4" />
			</video>
		</div> */}
		<div>
			<img src={it.image_1} />
			<p className="legend">{it.name_1}</p>
		</div>
		<div>
			<img src={it.image_2} />
			<p className="legend">{it.name_2}</p>
		</div>
		<div>
			<img src={it.image_3} />
			<p className="legend">{it.name_3}</p>
		</div>
            
         </Carousel>   
		  ))
		}
	


		

        
	</div>
  )
}

export default Slider