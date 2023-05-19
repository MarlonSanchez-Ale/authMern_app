import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import convertToBase64 from '../helpers/convert';
import { profileValidation } from '../helpers/validate';
import style from '../styles/username.module.css'
import extend from '../styles/profile.module.css'

export default function Profile() {

    const navigate = useNavigate()
    const [file, setFile] = useState()

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            mobile: '',
            email: 'doyol56239@cnogs.com',
            address: ''
        },
        validate: profileValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign(values, { profile: file })
            console.log(values)
        }
    })

    /** formik doensn't support file upload so we need to create this handler */
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }

    return (
        <div className="container mx-auto">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='flex justify-center items-center h-screen' style={{height: '100%'}}>
                <div className={`${style.glass} ${extend.glass}`} style={{ width: "45%", marginTop: '100px', marginBottom: '50px' }}>

                    <div className="title flex flex-col items-center">
                        <h4 className='text-5xl font-bold mt-6'>Profile</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                            You can update the details!
                        </span>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                            <label htmlFor="profile">
                                <img src={file || avatar} className={`${style.profile_img} ${extend.profile_img}`} alt="avatar" />
                            </label>

                            <input onChange={onUpload} type="file" id='profile' name='profile' />
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            <div className='name flex w-3/4 gap-10'>
                                <input {...formik.getFieldProps('firstName')} className={`${style.textbox} ${extend.textbox}`} type="text" placeholder='FirstName' />
                                <input {...formik.getFieldProps('lastName')} className={`${style.textbox} ${extend.textbox}`} type="text" placeholder='LastName' />
                            </div>
                            <div className='name flex w-3/4 gap-10'>
                                <input {...formik.getFieldProps('mobile')} className={`${style.textbox} ${extend.textbox}`} type="text" placeholder='Mobile No*' />
                                <input {...formik.getFieldProps('email')} className={`${style.textbox} ${extend.textbox}`} type="text" placeholder='Email*' />
                            </div>

                            <input {...formik.getFieldProps('address')} className={`${style.textbox} ${extend.textbox}`} type="text" placeholder='Address' />
                            <button className={style.btn} type='submit'>Register</button>
                        </div>

                        <div className="text-center py-4">
                            <span className='text-gray-500'>come back later? <Link className='text-red-500' to="/">Logout</Link></span>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}