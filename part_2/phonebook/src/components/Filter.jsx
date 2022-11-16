import React from "react";

const Filter = ({ handlChengeeFilter, value }) => {
	return <div>
		filter shown with: <input onChange={handlChengeeFilter} value={value} />
	</div>
}

export default Filter