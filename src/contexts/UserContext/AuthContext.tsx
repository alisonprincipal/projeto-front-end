import { createContext, useContext } from "react";
import { ReactNode } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { iResponseLogin } from "../../components/ModalLogin";
import { DashContext } from "../DashboardContext/DashContext";

export interface IAuthProviderProps {
  children: ReactNode;
}
interface IAuthContext {
  loginUser: (data: iData) => void;
  userRegister: (formData: iRegisterData) => void;
  editUser: (formData: iDataEdit) => void;
  autoLogin: () => void;
  protectRoutes: () => void;
  bookList: iBookList[];
  filterList: iBookList[];
  setFilterList: React.Dispatch<React.SetStateAction<iBookList[]>>;

  onModal: boolean;
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;

  onModalEdit: boolean;
  setOnModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
interface iData {
  email: string;
  password: string;
}

interface iResponseData {
  accessToken: string;
  user: {
    email: string;
    name: string;
    id: string;
  };
}

interface iRegisterData {
  name: string;
  email: string;
  image: string;
  password: string;
  confirmed_password?: string;
}
export interface iBookList {
  alternative: string;
  categories: [];
  description: string;
  id: number;
  img: string;
  title: string;
}
interface iDataEdit {
  name?: string;
  email?: string;
  image?: string;
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [bookList, setBookList] = useState<iBookList[]>([] as iBookList[]);
  const [filterList, setFilterList] = useState<iBookList[]>([] as iBookList[]);
  const navigate = useNavigate();

  const [onModal, setOnModal] = useState(false);

  const [onModalEdit, setOnModalEdit] = useState(false);

  async function loginUser(data: iData) {
    try {
      const response = await api.post("/login", data);
      toast.success("Usuário Logado! 😎");

      const { accessToken, user } = response.data;
      localStorage.setItem("@Token", accessToken);
      localStorage.setItem("@id", user.id);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch {
      toast.error("Email ou senha incorreto! ");
    }
  }

  async function userRegister(formData: iRegisterData) {
    try {
      await api.post<iResponseData>("/users", formData);

      toast.success("Cadastro realizado com sucesso!", {
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error("Oops, algo deu errado...");
    }
  }

  async function editUser(formData: iDataEdit) {
    const token = localStorage.getItem("@Token");
    const id = localStorage.getItem("@id");
    try {
      await api.patch<iResponseData>(`/users/${id}`, formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

    setTimeout(() => {
      toast.success("Usuario editado com sucesso!", {
        autoClose: 2000,
      });
      
    }, 3000);
    } catch (error) {
      toast.error("Oops, algo deu errado...");
    }
  }

  async function autoLogin() {
    const token = localStorage.getItem("@Token");

    if (!token) {
      return null;
    }

    try {
      await api.get<iResponseLogin>("/livros", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      navigate("/dashboard");
    } catch {
      return null;
    }
  }

  async function protectRoutes() {
    const token = localStorage.getItem("@Token");

    if (!token) {
      navigate("/");
    }

    try {
      const response = await api.get("/livros", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setBookList(response.data);
      setFilterList(response.data);
    } catch {
      navigate("/");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        userRegister,
        autoLogin,
        protectRoutes,
        bookList,
        filterList,
        setFilterList,
        onModal,
        setOnModal,
        editUser,
        onModalEdit,
        setOnModalEdit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
