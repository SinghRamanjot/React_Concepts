import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../store/userSlice/userSlice";
import type { AppDispatch } from "../../store/store";

function UserDashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: any) => state.user.loading);
  const name = useSelector((state: any) => state.user.name);
  const error = useSelector((state: any) => state.user.error);
  return (
    <div>
      <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {name && <p>User: {name}</p>}
    </div>
  );
}

export default UserDashboard;
