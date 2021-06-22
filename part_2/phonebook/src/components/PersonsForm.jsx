import React from "react";

const PersonsForm = ({ handleChengeName, handleChengeNumber, addPerson, newName, newNumber }) => {
	return <form onSubmit={addPerson} >
		<div>
			name: <input onChange={handleChengeName} value={newName} />
		</div>
		<div>
			number: <input type="tel" onChange={handleChengeNumber} value={newNumber} />
		</div>
		<div>
			<button type="submit">add</button>
		</div>
	</form>
}

export default PersonsForm