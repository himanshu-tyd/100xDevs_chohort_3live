
import profile from "../assets/girl.jpg";

const Profile = () => {
  return (
    <div className="flex h-full items-center justify-cente p-10 relative ">
      <div className="flex flex-col bg-white w-[240px] h-[300px] px-5 py-2 items-center rounded-2xl shadow-xl absolute -top-20  ">
        <div>
          <img src={profile} width={80} height={80} className="rounded-xl" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mt-2">Rusika Meloni</h2>
          <div className="flex flex-col items-center text-[#777679] justify-center text-[14px] gap-1 ">
            <p>rusika@gmail.com</p>
            <p>+91239992388</p>
            <p className="mt-3"> Dehli, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
