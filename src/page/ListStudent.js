import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function ListStudent() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    // hiện html (render) => dùng axios để lấy dữ liệu (useEffect) => cập nhật html (re-render)
    useEffect(() => {
        getAll()
    }, [])
    const getAll = () => {
        axios.get('http://localhost:3001/students').then((res) => {
            setList(res.data);
            console.log(list)
        })
    }
    return (
        <>

            <h1>List Student</h1>
            {list.map((item) => (
                <h3>
                    {item.name}
                    <button onClick={() => {
                        axios.delete('http://localhost:3001/students/' + item.id).then(() => {
                            getAll()
                        })
                    }}>Delete
                    </button>
                    <button onClick={()=> {
                        navigate('edit/'+item.id)
                    }}>Edit</button>
                </h3>
            ))}
        </>

    )
}
