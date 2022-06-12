import React, { useState } from "react";
import data from "./moke-data.json"
import { nanoid } from "nanoid";
import ReadOnlyTableRow from "./components/ReadOnlyTableRow";
import EditableRow from "./components/EditableTableRow";
import AddContactForm from "./components/AddContactForm";
const App = () => {
	const [editContactId, setEditContactId] = useState()
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

	const handleEditOnClick = (event, contact) => {
		event.preventDefault();
		setEditContactId(contact.id)
	}

	const [editGender, setEditGender] = useState()
	const [editFormData, setEditFormData] = useState({
		name: " ",
		age: " ",
		city: "",
		email: "",
		contact: "",
		gender: ""
	});
	const handleEditFormChange = (e) => {
		e.preventDefault();
		const fieldName = e.target.getAttribute('name');
		const fieldValue = e.target.value;
		const newEditFormData = { ...editFormData }
		newEditFormData[fieldName] = fieldValue;
		setEditFormData(newEditFormData)
	}

	const handleRadioEditFormChange = (e) => {
		e.preventDefault(e);
		setEditGender(e.target.value)
	}
	// console.log("editGender", editGender)
	const handleEditFormSubmit = (e) => {
		e.preventDefault()
		const newEditContact = {
			id: editContactId,
			name: editFormData.name,
			age: editFormData.age,
			city: editFormData.city,
			email: editFormData.email,
			contact: editFormData.contact,
			gender: editGender,
		}

		const newContacts = [...contacts]
		const index = contacts.findIndex((item) => item.id === editContactId);
		newContacts[index] = newEditContact
		setContacts(newContacts);
		console.log("newContacts", newContacts)
		setEditContactId(null)
	}
	const handleEditCancel = () => {
		setEditContactId(null)
	}
	const handleDeleteClick = (contactId) => {
		const newContact = [...contacts]
		const index = contacts.findIndex((delItem) => delItem.id === editContactId);
		newContact.splice(index, 1);
		setContacts(newContact)
	}

	const handleAddFormSubmitProp = (contacts) => {
		setContacts(contacts)
	}
	return (
		<div className='main-container'>
			<div className="table-container ">
				<div className="table-data">
					<div><h1>User Data</h1></div>
					<form onSubmit={handleEditFormSubmit}>
						<table >
							<thead>
								<tr>
									<th>Name</th>
									<th>Age</th>
									<th>City</th>
									<th>Email-Id</th>
									<th>Contact-No</th>
									<th>Gender</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{contacts.map((contact, index) => {
									return (
										<>
											{editContactId === contact.id ? (<EditableRow contact={contact} handleEditFormChange={handleEditFormChange} handleRadioEditFormChange={handleRadioEditFormChange}
												handleEditCancel={handleEditCancel}
											/>
											) : (
												<ReadOnlyTableRow contact={contact} handleEditOnClick={handleEditOnClick}
													handleDeleteClick={handleDeleteClick} />
											)}
										</>
									)
								})}
							</tbody>
						</table>
					</form>
				</div>
			</div>
			<div style={{ marginLeft: '1.5vw', marginTop: 10 }}>
				<button style={{ padding: '10px 20px', backgroundColor: 'green', color: "white", fontWeight: 700 }}
					onClick={() => setShowAddFormDialog(true)}>Add Details</button>
			</div>
			{showAddFormDialog &&
				<AddContactForm />
			}
		</div>
	);
}

export default App;
