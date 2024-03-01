import './App.css';
import Progress from './components/Progress';
import List from './components/List';
import Condition from './components/Condition';
import Control from './components/Control';
import {useState} from 'react';

function App() {
  
  //待辦事項
  const [boxList, setBoxList] = useState([]);
  //完成事項
  const [doneList, setDoneList] = useState([]);
  //是否排序
  const [isSort, setIsSort] = useState(false);

  //新增事項
  const addListHandler = (l_title) => {
    setBoxList((prevBoxList)=>{
      return [
        ...prevBoxList,
        {l_id:Math.random().toString(), l_done:false, l_time:new Date().toLocaleString(), l_title}
      ];
    });
  }
  //刪除事項
  const deleteListHandler = (l_id) => {
    const newBoxList = boxList.filter((item) => item.l_id !== l_id);
    setBoxList(newBoxList);

    const newDoneList = doneList.filter((item) => item.l_id !== l_id);
    setDoneList(newDoneList);
  }
  //完成事項
  const doneListHandler = (l_id, l_done_state) => {
    //更新該事項完成狀態
    const newBoxList = boxList.map((item) => 
      item.l_id === l_id ? {...item, l_done:l_done_state} : item
    );
    setBoxList(newBoxList);
    
    //更新完成事項清單
    if(l_done_state){
      setDoneList((prevDoneList)=>{
        return [
          ...prevDoneList,
          {l_id:l_id}
        ];
      });
    }else{
      setDoneList(doneList.filter((item) => item.l_id !== l_id));
    }
    
  }
  //排序
  const sortListHandler = (state) =>{
    setIsSort(state);
  }

  return (
    <div className="center_object">
      <div className="board">
        <div style={{padding:"16px"}}>
          <div className="flowLeft" style={{width:"100%"}}>
            {/* banner區 */}
            <div className="l_text normalText">Todo List</div>
            <div className="s_text normalText">Add things to do</div>
            <hr></hr>
            {/* progress bar區 */}
            <Progress todo={boxList.length} done={doneList.length} />
            {/* box區 */}
            <List boxList={boxList} isSort={isSort} onDeleteList={deleteListHandler} onDoneList={doneListHandler}/>
            <hr></hr>
            {/* condition區 */}
            <Condition onSortList={sortListHandler}/>
            {/* control區 */}
            <Control onAddList={addListHandler}/>

          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
