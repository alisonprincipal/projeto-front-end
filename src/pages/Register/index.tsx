import Logo from "../../assets/img/mewLogo.png";
import { StyledRegisterPage, StyleFormRegister, StyleHeader } from "./styles";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { Link } from "react-router-dom";


interface iRegisterData {
  name: string;
  email: string;
  image: string;
  password: string;
  confirmed_password?: string;
}

export const Register = () => {
  const { userRegister } = useContext(AuthContext);
  const { setOnModal, onModal } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterData>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  function submit(data: iRegisterData) {
    delete data.confirmed_password;
    userRegister(data);
    reset();
  }

  return (
    <>
      <StyleHeader>
        <figure>
          <img src={Logo} alt="on book" />
        </figure>
        <div>
          <Link to="/">Inicio</Link>
        </div>
      </StyleHeader>
      <StyledRegisterPage>
        <div className="divText">
          <h3>
            <strong>Conecte-se</strong> <br /> aos livros
          </h3>
          <p>
            Aqui você vai encontrar <br /> o melhor da literatura.{" "}
          </p>
        </div>
        <StyleFormRegister
          className="registerForm"
          onSubmit={handleSubmit(submit)}
        >
          <div className="divheader">
            <h2>Cadastre-se</h2>
          </div>
          <Input
            label="Nome"
            nameError="name"
            placeholder="Digite seu nome aqui"
            register={register}
            type="text"
            msgerror={errors.name?.message}
          />
          <Input
            label="E-mail"
            nameError="email"
            placeholder="Digite seu email aqui"
            register={register}
            type="email"
            msgerror={errors.email?.message}
          />
          <Input
            label="Imagem"
            nameError="image"
            placeholder="Adicione um avatar"
            register={register}
            type="text"
            msgerror={errors.image?.message}
          />
          <Input
            label="Senha"
            nameError="password"
            placeholder="Digite sua senha aqui"
            register={register}
            type="password"
            msgerror={errors.password?.message}
          />
          <Input
            label="Confirmar senha"
            nameError="confirmed_password"
            placeholder="Digite sua senha novamente"
            register={register}
            type="password"
            msgerror={errors.confirmed_password?.message}
          />
          <button className="btnRegister" type="submit">
            Confirmar
          </button>
          <h5>
            Já é cadastrado? Faça o login{" "}
            <Link
              onClick={() => {
                setOnModal(!onModal);
              }}
              to="/"
            >
              Aqui
            </Link>
          </h5>
        </StyleFormRegister>
      </StyledRegisterPage>
    </>
  );
};
