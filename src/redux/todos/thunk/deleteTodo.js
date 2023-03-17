import { deleted } from '../Actions';

const deleteTodo = (todoId) => {
    return  async(dispatch)=>{

        const response = await fetch(`http://localhost:9000/todos/${todoId}`,{
            method:'DELETE',
            
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const todo = await response.json()
    
    
        dispatch(deleted(todoId))
    
    }
};

export default deleteTodo;