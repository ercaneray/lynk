"use client"

import { auth } from '../../firebaseconfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form"

type Inputs = {
  email: string,
  password: string
}
export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit = ({ email, password }: Inputs) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      }
      )
  }
  return (
    <div>
      <h1>Welcome to the Lynk</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register('email')} />
        <input type="password" placeholder="Password" {...register('password')} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}