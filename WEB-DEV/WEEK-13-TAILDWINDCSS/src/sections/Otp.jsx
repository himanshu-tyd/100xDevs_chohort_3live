import React from "react";
import Otpcard from "../component/Otpcard";




const Otp = () => {
  const [inputBox,setInputBox]=React.useState(new Array(6).fill(''))
  const inputRef=React.useRef([])

  const handleChange=(e,index)=>{
      const {value}=e.target
      const newOtp=[...inputBox]
       newOtp[index]=value
       setInputBox(newOtp)

       if(index > length - 1 ){
          inputRef.current[index+1].focus()
       }       

  }

  const handleKeyDown=(e,index)=>{
      console.log('press herer')
    if(e.key==='Backspace'    ){
      if(index>0){
        inputRef.current[index-1].focus()
      }
  }
}



  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mt-20 flex items-center justify-center flex-col">
        <h2 className="font-bold text-white text-xl">
          Check your email For Code.
        </h2>
        <p className="mt-10 text-white font-thin">
          Please verify code send to your email id abc@example.com
        </p>
      </div>
      <div className="flex items-center jsutify-center mt-10">
      {
        inputBox.map((_,i)=>(
          <div key={i} className="mx-1">
            <Otpcard handleChange={handleChange} inputRef={inputRef} index={i} handleKeyDown={handleKeyDown} />
          </div>
        ))
      }


      </div>
        <button
          className={`capitalize w-[400px] h-[45px] bg-[#7F95AC] text-white rounded-[10px] mt-10 ${
            inputBox ? "bg-[#3FDFD0]" : ""
          } `}
        >
          verify
        </button>
    </div>
  );
};

export default Otp;
