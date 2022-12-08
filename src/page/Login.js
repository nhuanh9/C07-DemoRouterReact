import {useLocation, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export default function Login() {
    const navigate = useNavigate()
    const mess = useLocation();
    const handleLogin = (values) => {
        if (values.username == 'a' && values.password =='a') {
            navigate('admin')
        } else if (values.username == 'nhuanh' && values.password =='1') {
            navigate('user', {state: values.username})
        } else {
            navigate('', {state: 'Sai tk hoặc mk rồi nhé!'})
        }
    }
    return (
        <>
            {mess && <h1>{mess.state}</h1>}
            <Formik initialValues={
                {
                    username: '',
                    password: ''
                }
            } onSubmit={(values) => {
                handleLogin(values)
            }}
            >
                <Form>
                <Field type="text" name={'username'}/>
                <Field type="text" name={'password'}/>
                <button >Login</button>
                </Form>
            </Formik>
        </>
    )
}
