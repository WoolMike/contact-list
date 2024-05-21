import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/register.css";
import logo from "../../img/logo.png"

const Register = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="register-wrapper">
			<div className="d-flex justify-content-center align-items-center">
				<div className="d-flex flex-column bg-white rounded-2 p-3 mx-2 gap-2" style={{ width: "50%" }} >
					<img className="logo" src={logo}></img>
					<Link to="/" className="btn btn-danger">Back To Home</Link>
					<div className="landr">
						<div className="left"></div>
						<div className="circle" style={{ margin: "5px", border: "1px solid #b1b6bd", borderRadius: "100%" }}></div>
						<div className="right" style={{ borderTop: "1px solid #e2e8f0", flexGrow: "1" }}></div>
					</div>
					<h2 className="mb-2">Register a New Agenda!</h2>
					<label className="" htmlFor="userName">Insert Agenda's Name</label>
					<input className="form-control" type="text" name="agendaSlug" placeholder="Example Name" onChange={(event) => actions.toggleChange(event)}></input>
					<label className="" htmlFor="favColor">What is your favorite color</label>
					<input className="form-control" type="text" name="color" placeholder="Red" onChange={(event) => actions.toggleChange(event)}></input>
					<Link to={"/contactLi/" + store.agendaSlug} className="btn btn-danger mt-3" onClick={() => actions.createAgenda()}>Register Agenda</Link>
				</div>
			</div>
			<div className="bg-img">
			</div>
		</div>
	);
};

export default Register