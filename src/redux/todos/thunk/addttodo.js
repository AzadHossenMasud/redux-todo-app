import { added } from "../Actions";

const addtodo = (todoText) => {
    return  async(dispatch, getState)=>{

        const response = await fetch('http://localhost:9000/todos',{
            method:'POST',
            body: JSON.stringify({
                text: todoText,
                completed: false
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const todo = await response.json()
    
    
        dispatch(added(todo.text))
    
    }
};

export default addtodo;