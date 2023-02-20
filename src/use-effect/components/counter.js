import React,{useEffect, useState} from 'react';

export const Counter = () => {

  const [count,setCount] = useState(0);

  // useEffect(()=> {
  //   console.log('Se ejecuta en cada render');
  //   console.log('incluso en el primero');
  // });

  useEffect(()=> {
    console.log('Valor de count', count);
  },[count]);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <p>Clicks: {count}</p>
      <button onClick={handleClick}>Clickeame</button>
    </>
  );
};

