import React from "react"
import todosData from "./todosData"
import TodoItem from "./TodoItem"

function App() {
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    return(
    <div className="todo-List">
        {todoItems}
    </div>
    )
}
export default App