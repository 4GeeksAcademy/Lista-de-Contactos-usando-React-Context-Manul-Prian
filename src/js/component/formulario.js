import React from "react";
import { Link } from "react-router-dom";

export const Formulario = () => {
    return (
		<form>
			<fieldset disabled>
			<legend><strong>Add a new contact</strong></legend>
			<div class="mb-3">
				<label for="disabledTextInput" class="form-label">Full Name</label>
				<input type="text" id="disabledTextInput" class="form-control" placeholder="Full Name"></input>
			</div>
			<div class="mb-3">
				<label for="disabledTextInput" class="form-label">Email</label>
				<input type="text" id="disabledTextInput" class="form-control" placeholder="Enter email"></input>
			</div>
			<div class="mb-3">
				<label for="disabledTextInput" class="form-label">Phone</label>
				<input type="text" id="disabledTextInput" class="form-control" placeholder="Enter phone"></input>
			</div>
			<div class="mb-3">
				<label for="disabledTextInput" class="form-label">Address</label>
				<input type="text" id="disabledTextInput" class="form-control" placeholder="Enter address"></input>
			</div>
			<button type="submit" class="btn btn-primary">Save</button>			
			</fieldset>
			<label className="form-check-label" htmlFor="disabledFieldsetCheck">
              Or get back to contact.
            </label>
	  </form>
    );
};