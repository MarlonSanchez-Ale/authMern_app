import React from "react";
import avatar from '../assets/profile.png'
import { Link } from "react-router-dom";
import style from '../styles/username.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { passworValidate } from "../helpers/validate";
import { useFormik } from "formik";

export default function Password() {

    const formik = useFormik({
        initialValues: {
            password : 'admin@123'
        },
        validate: passworValidate,
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
                            <input className={style.textbox} placeholder="Password" type="password" {...formik.getFieldProps("password")} />
                            <button type="submit" className={style.btn}>Sign In</button>
                        </div>

                        <div className="text-center py-4">
                            <span>Forgot Password? <Link className="text-blue-500" to="/Recovery" >Recovery Now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}