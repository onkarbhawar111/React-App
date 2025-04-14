import React from 'react'
// import { useFormik } from 'formik'
import SignUpSchema from './SignUpSchema.jsx'
import { Formik, Form, Field } from 'formik'

const initialValues = {
    name: '',
    email: '',
    password: '',
    cpassword: ''
}

const FormHandling = () => {

    const onSubmit = (values)=>{
    console.log(values)
    }
    // const { values, handleSubmit, handleChange, handleBlur, errors } = useFormik({
    //     initialValues: initialValues,
    //     validationSchema: SignUpSchema,
    //     onSubmit: (values) => {
    //         console.log(values);
    //     }
    // })
    // console.log(formik)
    return (
        <>
            <h1>SignUp Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={SignUpSchema}
                onSubmit={onSubmit}
            >
                {( {errors })=>(
                    <Form>

                    <label>Name: </label>
                    {/* <input type="text" name='name' onBlur={handleBlur} onChange={handleChange} value={values.name} />  */}
                    <Field type='text' name='name' />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                    <br />

                    <label>Email: </label>
                    {/* <input type="email" name='email' onBlur={handleBlur} onChange={handleChange} value={values.email} />  */}
                    <Field type='email' name='email' />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                    <br />

                    <label>Password: </label>
                    {/* <input type="password" name='password' onBlur={handleBlur} onChange={handleChange} value={values.password} /> */}
                    <Field type='password' name='password' />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                    <br />

                    <label>Confirm Password: </label>
                    {/* <input type="password" name='cpassword' onBlur={handleBlur} onChange={handleChange} value={values.cpassword} />  */}
                    <Field type='password' name='cpassword' />
                    {errors.cpassword && <span style={{ color: 'red' }}>{errors.cpassword}</span>}
                    <br />

                    <button type='submit'>Submit</button>

                </Form>
                )}

            </Formik>
        </>
    )
}

export default FormHandling