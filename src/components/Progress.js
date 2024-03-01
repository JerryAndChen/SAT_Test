import './Progress.css';

function Progress({todo, done}){

    if(todo > 0){
        const completed = Math.round((done/todo)*100);  //進度比例
        return(
            <>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div className="ms_text normalText" style={{marginRight:"4px"}}>{completed}%</div>
                    <div className="pgbarContainer">
                        <div className="pgbarFiller" style={{width:`${completed}%`}}></div>
                    </div>
                </div>
            </>
        );
    }else{
        //清單沒有待辦事項
        return null;
    }
    
}

export default Progress