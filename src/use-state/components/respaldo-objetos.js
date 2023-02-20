import {Fragment, useState} from "react";

export const HookCounter = () => {
    
    const [count,setCount] = useState(0);
    const [objeto,setObjeto] = useState({edad:''});
        
    const handleClick = () => setCount(count + 1);

    const handleAddObjeto = () => {
        setObjeto({...objeto, nombre:'nicolas'});
    };

    const handleUpdateObjeto = (propertyToUpdate = 'edad') => {
        setObjeto({...objeto,[propertyToUpdate]:39});
    };
        
    return (
        <Fragment>
            <div>
                <button onClick={handleClick}>+1</button>
                <button onClick={handleAddObjeto}>Agregar</button>
                <button onClick={handleUpdateObjeto}>Actualizar</button>
            </div>
            <div>

            </div>

        </Fragment>
    );
    
};