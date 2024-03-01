import './List.css';

function List({boxList, isSort, onDeleteList, onDoneList}){

    const deleteHandler = (del_id) => {
        onDeleteList(del_id);
    }
    const doneHandler = (e) => {
        const state = e.target.checked ? true : false;
        onDoneList(e.target.id, state);
    }

    //待辦事項成員
    const boxItems = boxList.length === 0 ? (
            //清單為空
            <div className="m_text normalText">Nothing to do</div>
        ) : (
            //有待辦事項
            isSort ? (
                //排序
                boxList
                .sort((a,b) => a.l_done - b.l_done || a.l_time.localeCompare(b.l_time))
                .map((box)=>
                    <div key={box.l_id} className="box">
                        <input type="checkbox" className="h_center" id={box.l_id} onChange={doneHandler}/>
                        <span className={box.l_done ? "normalText done" : "normalText" }>{box.l_title}</span>
                        <input type="button" className="cross" value="✖" onClick={() => deleteHandler(box.l_id)}/>
                    </div>
                )
            ) : (
                //未排序
                boxList
                .sort((a,b) => a.l_time.localeCompare(b.l_time))
                .map((box)=>
                    <div key={box.l_id} className="box">
                        <input type="checkbox" className="h_center" id={box.l_id} onChange={doneHandler}/>
                        <span className={box.l_done ? "normalText done" : "normalText" }>{box.l_title}</span>
                        <input type="button" className="cross" value="✖" onClick={() => deleteHandler(box.l_id)}/>
                    </div>
                )
            )
        );

    return(
        <div className="boxContainer" id="boxContainer">
            {boxItems}
        </div>
    );
}

export default List