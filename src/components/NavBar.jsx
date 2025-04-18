import React, { useState } from "react";
import menuBar from '../assets/icons/menuBar.svg';

const NavBar = ({setTopic}) => {
	return (
		<nav className="bg-gradient-to-r from-[#520462] to-[#042f5a] via-[#b90909] max-h-[50px] w-full flex justify-between items-center p-4 sticky top-0 rounded-2xl">
			<label htmlFor="Logo">
				<p className="text-white text-2xl font-extrabold">CRICNOW</p>
			</label>

			<ul className="hidden md:flex space-x-6 text-white font-medium">
				<li className="cursor-pointer hover:underline" onClick={setTopic('home')} >Home</li>
				<li className="cursor-pointer hover:underline" onClick={setTopic('liveMatches')} >Live Matches</li>
				<li className="cursor-pointer hover:underline" onClick={setTopic('upcomingMatches')}>Upcoming Matches</li>
				<li className="cursor-pointer hover:underline" onClick={setTopic('recentMatches')}>Recent Matches</li>
			</ul>

			<label htmlFor="menu" className="md:hidden">
				<img src={menuBar} alt="Menu" className="content-center h-[30px]"/>
			</label>
		</nav>
	);
};

export default NavBar;
