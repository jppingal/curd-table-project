import React, { useState } from "react";
import { nanoid } from "nanoid";
import data from "../moke-data.json"

const AddContactForm = ({ handleAddFormSubmitProp }) => {
	const [showAddFormDialog, setShowAddFormDialog] = useState(false)

	const [contacts, setContacts] = useState(data)
	const [gender, setGender] = useState()

	const [addFormData, setAddFormData] = useState({
		name: "",
		age: "",
		city: "",
		email: "",
		contact: '',
		gender: ''
	})

	const genderRadioSelected = (e) => {
		console.log("Here is the event", e)
		setGender(e.target.value)
	}
	const handleAddFormChange = (e) => {
		e.preventDefault()
		const fieldName = e.target.getAttribute('name');
		const fieldValue = e.target.value;

		const newFormData = { ...addFormData };
		newFormData[fieldName] = fieldValue;
		setAddFormData(newFormData)
	}
	const handleAddFormSubmit = (e) => {
		handleAddFormSubmitProp(contacts)
		e.preventDefault()
		const newContact = {
			id: nanoid(),
			name: addFormData.name,
			age: addFormData.age,
			city: addFormData.city,
			email: addFormData.email,
			contact: addFormData.contact,
			gender: gender,
		}

		const newContacts = [...contacts, newContact]
		setContacts(newContacts);
		setShowAddFormDialog(false)
	}
	console.log("contacts", contacts)
	return (
		<div className="form-container ">
			<form onSubmit={handleAddFormSubmit}>
				<input className="input-data"
					type="text" name="name"
					placeholder="Enter your name..."
					onChange={handleAddFormChange} />
				<input className="input-data"
					type="number" name="age"
					placeholder="Enter your age..."
					onChange={handleAddFormChange} />
				<input className="input-data"
					type="text"
					placeholder="Enter your city..."
					name="city"
					onChange={handleAddFormChange} />
				<input className="input-data" type="email" name="email" placeholder="Enter your Email-Id" onChange={handleAddFormChange} />
				<input className="input-data" type="mobile"
					name="contact" placeholder="Enter your contact no..." onChange={handleAddFormChange} />
				<div className="radio-data" onChange={(e) => genderRadioSelected(e)} >
					<label>Male</label>
					<input type="radio" value="male" name="gender" />
					<label>female</label>
					<input type="radio" value="female" name="gender" />
				</div>
				<button className='buttonStyle' type="submit">Add</button>
			</form>
		</div>
	)
}
export default AddContactForm;