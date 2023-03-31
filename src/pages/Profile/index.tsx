import { useContext, useEffect } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { StyleHeader, StyleMain } from "./style";
import { FaUserEdit } from "react-icons/fa";
import icone from "../../assets/img/logoutIcon.svg";
import logoTitle from "../../assets/img/mewLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { ListBooks } from "../../components/ListRead";
import { ListNoRead } from "../../components/ListNoRead";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { EditUserModal } from "../../components/ModalEdit";

export function Profile() {
  const { userInfo, read, noRead, readBooks, noReadBooks } =
    useContext(DashContext);

  const { setOnModalEdit, onModalEdit } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    readBooks();
    noReadBooks();
  }, []);

  function LogoutUser() {
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <StyleHeader>
        <figcaption>
          <img src={logoTitle} alt="imagem de uma logo" />
        </figcaption>

        <Link to={"/dashboard"}>Inicio</Link>

        <div className="infUser">
          <p>{userInfo.name}</p>
          <img
            className="foto"
            src={userInfo.image}
            alt="Usuario"
            onClick={() => navigate("/profile")}
          />
          <img
            className="logout"
            onClick={() => LogoutUser()}
            src={icone}
            alt="Icone de logout"
          />
        </div>
      </StyleHeader>
      <StyleMain>
        <aside className="asideProfile">
          <FaUserEdit
            onClick={() => setOnModalEdit(true)}
            className="EditButtonUser"
          />
          <figure>
            <img src={userInfo.image} alt="Imagen do usuario" />
          </figure>

          <div className="divUserInfo">
            <p>Nome: {userInfo.name}</p>
            <p>E-mail: {userInfo.email}</p>
          </div>
        </aside>

        <section className="ListaUls">
          <div className="container">
            <h2>Desejo ler</h2>
            <ul>
              {noRead.length === 0 ? (
                <div className="containerNot">
                  <h3>Nenhum livro adicionado</h3>
                  <span>{":("}</span>
                </div>
              ) : (
                noRead.map((element, index) => ListNoRead(element, index))
              )}
            </ul>
          </div>
          <div className="containerTwo">
            <h2>Já lidos</h2>
            <ul>
              {read.length === 0 ? (
                <div className="containerNotRead">
                  <h3>Nenhum livro adicionado</h3>
                  <span>{":("}</span>
                </div>
              ) : (
                read.map((element, index) => ListBooks(element, index))
              )}
            </ul>
          </div>
        </section>
      </StyleMain>
      {onModalEdit ? <EditUserModal /> : null}
    </>
  );
}
