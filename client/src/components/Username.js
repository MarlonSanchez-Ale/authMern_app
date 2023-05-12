import React from "react";
import avatar from '../assets/profile.png'
import { Link } from "react-router-dom";
import style from '../styles/username.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { usernameValidate } from "../helpers/validate";
import { useFormik } from "formik";

export default function Username() {

    const formik = useFormik({
        initialValues: {
            username : ''
        },
        validate: usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })


    return (
        <div className="container mx-auto">

            <Toaster position="top-center" reverseOrder={false}></Toaster>
            
            <div className="flex justify-center items-center h-screen">
                <div className={style.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Hello Again!</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">Explore More by connecting with us.</span>
                    </div>

                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img src={avatar} className={style.profile_img} alt="avatar" />
                        </div>

                        <div className="textbox flex flex-col items-center">
                            <input type="text" className={style.textbox} placeholder="User Name" {...formik.getFieldProps('username')}/>
                            <button type="submit" className={style.btn}>Let's Go</button>
                        </div>

                        <div className="text-center py-4">
                            <span>Not a Member <Link className="text-blue-500" to="/Register" >Register Now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}