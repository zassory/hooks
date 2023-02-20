import React from 'react';
//import { Counter } from './counter';
import { ListData } from './list-data';
import { ListDataHook } from './list-data-hook';

export const UseEffectPage = () => (
  <>
    <h2>Hook useEffect</h2>
    <ListData />
    <h2>Ejemplo con useEffect</h2>
    <ListDataHook />
  </>  
);
