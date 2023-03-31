import { useContext } from "react";
import { Header } from "../../components/Header";
import { LoginModal } from "../../components/ModalLogin";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import * as S from "./style";

export const Home = () => {
  const {onModal,setOnModal}=useContext(AuthContext)

  return (
    <>
      <Header
        route1={"/register"}
        nameRoute1={"Cadastrar"}
        nameRoute2={"Login"}
        onclick={()=>{setOnModal(!onModal)}}
      />
      <S.Main>
        <div>
         <h3><strong>Conecte-se</strong> <br/> aos livros</h3>
         <p>Aqui você vai encontrar <br /> o melhor da literatura. </p>
        </div>
      </S.Main>

      {onModal?<LoginModal/>:null}
    </>
  );
};
