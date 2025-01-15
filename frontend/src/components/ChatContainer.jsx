import React, { useEffect, useRef } from 'react'
import { useChatStore } from '../store/useChatStore'
import { useAuthStore } from '../store/useAuthStore';
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';
import MessageSkeleton from './skeletons/MessageSkeleton';
import { formatMessageTime } from '../lib/utils';

const ChatContainer = () => {
    const { messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessage, unsubscribeFromMessage } = useChatStore();
    const { authUser } = useAuthStore();
    const messageEndRef = useRef(null);

    useEffect(() => {
        getMessages(selectedUser._id);

        subscribeToMessage();

        return () => unsubscribeFromMessage();
    }, [selectedUser._id, getMessages])

    useEffect(() => {
        if (messageEndRef.current && messages) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])


    if (isMessagesLoading) return (
        <div className="flex flex-1 flex-col overflow-auto">
            <ChatHeader />
            <MessageSkeleton />
            <MessageInput />
        </div>
    )

    return (
        <div className="flex flex-1 flex-col overflow-auto">
            <ChatHeader />

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                        ref={messageEndRef}
                    >
                        <div className='chat-image avatar'>
                            <div className="size-10 rounded-full border">
                                <img
                                    src={message.senderId === authUser._id
                                        ? authUser.profilePic || "/avatar.png"
                                        : selectedUser.profilePic || "/avatar.png"}
                                    alt="profile pic"
                                />
                            </div>
                        </div>
                        <div className="chat-bubble flex ">
                            <div>
                                {message.image && (
                                    <img src={message.image} alt="Attachment" className='sm:max-w-[200px] rounded-md mb-2' />
                                )}
                                {message.text && (
                                    <p className="mb-1 mr-2">{message.text}</p>
                                )}
                            </div>
                            <time className="text-xs text-gray-400 self-end">
                                {formatMessageTime(message.createdAt)}
                            </time>
                        </div>
                    </div>
                ))}
            </div>

            <MessageInput />
        </div>
    )
}

export default ChatContainer