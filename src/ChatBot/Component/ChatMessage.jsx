import React from 'react'
import ChatbotIcon from './ChatbotIcon'

const ChatMessage = ({ chat }) => {
  const isBot = chat.role === "model";
  const isError = chat.isError;

  const baseClasses = "flex gap-3 items-end";
  const textClasses = `text-sm whitespace-pre-line break-words px-4 py-3 max-w-[80%] ${
    isError
      ? 'bg-red-200 text-red-800'
      : isBot
      ? 'bg-rose-100 rounded-[13px_13px_13px_3px]'
      : 'bg-rose-700 text-white rounded-[13px_13px_3px_13px]'
  }`;

  return (
    <div className={`${baseClasses} ${isBot ? '' : 'flex-col items-end'}`}>
      {isBot && (
        <div className="w-9 h-9 p-1.5 bg-rose-700 fill-white rounded-full">
          <ChatbotIcon />
        </div>
      )}
      <p className={textClasses}>{chat.text}</p>
    </div>
  )
}

export default ChatMessage
