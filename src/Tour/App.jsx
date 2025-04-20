import React, { useState } from "react";
import bgImg from "../assets/tourpagebg.gif";
import tourImg from "../assets/strangertourpage.jpg";

const TourPage = () => {
  const [messages, setMessages] = useState([
    { user: "User1", text: "Hello! Excited to travel with everyone!" },
    { user: "User2", text: "Same here! Can't wait to see where we go." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { user: "You", text: input }]);
    setInput("");
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-no-repeat text-gray-800"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <header className="text-center p-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-blue-900">Discover Your Next Adventure</h1>
        <p className="text-sm lg:text-lg text-gray-600">Choose your perfect travel experience.</p>
      </header>

      <section className="lg:flex flex-wrap justify-center gap-8 m-8">
        <div className="bg-white rounded-xl shadow-lg text-center p-8 w-72 hover:scale-105 transition-transform">
          <div
            className="w-20 h-20 mx-auto mb-4 bg-cover"
            style={{ backgroundImage: "url('https://img.icons8.com/ios-filled/100/sunset.png')" }}
          ></div>
          <h2 className="text-2xl text-blue-900 mb-2">Solo Travel</h2>
          <p className="text-gray-600 text-base">
            Embark on a personal journey and explore the world independently.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg text-center p-8 w-72 hover:scale-105 transition-transform">
          <div
            className="w-[200px] h-[100px] mx-auto mb-4 bg-cover"
            style={{ backgroundImage: `url(${tourImg})` }}
          ></div>
          <h2 className="text-2xl text-blue-900 mb-2">Strangers Group Travel</h2>
          <p className="text-gray-600 text-base">
            Join a group of fellow travelers and make new friends on the go.
          </p>
          <a href="#chat" className="text-xl inline-block mt-4 text-blue-900 font-bold">
            Join Chat
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg text-center p-8 w-72 hover:scale-105 transition-transform">
          <div
            className="w-20 h-20 mx-auto mb-4 bg-cover"
            style={{ backgroundImage: "url('https://img.icons8.com/ios-filled/100/treasure-map.png')" }}
          ></div>
          <h2 className="text-2xl text-blue-900 mb-2">Surprise Travel</h2>
          <p className="text-gray-600 text-base">
            Let us plan a surprise trip for you and reveal the destination last minute.
          </p>
        </div>
      </section>

      <section id="chat" className="w-[290px] lg:w-full max-w-xl bg-white p-8 mt-100 rounded-xl shadow-lg ">
        <h2 className="text-2xl text-blue-900 text-center mb-4">Group Travel Chat</h2>
        <div className="flex flex-col">
          <div className="h-52 overflow-y-auto text-sm lg:text-xl border border-gray-300 rounded p-4 mb-4 bg-gray-50">
            {messages.map((msg, index) => (
              <p key={index}>
                <strong>{msg.user}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="text-sm lg:text-xl flex-1 p-2 border border-gray-300 w-[200px] rounded"
            />
            <button
              onClick={sendMessage}
              className="px-4 text-sm lg:text-xl py-2 bg-blue-900 text-white hover:bg-blue-800 hover:scale-105 "
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourPage;
