"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const App = () => {
    const [message, setMessage] = (0, react_1.useState)(["hi there", "nice there"]);
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8000");
        ws.onmessage = (event) => {
            console.log(event);
        };
        ws.onopen = (event) => {
            ws.send(JSON.stringify({
                type: "join",
                payload: {
                    roomId: "red",
                },
            }));
        };
        return () => ws.close();
    }, []);
    const handleSend = () => { };
    return (<section className="bg-[#121212] w-full h-dvh flex flex-col">
      <div className="w-full h-full px-5">
        {message.map((messages, index) => (<p className="bg-white text-black w-fit p-3 rounded-lg mt-2 " key={index}>
            {messages}
          </p>))}
      </div>
      <div className="w-full h-30 flex self-end ">
        <input type="text" placeholder="Message..." className="w-full px-2 outline-none text-black "/>
        <button className="uppercase bg-purple-400 font-bold  px-2 py-2 w-48" onClick={handleSend}>
          send
        </button>
      </div>
    </section>);
};
exports.default = App;
