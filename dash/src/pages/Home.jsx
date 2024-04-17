import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

import Header from '../components/Header';
import Employees from '../components/ui/Employees';
import Shift from '../components/ui/Shift';
import TableReact from '../components/ui/Table';
import CardBasicExample from '../components/ui/Card';
//import Portal from '../components/ui/Portal'

const Home = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className='flex  flex-row justify-between'>
      <Header />
      <div className='flex flex-wrap ml-10'>
        <div>
          <div style={{ border: '1px solid #cdcdcd' }}>
          <Shift />
          </div>
          <div style={{ border: '1px solid #cdcdcd' }}>
          <Employees />
          </div>
          
        </div >
        <div style={{ border: '1px solid #cdcdcd' }}>
          <TableReact />
          <CardBasicExample />
        </div>
          
       

      </div>
      

    </div>
    
  )
}

export default Home