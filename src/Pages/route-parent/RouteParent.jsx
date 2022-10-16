import React from "react";
import { Wrapper } from "./RouteParent.style";
import { Outlet } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

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
