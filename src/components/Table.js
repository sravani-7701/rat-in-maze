import React,{useState} from 'react'
import Cell from './Cell'
import Cellc from './Cellcheese'
import Cellr from './Cellr'
import Cello from './Cello'
 const Table = () => {
   const arr=[
     [0,0,0,1,0,0],
     [1,0,0,0,0,1],
     [0,1,0,1,0,0],
     [1,0,1,0,0,1],
     [1,1,0,0,0,1],
     [0,1,1,0,0,0]
   ];
  var count=0;
 const[ans,setans]=useState([]);
 var i=2;
 var j=5;
  const back=()=>{
    document.getElementById(`${i}-${j}`).style.backgroundColor="blue"

   }
  const[flag,setflag]=useState(true);

    return (
        <div className="total">
          <div className="row">
            <Cellr row={0} col={0}/>
            <Cell row={0} col={1}/>
            <Cell row={0} col={2}/>
            <Cello row={0} col={3}/>
            <Cell row={0} col={4}/>
            <Cell row={0} col={5}/>
            </div>
            <div className="row">
            <Cello row={1} col={0} />
            <Cell row={1} col={1}/>
            <Cell row={1} col={2}/>
            <Cell row={1} col={3}/>
            <Cell row={1} col={4}/>
            <Cello row={1} col={5}/>
            </div>
            <div className="row">
            <Cell row={2} col={0}/>
            <Cello row={2} col={1}/>
            <Cell row={2} col={2}/>
            <Cello row={2} col={3}/>
            <Cell row={2} col={4}/>
            <Cell row={2} col={5}/>
            </div>
            <div className="row">
            <Cello row={3} col={0}/>
            <Cell row={3} col={1}/>
            <Cello row={3} col={2}/>
            <Cell row={3} col={3}/>
            <Cell row={3} col={4}/>
            <Cello row={3} col={5}/>
            </div>
            <div className="row">
            <Cello row={4} col={0}/>
            <Cello row={4} col={1}/>
            <Cell row={4} col={2}/>
            <Cell row={4} col={3}/>
            <Cell row={4} col={4}/>
            <Cello row={4} col={5}/>
            </div>
            <div className="row">
            <Cell row={5} col={0}/>
            <Cello row={5} col={1}/>
            <Cello row={5} col={2}/>
            <Cell row={5} col={3}/>
            <Cell row={5} col={4}/>
            <Cellc row={5} col={5}>
            </Cellc>
            </div>
          
        <button onClick={back}>Find path</button>
        </div>
    )
}
export default Table