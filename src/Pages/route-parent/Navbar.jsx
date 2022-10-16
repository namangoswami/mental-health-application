import React, { useEffect } from "react";
import { Wrapper, Button, Heading, DateSpan } from "./Navbar.style";
import { useLocation } from "react-router-dom";

function Navbar() {
	const date = new Date(Date.now());
	console.log(date.getDate(), date.getMonth(), date.getFullYear());
	const months = [
		"Null",
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const location = useLocation();
	const pathname = location.pathname;
	const dateStr = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
	let headerName;
	
	return (
		<Wrapper>
			<div>
				<Heading>{headerName}</Heading>
				<DateSpan>{dateStr}</DateSpan>
			</div>
			<div>
				Username
			</div>
		</Wrapper>
	);
}

export default Navbar;
