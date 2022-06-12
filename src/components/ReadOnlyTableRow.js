const ReadOnlyTableRow = ({ contact, handleEditOnClick, handleDeleteClick }) => {
	return (
		<tr>
			<td>{contact.name}</td>
			<td>{contact.age}</td>
			<td>{contact.city}</td>
			<td>{contact.email}</td>
			<td>{contact.contact}</td>
			<td>{contact.gender}</td>
			<td>
				<button className='buttonStyle' onClick={(event) => handleEditOnClick(event, contact)}>Edit</button>
				<button className='buttonStyle' onClick={handleDeleteClick}>Delete</button>
			</td>
		</tr>
	)
}
export default ReadOnlyTableRow;