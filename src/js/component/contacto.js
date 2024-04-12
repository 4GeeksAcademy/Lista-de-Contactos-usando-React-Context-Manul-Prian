import React from "react";
import { Link } from "react-router-dom";

export const Contacto = () => {
    return (
		<>
		<button type="button" class="btn btn-success">Add a new contact</button>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
  			<div className="row g-0">
    		<div className="col-md-4">
      			<img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/5BCC/production/_117900532_p03t4b52.jpg" className="img-fluid rounded-start" alt="..."></img>
    		</div>
    		<div className="col-md-8">
      		<div className="card-body">
        		<h5 className="card-title">Name</h5>
        		<p className="card-text">ICONO - direction </p>
				<p className="card-text">ICONO - phone </p>
				<p className="card-text">ICONO - email </p>
        		<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      		</div>
    		</div>
 	 		</div>
		</div>
		</>
    );
};
