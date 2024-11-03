
import { Route, Routes } from "react-router-dom";
import Home from "../sections/Home";
import Otp from "../sections/Otp";

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
       
