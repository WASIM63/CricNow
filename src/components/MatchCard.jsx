import vsImg from "../assets/icons/vsImg.png"
import cricket from '../../public/cricket.svg' 

const MatchCard = ({...data}) => {
	console.log(data, data.team_a);
	return (
		<div className="w-full border-6 flex flex-col justify-between border-fuchsia-700 rounded-2xl bg-white mt-2 sm:h-[200px] sm:w-[400px] p-2">
			<ul className="flex flex-row justify-between p-2">
				<li>{data.matchs ? data.matchs : "Matches"}</li>
				<li>{data.match_type ? data.match_type : "match_type"}</li>
				<li>{data.match_date ? data.match_date : "match_date"}</li>
				<li>{data.match_time ? data.match_time : "match_time"}</li>
			</ul>
			<div className="flex flex-row justify-between pl-4 pr-4">
				<img
					src={data.team_a_img ? data.team_a_img : cricket}
					alt="Team A"
					className="h-[4rem] w-[4rem] rounded-full bg-amber-200"
				/>
				<img
					src={vsImg}
					alt=""
					className="h-[4rem] w-[4rem] rounded-full bg-amber-200"
				/>
				<img
					src={data.team_b_img ? data.team_b_img : cricket}
					alt="Team B"
					className="h-[4rem] w-[4rem] rounded-full bg-amber-200"
				/>
			</div>
			<ul className="w-full flex items-center justify-around">
				<li>{data.team_a_short?data.team_a_short:"team_a_short"}</li>
				<li>{data.match_status?data.match_status:"match_status"}</li>
				<li>{data.team_b_short?data.team_b_short:"team_b_short"}</li>
			</ul>
			<ul className="w-full flex items-center justify-around">
				<li>
					<p>Venue : </p>
					{data.venue?data.venue:"Stadium"}
				</li>
				<li>{data.series?data.series:"matchSeries"}</li>
			</ul>
		</div>
	);
}

export default MatchCard