import React, { useState } from "react";

const EditableRow = ({ contact, handleEditFormChange,
	handleRadioEditFormChange, handleEditCancel }) => {
	return (
		<tr>
			<td>
				<input className="editForm-input"
					type="text"
					name="name"
					defaultValue={contact.name}
					placeholder="Enter your name..."
					onChange={handleEditFormChange}
				/>
			</td>
			<td>
				<input className="editForm-input"
					type="number"
					name="age"
					defaultValue={contact.age}
					placeholder="Enter your Age.."
					onChange={handleEditFormChange}
				/>
			</td>
			<td>
				<input style={{ width: '95%', padding: 3 }}
					type="city" name="city"
					placeholder="Enter your name..."
					defaultValue={contact.city}
					onChange={handleEditFormChange}
				/>
			</td>
			<td>
				<input className="editForm-input"
					type="email" name="email"
					defaultValue={contact.email}
					placeholder="Enter your name..."
					onChange={handleEditFormChange}
				/>
			</td>
			<td>
				<input className="editForm-input"
					type="phone" name="contact"
					defaultValue={contact.contact}
					placeholder="Enter your name..."
					onChange={handleEditFormChange}
				/>
			</td>
			<td>
				<span style={{ display: 'flex', flexDirection: 'row', width: '90%', padding: 3, border: '1px solid lightGray ', background: "white" }}
					onChange={(e) => handleRadioEditFormChange(e)}>
					Male
					{contact.gender === "male" ? <input type="radio" checked value="male" name="gender" /> : <input type="radio" value="male" name="gender" />}
					Female
					{contact.gender === "female" ? <input type="radio" checked value="female" name="gender" /> : <input type="radio" value="female" name="gender" />}
				</span>
			</td>
			<td>
				<button className='buttonStyle' type="submit">Save</button>
				<button className='buttonStyle' type="button" onClick={handleEditCancel}>Cancel</button>
			</td>
		</tr>
	)
}
export default EditableRow;