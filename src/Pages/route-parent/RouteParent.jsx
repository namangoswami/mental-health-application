import React from "react";
import { Wrapper } from "./RouteParent.style";
import { Outlet } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'

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
