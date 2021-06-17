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
  
 
 function isSafe(arr, x, y) {
  const m = arr.length;
  const n=arr[0].length;
  if (x >= 0 && x < m && y >= 0 && y < n && arr[x][y] === 0) {
    return true;
  }
  return false;
}
function solveMazeUtil(maze, x, y, sol) {
  const m = maze.length;
  const n=maze[0].length;
  if (x === m- 1 && y === n - 1) {
    sol[x][y] = 1;
    return true;
  }
  if (isSafe(maze, x, y)) {
    sol[x][y] = 1;
    if (solveMazeUtil(maze, x + 1, y, sol)) return true;
    if (solveMazeUtil(maze, x, y + 1, sol)) return true;
    sol[x][y] = 0;
    return false;
  }
  return false;
}


  const back=()=>{
    const m=arr.length;
    const n=arr[0].length;
  
      var sol = new Array(m);
      let idx = 0;
      for (idx = 0; idx < m; idx++) {
        sol[idx] = new Array(n).fill(0);
      }
    if(solveMazeUtil(arr,0,0,sol)){
      for( let i=0;i<m;i++){
        for(let j=0;j<n;j++){
          if(sol[i][j]===1){
            document.getElementById(`${i}-${j}`).style.backgroundColor="green";

          }
  
        }
      }
    }
  
   }


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
          
        <button onClick={back} className="btn">Find path</button>
        </div>
    )
}
export default Table