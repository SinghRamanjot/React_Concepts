import FetchOnMount from "./concepts/useEffect/FetchOnMount.demo";
import SearchUsers from "./concepts/useEffect/Debouce";
import FocusInput from "./concepts/useRef/FocusInput.demo";
import ExpensiveCalc from "./concepts/useMemo/ExpensiveCalc.demo";

const App = () => {
  return (
    <div>
      <FetchOnMount />
      <SearchUsers />
      <FocusInput />
      <ExpensiveCalc/>
    </div>
  );
};

export default App;
