import { useContext } from "react";
import {
  DashContext,
  IBooks,
} from "../../contexts/DashboardContext/DashContext";

import { Licard } from "./style";

export function ListNoRead(element: IBooks, index: number) {
  const { RemoveNoReadBooks } = useContext(DashContext);

  return (
    <Licard key={index}>
      <img className="imgBook" src={element.img} alt={element.title} />
      <div className="divInfoBO">
        <p>{element.title}</p>
        <button
          className="btnRemove"
          onClick={() => RemoveNoReadBooks(element.id)}
        >
          Remover
        </button>
      </div>
    </Licard>
  );
}
