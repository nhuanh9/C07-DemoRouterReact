import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import Admin from "./page/Admin";
import User from "./page/User";
import ListStudent from "./page/ListStudent";
import AddStudent from "./page/AddStudent";
import EditStudent from "./page/EditStudent";

function App() {
    return (
        <div>
            <Routes>
                <Route path={''} element={<Login/>}></Route>
                <Route path={'admin'} element={<Admin/>}></Route>
                <Route path={'user'} element={<User/>}>
                    <Route path={''} element={<ListStudent/>}></Route>
                    <Route path={'add'} element={<AddStudent/>}></Route>
                    <Route path={'edit/:id'} element={<EditStudent/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
