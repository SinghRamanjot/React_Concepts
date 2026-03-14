import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../store/userSlice/userSlice";
import type { AppDispatch, RootState } from "../../store/store";

function UserDashboard() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.user.loading);
  const name = useSelector((state: RootState) => state.user.name);
  const error = useSelector((state: RootState) => state.user.error);
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
