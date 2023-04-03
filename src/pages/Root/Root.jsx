import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { AuthContext } from "../../contexts/AuthContext";
import { Loader } from "../../components/Loader/Loader";


// Layout principal do App com Navbar Fixa
// As páginas com Navbar fixa: home, livros, empréstimos, etc
export function Root() {
    const usuarioLogado = useContext(AuthContext);


  const navigate = useNavigate();

  useEffect(() => {
  }, [])


  if (usuarioLogado === null) {
    // se está deslogado
    // redireciona para a página de login
    return (navigate("/"))     
  }

    return (
        <>
        <header>
            <Menu />
        </header>
        <main>
            <Outlet />
        </main>
        </>
    );
    }

