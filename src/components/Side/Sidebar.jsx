import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt,newChat} =useContext(Context)

  const loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        {/* using onclick function here we call setExtended fun to change the value from false to true or vice versa when we will click the menu icon */}
        <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="menuicon" />
        <div onClick={()=>newChat()}  className="new-chat">
          <img src={assets.plus_icon} alt="" />

          {/* using ternary operator check the condition if our condition is true return p else return null. */}
          {extended ? <p>New Chat</p> : null}
        </div>

        {/* check condition for this div also */}

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{

              return(
                  <div  onClick={()=>loadPrompt(item)}  className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)}...</p>
                  </div>
              )

            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {/* also add condition here  */}

          {extended ? <p>help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {/* also add condition here  */}
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {/* also add condition here ,this condition hide the text if it is false if it is true it will show the text*/}
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
