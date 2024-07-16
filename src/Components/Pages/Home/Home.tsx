import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { fetchUsers } from "../../../Store/Slices/usersSlice";
import { NavLink } from "react-router-dom";

import "./Home.css";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users } = useAppSelector((state) => state.usersData);
  console.log(users);

  return (
    <div>
      <div>
        {users.map((user) => (
          <div>
            <NavLink to={`/profile/${user.id}`}>
              <img
                width={200 + "px"}
                src={
                  user.photos.large
                    ? user.photos.large
                    : "https://img.freepik.com/premium-photo/computer-programmer-icon-white-background-ar-32-v-52-job-id-16481ff812194d37833d88603725b2d4_941600-89823.jpg?w=996"
                }
                alt={`${user.id}`}
              />
            </NavLink>
            <h4>{user.name}</h4>
            <b>{user.id}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
