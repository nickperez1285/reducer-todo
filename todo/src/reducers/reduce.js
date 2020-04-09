

export const initState ={todos:[
	{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987580
},{
  item: 'Learn about react',
  completed: false,
  id: 3892987581
},{
  item: 'Learn about redux',
  completed: false,
  id: 3892987582
},

]
}
export const reducer = (state, action) => { 
	 switch (action.type) {
    case 'Add':
      return { ...state, 
      	todos: [
      	...state.todos, 
       {
            item: action.payload,
            completed: false,
            id: Date.now() 
            

      }]}
    case 'Status_Toggle':
    return{
    	...state, 
    	todos: state.todos.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item)

    }
	
    
    	

      
    default:
      return state
  }

	}