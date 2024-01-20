import './App.css';
import ECommerce from './E-Commerce/Index';
import Counter from './Counter/counter';

import Todo from './TODO/todo';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {

  console.log("App Commponent");

  return (
    <BrowserRouter>
      <ul>
        <Link to="/counter">Counter</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/products">ECommerce</Link>
        <Link to="/contact">Contace Us</Link>
      </ul>
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route path='/counter/:name/:id' element={<h1>Counter id</h1>} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/products' element={<ECommerce />} />
        <Route path='/contact' element={<h1>Contact Page</h1>} />

      </Routes>

      <footer>
        2021 &copy; ReactJS Projects
      </footer>
    </BrowserRouter>

  );
}

export default App;

{/* <Counter /> */ }
{/* <Todo></Todo> */ }
{/* <ECommerce /> */ }