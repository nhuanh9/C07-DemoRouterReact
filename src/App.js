import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {action, actionCreator} from "./redux/globalStore";
import {Field, Form, Formik} from "formik";

function App() {
    const dispatch = useDispatch();
    const data = useSelector(state => {
        return state.listProduct
    })
    return (
        <>
            {data.map((item) => (
                <h2>{item.id}: {item.name}</h2>
            ))}
            <Formik initialValues={{
                id: '',
                name: ''
            }} onSubmit={(values) => {
                dispatch({
                    type: 'ADD', data: values
                })
            }}>
                <Form>
                    <Field name={'id'}></Field>
                    <Field name={'name'}></Field>
                    <button>Add</button>
                </Form>
            </Formik>
        </>
    );
}

export default App;
