import './Condition.css';

function Condition({onSortList}){

    const onSortHandler = (e) => {
        onSortList(e.target.checked);
    }

    return(
        <div className="s_text normalText" align="right">
            Move done things to end?
            <label>
                <input type="checkbox" name="" id="" className="none_checkbox" onChange={onSortHandler}/>
                <span className="btn-box" align="left">
                    <span className="btn"></span>      
                </span>
            </label>
        </div>
    );
}

export default Condition