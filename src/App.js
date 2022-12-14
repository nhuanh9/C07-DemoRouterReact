import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {action, actionCreator} from "./redux/globalStore";
import {Field, Form, Formik} from "formik";
import {addProductAction} from "./redux/product/productsAction";

function App() {
    const listProduct = useSelector(state => {
        console.log(state)
        return state.products
    })
    const dispatch = useDispatch();
    return (
        <>
            {listProduct.map(item => (
                <h1>{item.id}: {item.name}</h1>
            ))}
            <Formik initialValues={{
            }} onSubmit={(values) => {
                dispatch(addProductAction(values))
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
