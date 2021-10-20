//added elements
function ToDo({ todo, removeTask }) {
    return (
        <div className="number" key={todo.id}>
            <p>{todo.task}</p>
            <button className="btns" onClick={() => removeTask(todo.id)}>delete</button>
        </div>
    )
}

export default ToDo