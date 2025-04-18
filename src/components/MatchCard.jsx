import vsImg from "../assets/icons/vsImg.png"
import cricket from '../../public/cricket.svg' 

const MatchCard = ({
	matchs,
	match_date,
	match_type,
	match_time,
	result,
	team_a_img,
	team_b_img,
	team_a_short,
	team_a_scores,
	match_status,
	team_b_short,
	team_b_scores,
	venue,
	series,
}) => {
	console.log("result is :",result);
	return (
		<div className="w-full border-6 flex flex-col justify-between border-fuchsia-700 rounded-2xl bg-white mt-2 sm:h-[200px] sm:w-[400px] p-2">
			{result ? <p>{result}</p> : null}
			<ul className="flex flex-row justify-between p-2">
				<li>{matchs ? matchs : "Matches"}</li>
				<li>{match_type ? match_type : "match_type"}</li>
				<li>{match_date ? match_date : "match_date"}</li>
				<li>{match_time ? match_time : "match_time"}</li>
			</ul>
			<div className="flex flex-row justify-between pl-4 pr-4">
				<img
					src={team_a_img ? team_a_img : cricket}
					alt="Team A"
					className="h-[4rem] w-[4rem] rounded-full bg-amber-200"
				/>
				<img
					src={vsImg}
					alt=""
					className="h-[4rem] w-[4rem] rounded-full bg-amber-200"
				/>
				<img
					src={team_b_img ? team_b_img : cricket}
					alt="Team B"
					className="h-[4rem] w-[4rem] rounded-full bg-amber-200"
				/>
			</div>
			<ul className="w-full flex items-center justify-between">
				<li className="flex flex-col">
					<p>{team_a_short ? team_a_short : "team_a_short"}</p>
					{team_a_scores ? <p>{team_a_scores}</p> : null}
				</li>
				<li>{match_status ? match_status : "match_status"}</li>
				<li className="flex flex-col">
					<p>{team_b_short ? team_b_short : "team_b_short"}</p>
					{team_b_scores ? <p>{team_b_scores}</p> : null}
				</li>
			</ul>
			<ul className="w-full flex items-center justify-around">
				<li>
					<p>Venue : {venue ? venue : "Stadium"}</p>
				</li>
				<li>{series ? series : "matchSeries"}</li>
			</ul>
		</div>
	);
};

export default MatchCard