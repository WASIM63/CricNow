import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar'
import HeroSection from "./components/HeroSection"
import BodySection from "./components/BodySection";
import axios from 'axios';
import CategorySection from "./components/CategorySection";

const App = () => {
	const [isLoaded, setLoaded] = useState(false);
	const [topic, setTopic] = useState("upcomingMatches");
	const [homeArr, setHome] = useState([]);
	const [liveMatchesArr, setLiveMatches] = useState([]);
	const [upcomingMatchesArr, setUpcomingMatches] = useState([]);
	const [category,setCategory]=useState('')

	const options = {
		method: 'GET',
		url: `https://cricket-live-line1.p.rapidapi.com/${topic}`,
		headers: {
			'x-rapidapi-key': ' adc1b42245msh4906e98d089216ep193730jsn2aff5af9b11c',
			'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'
		}
	};

	const apiCall = async () => {
		try {
			setLoaded(true);
			const response = await axios.request(options);
			console.log(response.data.data);
			switch (topic) {
				case "home": {
					setHome(response.data);
					break;
				}
				case "liveMatches": {
					setLiveMatches(response.data);
					break;
				}
				case "upcomingMatches": {
					setUpcomingMatches(response.data.data);
					break;
				}
				default: {
					console.log("Topic was not listed");
					break;
				}
			}
			setLoaded(false);
		} catch (error) {
			console.error(error);
		}
	}

	// useEffect(() => {
	// 	apiCall();
	// }, [topic])

	return (
		<div className="flex flex-col justify-between space-y-2 h-full p-2">
			<NavBar setTopic={setTopic} />
			<HeroSection />
			<CategorySection />
			<BodySection
				arr={upcomingMatchesArr}
				setArr={setUpcomingMatches}
				isLoaded={isLoaded}
				setLoaded={setLoaded}
			/>
		</div>
	);
}

export default App