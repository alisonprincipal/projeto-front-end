import { useContext } from "react";
import { DashContext } from "../../contexts/DashboardContext/DashContext";

import { StyleUl } from "./style";

export function BookListRead() {
  const { read } = useContext(DashContext);

  return (
    <div>
      <h2>Livros Para ler</h2>
      <StyleUl>
      </StyleUl>
    </div>
  );
}
