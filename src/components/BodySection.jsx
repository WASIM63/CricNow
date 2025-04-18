import React from 'react'
import MatchCard from './MatchCard'
import axios from 'axios'
import { useState, useEffect } from "react";

const BodySection = ({ isLoaded, setLoaded, arr, setArr }) => {
	const [startingIndex, setStartingIndex] = useState(0);

	return (
		<div className="w-full bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 p-2 rounded-2xl sm:flex sm:flex-wrap sm:justify-evenly">
			{isLoaded ? (
				<div>
					<span className="p-2">Loading...</span>
					<div className="h-[50px] w-[50px] border-4 border-[#ea11a5]-400 animate-spin ease-in-out  mx-auto"></div>
				</div>
			) : Array.isArray({ arr }) ? (
				arr
					.slice(startingIndex, startingIndex + 5)
					.map((data, index) => <MatchCard key={index} data={data} />)
			) : (
				<p>No upcomingMatches found.</p>
			)}

			{startingIndex < arr.length && (
				<div className="w-full text-center mt-4">
					<button
						className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-200"
						onClick={() =>
							setStartingIndex(
								(startingIndex) => startingIndex + 10
							)
						}
					>
						Load More
					</button>
				</div>
			)}
			{/* {<MatchCard />}
			{<MatchCard />}
			{<MatchCard />}
			{<MatchCard />}
			{<MatchCard />} */}
		</div>
	);
};

export default BodySection;
