import { Input } from "../Input";
import { StyleModalLogin } from "./style";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { DashContext } from "../../contexts/DashboardContext/DashContext";

interface iDataEdit {
  name?: string;
  email?: string;
  image?: string;
}
export function EditUserModal() {
  const { setOnModalEdit, onModalEdit, editUser } = useContext(AuthContext);
  const { userInfo, attUser, setAttUser } = useContext(DashContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataEdit>();

  const submit: SubmitHandler<iDataEdit> = (data: iDataEdit) => {
    editUser(data);
    setOnModalEdit(!onModalEdit);
  };

  return (
    <StyleModalLogin>
      <div className="divContainer">
        <div className="divheader">
          <h2>Editar</h2>
          <button
            onClick={() => {
              setOnModalEdit(!onModalEdit);
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            nameError="name"
            placeholder={userInfo.name}
            register={register}
            type="text"
            defaultValue={userInfo.name}
            msgerror={errors.name?.message}
          />
          <Input
            label="E-mail"
            nameError="email"
            placeholder={userInfo.email}
            register={register}
            type="email"
            defaultValue={userInfo.email}
            msgerror={errors.email?.message}
          />
          <Input
            label="Imagem"
            nameError="image"
            placeholder={userInfo.image}
            register={register}
            type="text"
            defaultValue={userInfo.image}
            msgerror={errors.image?.message}
          />
          <button
            type="submit"
            className="btnLogar"
            onClick={() => {
              setTimeout(() => {
                setAttUser(!attUser);
              }, 3000);
            }}
          >
            Editar
          </button>
        </form>
      </div>
    </StyleModalLogin>
  );
}
