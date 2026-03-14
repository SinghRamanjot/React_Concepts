import FetchOnMount from "./concepts/useEffect/FetchOnMount.demo";
import SearchUsers from "./concepts/useEffect/Debouce";
import FocusInput from "./concepts/useRef/FocusInput.demo";
import ExpensiveCalc from "./concepts/useMemo/ExpensiveCalc.demo";
import StableCallback from "./concepts/useCallback/StableCallback.demo";
import UserDashboard from "./concepts/redux/UserDashboard.demo";
import UseToggleDemo from "./concepts/customHooks/useToggle/useToggle.demo";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state: any) => state.user);
  console.log("user from store", user);
  return (
    <div>
      {/* <FetchOnMount />
      <SearchUsers />
      <FocusInput />
      <ExpensiveCalc/>
      <StableCallback /> */}
      {/* <UserDashboard /> */}
      <UseToggleDemo />
    </div>
  );
};

export default App;
