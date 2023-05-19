import React from "react";
import avatar from '../assets/profile.png'
import { Link } from "react-router-dom";
import style from '../styles/username.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from "formik";

export default function Recovery() {

    


    return (
        <div className="container mx-auto">

  

            <div className="flex justify-center items-center h-screen">
                <div className={style.glass}>
                    <div className="title flex flex-col items-center">
                        <h4 className="text-5xl font-bold">Recovery!</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">Enter OTP to recover password</span>
                    </div>

                    <form className="pt-20">


                        <div className="textbox flex flex-col items-center">

                            <div className="input text-center">
                                <span className="py-4 text-sm text-left text-gray-500 mb-5">Enter 6 digit OTP sent to your email adress.</span>
                                <input type="text" className={style.textbox} placeholder="OTP"  />
                            </div>

                            <button type="submit" className={style.btn}>Sign In</button>
                        </div>

                        <div className="text-center py-4">
                            <span>Forgot Password? <button className="text-blue-500">Resend</button></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}