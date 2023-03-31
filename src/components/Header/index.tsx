import { Link } from "react-router-dom";
import Logo from "../../assets/img/mewLogo.png";
import * as S from "./style";

interface iRoutes {
  route1: string;
  nameRoute1: string;
  nameRoute2: string;
  onclick:any;
}

export function Header({ route1, nameRoute1, nameRoute2,onclick }: iRoutes) {
  return (
    <S.Header>
      <figure>
        <img src={Logo} alt="on book" />
      </figure>
      <div>
        <Link to={route1}>{nameRoute1}</Link>
        <button className="btnLogin" onClick={onclick} >{nameRoute2}</button>
      </div>
    </S.Header>
  );
}
