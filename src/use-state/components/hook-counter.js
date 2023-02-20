import {Fragment, useState} from "react";

export const HookCounter = () => {
    
    const [count,setCount] = useState(0);
    const [list,setList] = useState([]);
        
    const handleClick = () => setCount(count + 1);
    
    const handleAddArray = () => {
        setList([...list,{name:'Nicolas'}]);
    };

    const handleUpdateArray = () => {
        const nameToUpdate = 'Nicolas';
        const newName = 'Vladimir';

        const newList = list.map((element)=> {
            if(element.name === nameToUpdate){
                return {...element,name:newName};
            }
            return element;
        });
        setList(newList);
    };
        
    return (
        <Fragment>
            <div>
                <button onClick={handleClick}>+1</button>
                <button onClick={handleAddArray}>Add to Array</button>
                <button onClick={handleUpdateArray}>Add to Array</button>
            </div>
        </Fragment>
    );
    
};