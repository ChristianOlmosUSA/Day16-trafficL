import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let [redL, setredL] = useState("redL");
	const [amberL, setamberL] = useState("amberL");
	const [greenL, setgreenL] = useState("greenL");

	function redUp() {
		if (redL == "redL") {
			setredL("redLoff");
			setamberL("amberL");
			setgreenL("redLoff");
		} else {
			setredL("redL");
			setgreenL("redLoff");
			setamberL("redLoff");
		}
	}

	function amberUp() {
		if (amberL == "amberL") {
			setamberL("redLoff");
			setredL("redLoff");
			setgreenL("greenL");
		} else {
			setamberL("amberL");
			setredL("redLoff");
			setgreenL("redLoff");
		}
	}

	function greenUp() {
		if (greenL == "greenL") {
			setgreenL("redLoff");
			setamberL("redLoff");
			setredL("redL");
		} else {
			setgreenL("greenL");
			setredL("redLoff");
			setamberL("redLoff");
		}
	}

	return (
		<div className="outerBox">
			<div
				className={redL}
				onClick={() => {
					redUp();
				}}>
				R
			</div>
			<div
				className={amberL}
				onClick={() => {
					amberUp();
				}}>
				A
			</div>
			<div
				className={greenL}
				onClick={() => {
					greenUp();
				}}>
				G
			</div>
		</div>
	);
}
