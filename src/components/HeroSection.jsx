import React from 'react'
import ground from '../assets/images/ground.jpg'

const HeroSection = () => {
  return (
		<div className="w-full h-[300px] bg-[#6c6d6e] rounded-2xl">
			<img src={ground} alt="" className='self-center mx-auto bg-cover'/>
		</div>
  );
}

export default HeroSection