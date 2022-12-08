import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import Admin from "./page/Admin";
import User from "./page/User";
import ListUser from "./page/ListUser";
import AddUser from "./page/AddUser";

function App() {
    return (
        <div>
            <Routes>
                <Route path={''} element={<Login/>}></Route>
                <Route path={'admin'} element={<Admin/>}></Route>
                <Route path={'user'} element={<User/>}>
                    <Route path={''} element={<ListUser/>}></Route>
                    <Route path={'add'} element={<AddUser/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
