import React from 'react'
import { useForm } from 'react-hook-form';
import './style.css'

function Form() {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm(
        // {defaultValues: {
        //     email: "test@gmail.com",
        //     password: "root123456"
        // }}
    )

    const createUser = async (data) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 300))
            throw new Error()
            console.log(data)
        } catch(err) {
            setError("root", {
                message: "This email is already taken"
            })
        }
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(createUser)}>

                <input 
                    type="text"
                    placeholder='Email'
                    {...register("email",
                        {required: "Email is required",
                        validate: value => {
                            if(!value.includes("@")) {
                                return "Email must include @"
                            }
                            return true;
                        }})}   
                 />
                 {errors.email && <div>{errors.email.message}</div>}

                <input type="text"
                    placeholder='Password'
                    {...register("password", {
                        required: "Password in required",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                    })}
                />
                {errors.password && <div>{errors.password.message}</div>}

                <button disabled={isSubmitting} type='Submit'>
                    {isSubmitting ? "Loading..." : "Submit"}
                </button>

                {errors.root && <div>{errors.root.message}</div>}
            </form>
        </div>
    )
}

export default Form
//  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.{2,4}$/,