import React, {FC} from 'react'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent<EventTarget>) => void;
}
const InputField = ({todo, setTodo, handleAdd}:Props) => {
    return (
        <form className="input" onSubmit={handleAdd}>
            <input
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a task"
                className="input__box"/>
            <button className="input_button" type="submit">Go</button>
        </form>
    );
}

export default InputField