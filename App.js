import React from "react"
import todosData from "./todosData"
import TodoItem from "./TodoItem"

class App extends React.Component {
    constructor() {
        super()
        this.state ={
            todos: todosData
        }
    }
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)

    
    return(
    <div className="todo-List">
        {todoItems}
    </div>
    )
}
}
export default App