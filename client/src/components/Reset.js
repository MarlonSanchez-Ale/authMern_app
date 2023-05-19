import React from "react";
import avatar from '../assets/profile.png'
import { Link } from "react-router-dom";
import style from '../styles/username.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { resetPasswordValidation } from "../helpers/validate";
import { useFormik } from "formik";

export default function Reset() {

    const formik = useFormik({
        initialValues: {
            password: 'admin@123',
            confirm_pass: 'admin@123'
        },
        validate: resetPasswordValidation,
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
                <div className={style.glass} style={{ width: "50%" }}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Reset!</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">Enter new password.</span>
                    </div>

                    <form className="py-20" onSubmit={formik.handleSubmit}>


                        <div className="textbox flex flex-col items-center gap-6">

                            <input className={style.textbox} placeholder="New Password" type='password' {...formik.getFieldProps("password")} />
                            <input className={style.textbox} placeholder="Repet Password" type="password" {...formik.getFieldProps("confirm_pass")} />


                            <button type="submit" className={style.btn}>Sign In</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}