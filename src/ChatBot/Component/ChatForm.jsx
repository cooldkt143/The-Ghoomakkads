import React from 'react'

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = React.useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';

    setChatHistory(history => [...history, { role: 'user', text: userMessage }]);

    setTimeout(() => {
      setChatHistory(history => [...history, { role: 'model', text: ". . ." }]);
      generateBotResponse([...chatHistory, { role: 'user', text: userMessage }]);
    }, 400);
  }

  const handleIconClick = () => {
    // Create a synthetic form submission
    handleFormSubmit({ preventDefault: () => {} });
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex items-center bg-white outline outline-1 outline-gray-300 focus-within:outline-rose-700 rounded-full px-4 py-2 shadow-sm w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="flex-grow bg-transparent outline-none text-sm placeholder-gray-400 px-2"
        required
      />
      <span
        onClick={handleIconClick}
        className="material-symbols-rounded bg-rose-700 text-white text-lg rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-rose-800 transition"
      >
        arrow_upward
      </span>
    </form>
  )
}

export default ChatForm
