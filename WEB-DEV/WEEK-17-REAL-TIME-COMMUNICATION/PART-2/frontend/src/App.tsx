import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState(["hi there", "nice there"]);
  const [data, setData]=useState<{message:string}>({
    message:'' 
  })

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");

    ws.onmessage = (event) => {
      console.log(event);
    };

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };

    return () => ws.close();
  }, []);

  const handleSend = () => {};

  return (
    <section className="bg-[#121212] w-full h-dvh flex flex-col">
      <div className="w-full h-full px-5">
        {message.map((messages, index) => (
          <p
            className="bg-white text-black w-fit p-3 rounded-lg mt-2 "
            key={index}
          >
            {messages}
          </p>
        ))}
      </div>
      <div className="w-full h-30 flex self-end ">
        <input
        value={data.message}
          type="text"
          placeholder="Message..."
          className="w-full px-2 outline-none text-black "
          onChange={(e)=>setData({message:e.target.value})}
        />
        <button
          className="uppercase bg-purple-400 font-bold  px-2 py-2 w-48"
          onClick={handleSend}
        >
          send
        </button>
      </div>
    </section>
  );
};

export default App;
