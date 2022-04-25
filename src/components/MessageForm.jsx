import { useState } from 'react';
import { SendOutlined, PictureOutlined , UploadOutlined , BoldOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import InputEmoji from 'react-input-emoji'
import React from 'react';
import { Picker } from "emoji-mart";
import { Emoji } from 'emoji-mart';



const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  const handleUploademoji = (event) => {
    sendMessage(creds, chatId, { Emoji: event.target.emoji, text: '' });
  };
  const [boldFont, setBoldFont] = React.useState(false);

  
    // const [ text, setText ] = useState('')
    // function handleOnEnter (event) {
    //     sendMessage(creds, chatId, { files: event.target.files, text: '' });

    // }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
        <div>
            <button type="Bold" className="bold-button">
                <BoldOutlined className="bold-icon" />
            </button>



        </div>

        <div>
            <input
                
                className="message-input"
                placeholder="Send a message..."
                
                value={value}
                
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            
            
            
      </div>
      <div className='message-box'>
            <label htmlFor="upload-button">
                <span className="image-button">
                <UploadOutlined className="pin-icon" />
                </span>
            </label>|
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload.bind(this)}
            />

            

            <button type="submit" className="send-button">
                    <SendOutlined className="send-icon" />
            </button>
        
      </div>
      {/* <InputEmoji 
         multiple={false}
         id="upload-button"
         onChange={handleUpload.bind(this)}
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        placeholder="Type a message"
    />
    <button className="button" onClick={() => setShowEmojis(!showEmojis)}></button> */}
      
    
      
    </form>
  );
};

export default MessageForm;