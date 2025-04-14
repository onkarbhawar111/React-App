import * as Yup from 'yup'


export default SignUpSchema => Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().min(3).required('Password is required'),
    cpassword: Yup.string().oneOf([Yup.ref('password')], 'Password not matched').required('CPassword is required')
})