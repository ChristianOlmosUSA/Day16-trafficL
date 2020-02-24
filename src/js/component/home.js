import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let [redL, setredL] = useState("redL");
	const [amberL, setamberL] = useState("amberL");
	const [greenL, setgreenL] = useState("greenL");

	return (
		<div className="outerBox">
			<div
				className={redL}
				onClick={redL == "redL" ? setredL("redLoff") : setredL("redL")}>
				R
			</div>
			<div className={amberL} onClick={() => setamberL("redLoff")}>
				A
			</div>
			<div className={greenL} onClick={() => setgreenL("redLoff")}>
				G
			</div>
		</div>
	);
}
