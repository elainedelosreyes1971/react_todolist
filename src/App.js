import { Outlet, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App" style={{padding: "25px 50px"}}>

      <div className="CounterGroup">
        <div className='nav-bar'>
          <nav>
            <ul>
              <li><NavLink to={'/'}>Home</NavLink></li>
              <li><NavLink to={'/done'}>Done List</NavLink></li>
              <li><NavLink to={'/help'}>Help</NavLink></li>
            </ul>
          </nav>
        </div>
        <h1>Todo List</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
