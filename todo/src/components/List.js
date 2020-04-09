import React, { useState, useReducer, useEffect} from "react";
import { initState, reducer} from "../reducers/reduce.js"


const List = () => {

	const [todosState, dispatch] = useReducer(reducer,  initState)
	const [todo, addTodo] = useState()
	const handleChanges = (e) => {
		addTodo(e.target.value)

	}

	const submitForm = event => {
		event.preventDefault();
		// prevents reset of form 
		dispatch({type: "Add" , payload: todo })
		addTodo()
	}




	const checked = (obj) =>{

		if (obj.completed ==='true'){
			return "*DONE*"
		}else{
			return "*NOT DONE* "
		}
	}







	return(
		<div>
		<form onSubmit={submitForm}>
			  <input
			  type="text"
			  name="todo"
			  value={todo}
			  onChange={handleChanges}
			  placeholder="todo"
			  /><br/>
			  <button>Add</button>
			</form>
			{todosState.todos.map( td => 
				<div>
				<p>{td.item +" STATUS:" + td.completed}</p> 
				<button onClick={()=>{dispatch({type:"Status_Toggle", payload: td.id}), checked(td)}}> done</button> 
				</div>
			)}

		</div>
		)
}

export default List 