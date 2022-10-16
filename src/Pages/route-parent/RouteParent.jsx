import React, { useEffect } from "react";
import { Wrapper } from "./RouteParent.style";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

function RouteParent() {
const location=useLocation();
const navigation=useNavigate();
const pathname=location.pathname;
const pathArr=pathname.split('/');
useEffect(()=>{
console.log(pathArr);
if(pathArr.length===2){
	
navigation('/app/mood-tracker');
}
},[pathname])


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
