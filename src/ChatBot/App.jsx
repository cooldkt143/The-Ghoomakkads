import React, { useRef, useState, useEffect } from 'react'
import ChatbotIcon from './Component/ChatbotIcon'
import ChatForm from './Component/ChatForm'
import ChatMessage from './Component/ChatMessage'

export const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== ". . ."),
        { role: "model", text, isError }
      ]);
    }

    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: history })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong');

      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  }

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className={`fixed bottom-5 right-5 z-50 ${showChatbot ? '' : ''}`}>
    <span
      onClick={() => setShowChatbot(prev => !prev)}
      className={`fixed z-50 flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-300 ease-in-out
        ${showChatbot
          ? 'bottom-7 right-7 w-[60px] h-[60px] rounded-full bg-rose-700 text-white hover:bottom-8 hover:right-8 hover:w-[65px] hover:h-[65px] hover:rounded-full'
          : 'bottom-7 right-7 w-[60px] h-[60px] rounded-full bg-rose-500 text-white hover:bottom-8 hover:right-8 hover:w-[65px] hover:h-[65px] hover:rounded-full'}
      `}
    >
      <span className="material-symbols-rounded cursor-pointer text-white text-2xl">
        {showChatbot ? "close" : "chat_bubble"}
      </span>
    </span>




      {showChatbot && (
        <div className="fixed bottom-24 right-5 sm:max-w-full sm:max-h-full lg:h-[600px] lg:w-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <div className="flex items-center justify-between bg-rose-700 px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 p-1.5 bg-white rounded-full fill-rose-700">
                <ChatbotIcon />
              </div>
              <h2 className="text-lg font-semibold">ChatBot</h2>
            </div>
            <span 
            onClick={() => setShowChatbot(false)} className="material-symbols-rounded cursor-pointer bg-rose-700 hover:bg-rose-600 sm:rounded-full sm:w-[30px] sm:h-[30px] text-white text-2xl justify-center items-center flex">
              keyboard_arrow_down
            </span>
          </div>

          <div ref={chatBodyRef} className="flex flex-col gap-3 p-6 h-[460px] overflow-y-auto">
            <div className="flex gap-3 items-end">
              <div className="w-9 h-9 p-1.5 bg-rose-700 fill-white rounded-full">
                <ChatbotIcon />
              </div>
              <p className="text-sm bg-rose-100 rounded-[13px_13px_13px_3px] px-4 py-3 max-w-[80%]">
                Hello! I am GhoomBot. How can I help you today?
              </p>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 bg-white">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
