import React from 'react'

const Category = () => {
	return <div className="rounded-4xl border-2 border-black text-center p-2 bg-[#f2f2f6] cursor-pointer center">category</div>
};

const CategorySection = () => {
  return (
    <div className='h-[40px] w-full flex flex-row justify-around space-x-1'>
        <Category/>
        <Category/>
        <Category/>
        <Category/>
    </div>
  )
}

export default CategorySection