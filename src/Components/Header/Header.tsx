import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchAuthMe } from "../../Store/Slices/authSlice";
import { NavLink } from "react-router-dom";

import "./Header.css";

export default function Header() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const { id, email, login } = useAppSelector((state) => state.authData);
  console.log(id, email, login);

  return (
    <header className="Header">
      {login
        ? <h2>{login}</h2>
        : <NavLink to={"/login"}>Login</NavLink>
        }
      
      <input type="text" />
    </header>
  );
}
