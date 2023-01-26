import React, {useState} from 'react';
import './App.css';
import InputField from "./Compnents/InputField";
import {Todo} from "./model";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAdd = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
        setTodo("")
    }

    // const h1 = (arg) => {
    //
    // }
    return (
        <div className="App">
            <span className="heading">Taskify</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        </div>
    )
}

export default App;
