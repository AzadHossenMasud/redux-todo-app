import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTD, DELETED, LOADED, TOGGLED } from "./ActionTypes"

export const loaded = (todos)=>{
    return{
        type: LOADED,
        payload: todos
    }
}
export const added = (todoText)=>{
    return{
        type: ADDED,
        payload: todoText
    }
}

export const toggled = (todoId)=>{
    return{
        type: TOGGLED,
        payload: todoId
    }
}

export const colorSelected = (todoId, color)=>{
    return{
        type: COLORSELECTD,
        payload: {
            todoId,
            color
        }
    }
}

export const deleted = (todoId)=>{
    return{
        type: DELETED,
        payload: todoId
    }
}

export const allCompletd = ()=>{
    return{
        type: ALLCOMPLETED,
       
    }
}

export const clearCompletd = ()=>{
    return{
        type: CLEARCOMPLETED,
       
    }
}