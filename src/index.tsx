import * as React from "react"
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Footer from "./components/footer"
import AddTodo from "./containers/add-todo-container"
import TodoList from "./containers/todo-list-container"
import todoApp from "./redux/store";

const App = () => (
    <div>
        <AddTodo />
        <TodoList />
        <Footer />
    </div>
)

const store = createStore(todoApp)
​
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)