'use client';
import Buttons from "@/components/buttons/Button";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Input_field from "@/components/input_field/Input_field";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "@/Redux/userSlice";
import { toast } from "react-toastify";


export default function Sigup() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();


  const onSubmit = async (data) => {

    console.log(data)

    try {
      await axios.post('http://localhost:3100/Api/AuthUserRegister', {
        data
      }).then((res) => {
        console.log(res.data)
        dispatch(addUser(res.data))
        toast('Registered Successfully')
        window.location.pathname = '/about';

      }).catch((err) => {
        // console.log(err)
      })
    } catch (err) {

    }


  }

  return (
    <div className="container w-100 vh-100">
      <div className="w-100 h-100 d-flex flex-column justify-center items-center">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="signup-form">
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    {...register("Name", { required: true })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    {...register("Email", { required: true })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    {...register("Password", { required: true })}

                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}