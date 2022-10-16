import React from "react";
import { Wrapper } from "./RouteParent.style";
import { Outlet } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

function RouteParent() {
	return (
		<>
			<Sidebar />
			<>
				<Wrapper>
					<Navbar />
					<Outlet />
				</Wrapper>
			</>
		</>
	);
}

export default RouteParent;
