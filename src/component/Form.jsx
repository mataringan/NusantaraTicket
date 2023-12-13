"use client";
import React, { useState } from "react";
import ButtonForm from "./ButtonForm";
import InputForm from "./InputForm";

export default function Form() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
    };
    const handleReset = () => {
        setValue({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
            <InputForm
                label={"Name"}
                placeholder={"Enter your name"}
                type={"text"}
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
            <InputForm
                label={"Email"}
                placeholder={"Enter your email"}
                type={"email"}
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            <InputForm
                label={"Message"}
                placeholder={"Enter your message"}
                type={"text"}
                value={value.message}
                onChange={(e) => setValue({ ...value, message: e.target.value })}
            />
            <div className='flex gap-x-3'>
                <ButtonForm onClick={handleReset}>Reset</ButtonForm>
                <ButtonForm type={"submit"}>Send</ButtonForm>
            </div>
        </form>
    );
}
