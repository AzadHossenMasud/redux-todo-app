import { useState } from "react";
import { useDispatch } from "react-redux";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { added, allCompletd, clearCompletd } from "../redux/todos/Actions";
import addtodo from "../redux/todos/thunk/addttodo";

export default function Header() {
    const [input, setInput]= useState('')
    const dispatch = useDispatch()
    const handleInput = (e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
       dispatch(addtodo(input))
       setInput('')

    }


    const handleAllCompleted = ()=>{
        dispatch(allCompletd())
    }

    const handleClearCompletd = ()=>{
        dispatch(clearCompletd())
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    onChange={handleInput}
                    value={input}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={handleAllCompleted} className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={handleClearCompletd} className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
}
