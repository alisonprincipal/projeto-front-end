import { Input } from "../Input"
import { StyleModalLogin } from "./style"
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from "../../schema/schema";
import {  useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/AuthContext";

interface iData{
    email: string,
    password: string
  }
export interface iResponseLogin {
    accessToken: string
    user: iUser
  }
export interface iUser {
    email: string
    firstname: string
    lastname: string
    age: number
    id: number
  }
export const LoginModal =()=>{
    const {setOnModal,onModal}=useContext(AuthContext)
    const { loginUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: {errors} } = useForm<iData>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur"
  });
const submit: SubmitHandler<iData> = (data) =>{
    
    loginUser(data)
    setOnModal(!onModal)
  }

     
    return(
        <StyleModalLogin>
            <div className="divContainer" > 
                <div className="divheader">
                    <h2>Login</h2>
                    <button onClick={()=>{setOnModal(!onModal)}}>X</button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label="Email" placeholder="Digite seu email" type="text" register={register} nameError='email' msgerror={errors.email?.message}/>
                    <Input label="Senha" placeholder="Digite sua senha" type="password" register={register} nameError='password' msgerror={errors.password?.message}/>
                <button type="submit" className="btnLogar">Entrar</button>
                </form>

            </div>
        </StyleModalLogin>
    )
}