import {Fragment, useState} from "react";

export const HookCounter = () => {
    
    const [count,setCount] = useState(0);
    const [list,setList] = useState(['protoman']);
    

    const addObj = () => {
        setList([...list,'megaman']);        
    };

    //Actualizar un valor
    const updateObj = () => {
        const updateIndex = 1;
        const newList = list.map((element,index) => {
            if(index === updateIndex){
                return 'bassman';
            }
            return element;
        });
        setList(newList);
    };

    //Eliminar
    const deleteObj = () => {
        const indexToRemove = 1;
        const listCleaned = list.filter((element,index) => {
            return index !== indexToRemove;
        });
        setList(listCleaned);
    };    

        
    return (
        <Fragment>
            <div>
                <button onClick={addObj}>Agregar</button>
                <button onClick={updateObj}>Actualizar</button>
                <button onClick={deleteObj}>Eliminar</button>
                <h1>{JSON.stringify(list)}</h1>
            </div>
            <div>

            </div>

        </Fragment>
    );
    
};