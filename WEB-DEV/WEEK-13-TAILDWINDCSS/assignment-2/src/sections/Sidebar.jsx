import logo from ".././assets/image.png";
import profile from ".././assets/girl.jpg";
import { sidebar } from "../assets/data.js";
import SideBarCard from "../components/SideBarCard";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-1/4 bg-white px-4 py-3 flex-col border-slate-300 max-md:hidden  ">
      <header className="flex justify-between w-full items-center h-20">
        <a href="#">
          <img src={logo} width={100} className="rounded-lg" />
        </a>
        <div>
          <img src={profile} alt="profile" width="40" className="rounded-xl" />
        </div>
      </header>
      <nav className="flex mt-4 flex-col gap-3">
        {sidebar.map((items, index) => (
          <div key={index} className="h-10 flex items-center ">
            <SideBarCard items={items} />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
