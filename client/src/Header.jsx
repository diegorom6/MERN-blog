import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
          credentials: 'include',
        }).then(response => {
          response.json().then(userInfo => {
            setUserInfo(userInfo);
          });
        });
    }, []);

    function logout() {
        fetch("http://localhost:4000/logout", {
            credentials: "include",
            method: "POST"
        });
        
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <nav className="header-nav">
            <Link to="/" className="logo">
                Blog
            </Link>
            <div>
                {username && (
                    <>
                        <Link to={"/create"} >Nuevo Post</Link>
                        <a onClick={logout}>Salir</a>
                    </>
                )}

                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
