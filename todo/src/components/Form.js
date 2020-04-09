import React, { useState, useReducer } from "react";
import List  from "./List.js"


const Form = () => {
	const [todoList, addTodoList] =useState([])
	const [todo, addTodo] = useState({
		item:"", 
		completed: "", 
		id: ""

	})

	const handleChange = (e) => {

	}

	return(
		<p> form </p>

		)
}

export default Form 