//Todo section 
import ToDo from "./Todo";

function TodoSection({ removeTask, todos }) {
    return (
        <div className="container">
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    )
}

export default TodoSection;