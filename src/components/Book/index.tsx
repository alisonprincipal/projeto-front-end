import * as S from "./style";
import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext/AuthContext";

export function Book() {
  const { setInfBook  } = useContext(DashContext);
  const { filterList,  } = useContext(AuthContext);

  return (
    <S.StyleUl>
      {filterList.length===0?<div className="divError"><h2>Ops! Não encontramos nada na pesquisa...</h2><span>{':('}</span></div>:filterList.map((element,index) => (

        <li key={index}>
          <img className="imgBook" src={element.img} alt="" />

          <div className="divInfoBO">
            <p>{element.alternative}</p>
            <Link
              to="/description"
              onClick={() => {
                setInfBook(element);
                localStorage.setItem("book", JSON.stringify(element));
              }}
            >
              Exibir
            </Link>
          </div>
        </li>
      ))}
    </S.StyleUl>
  );
}
