import React, {useState} from "react"
import './Control.css';

function Control({onAddList}){
  const [textInput, setTextInput] = useState("");
  const text_input_Handler = (e) => {
    setTextInput(e.target.value);
  }
  const onSubmit_Handler = (e) => {
    if(textInput && textInput.trim()){
      onAddList(textInput);
    }
    setTextInput("");
  }
  return(
      <div className="bottom" style={{width:"100%"}}>
        <div className="s_text normalText">Add to list</div>
        <div style={{display:"flex"}}>
          <input type="text" className="add_to_list_input" id="add_to_list_input" value={textInput} onChange={text_input_Handler}/>
          &nbsp;
          <input type="button" className="add_to_list_button l_text" value="+" onClick={onSubmit_Handler}/>
        </div>
      </div>
  );
}

export default Control