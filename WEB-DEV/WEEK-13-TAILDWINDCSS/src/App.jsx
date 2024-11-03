import RouterPage from "./route/Route";
import logo from "./assets/icon.svg";

function App() {
  return (
    <div className="flex items-center justify-center p-20 flex-col ">
      <a className="text-xl flex itesm-center justify-center">
        <img src={logo} alt="" width={28} height={28} />{" "}
        <span className="text-[#40E1D1] ml-2">Webinnar</span>.gg{" "}
      </a>
      <RouterPage />
    </div>
  );
}

export default App;
