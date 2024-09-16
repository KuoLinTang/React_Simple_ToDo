import { useState } from "react";
import CreateForm from "./CreateForm";
import ToDo from "./ToDo";

function TodoWrapper() {

  // 由於todo list會根據輸入而改變，且改變後要跟著改變網頁，因此也要用state存todo list
  // 由於TodoWrapper和ToDo組件都需要todos這個state，因此不能在CreateForm中建立todos state (props不能往上傳輸)
  const [todos, setTodos] = useState([
    {content:'遊戲', id: Math.random(), isCompleted: false},  // 為了避免瀏覽器console顯示每個陣列中的element都要有key的warning，因此用物件來事先定義好key
    {content:'家事', id: Math.random(), isCompleted: false},  // 通常真正在開發網站時，資料會存在資料庫中，因此應該用資料庫中各筆資料的id
    {content:'工作', id: Math.random(), isCompleted: false}   // 另外，不要直接在ToDo component中直接用Math.random()來建立key，因為每次ToDo重新渲染時都會重跑一個隨機數，當React發現有新的key就會重新創造新的ToDo component，這會讓網頁很慢
  ]);
  const addTodo = (content) => {
    setTodos([...todos, {content: content, id: Math.random()}])  // ...為其餘運算子，可以將陣列或物件中的資料展開 (類似Python中的**)
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => {
      if (todo.id !== id) {
        return true
      }
    }))
  }
  const toggleCompleted = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
    }))
  }

  return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {return <ToDo todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />})}
    </div>
  );
}

export default TodoWrapper;
