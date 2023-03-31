import logoTitle from "../../assets/img/mewLogo.png";
import icone from "../../assets/img/logoutIcon.svg";
import iconeLupa from "../../assets/img/iconeLupa.svg";
import { StyleMain, StyleHeader } from "./style";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { AuthContext } from "../../contexts/UserContext/AuthContext";
import { Book } from "../../components/Book";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  const { readBooks, AllBooks, Filter } = useContext(DashContext);

  const { protectRoutes } = useContext(AuthContext);

  const { FilterInput } = useContext(DashContext);

  useEffect(() => {
    AllBooks();
    readBooks();
  }, []);

  useEffect(() => {
    protectRoutes();
  }, []);

  function LogoutUser() {
    window.localStorage.clear();
    navigate("/");
  }

  function FilInput(event: any) {
    event.preventDefault();

    FilterInput(value);
  }

  const { userInfo } = useContext(DashContext);

  return (
    <>
      <StyleHeader>
        <figcaption>
          <img src={logoTitle} alt="imagem de uma logo" />
        </figcaption>

        <div className="inputHeader">
          <input
            type="text"
            placeholder="Buscar por um livro..."
            onKeyUp={(event) => {
              FilterInput(event.currentTarget.value);
            }}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <img
            src={iconeLupa}
            onClick={(event) => {
              FilInput(event);
            }}
            alt="imagem de uma lupa"
          />
        </div>

        <div className="infUser">
          <p>Olá, {userInfo?.name} </p>
          <img
            className="foto"
            src={userInfo?.image}
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
        <aside className="asideDash">
          <h4>Categorias</h4>
          <ul>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Todos
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Ação
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Guerra
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Deuses
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Romance
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Mistério
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Fantasia
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Magia
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Comédia
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Investigação
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Religião
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Luta
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Mitologia
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Sexo
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Aventura
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Estratégia
            </button>
            <button
              className="btnFilter"
              onClick={(e) => {
                Filter(e.currentTarget.innerText.toString());
              }}
            >
              Terror
            </button>
          </ul>
        </aside>
        <section className="sectonBook">
          <Book />
        </section>
      </StyleMain>
    </>
  );
};
