import React from "react";
import { useState } from "react";
import Box from "./Box";

function getWinner(grid){
    const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let winnerLine of winnerLines) {
        const [a, b, c] = winnerLine;
        if(grid[a] && (grid[a] === grid[b]) && (grid[a] === grid[c])){
            return grid[a];
        }
    }
    return null;

}


const initialGrid = [null, null, null, null, null, null, null, null, null]

export default function Grid(){

    const [grid, setGrid] = useState(initialGrid);
    const [currentMove, setCurrentMove] = useState('O');

    const remainingCells = grid.reduce((count, value) => {
        if(!value) {
            return count + 1;
        } else {
            return count;
        }
    },0);

    const winner = getWinner(grid);

    const captionText = winner ? `Winner is ${winner}` : (
                        remainingCells === 0 ? 'Draw' :
                        `Current Move : ${currentMove}`)


    const handleMove = (position) => {
        const isPositonFilled = Boolean(grid[position]);
        const isGameEnd = Boolean(winner)
        if(isPositonFilled || isGameEnd) {
            return;
        }
        const newGrid = grid.map((value, index) => {
            if(index === position) {
                return currentMove;
            }
            return value;
        });

        const nextMove = currentMove === 'O' ? 'X' : 'O';
        
        setGrid(newGrid);
        setCurrentMove(nextMove);

    }


    return (
        <table className="grid">
            <caption> {captionText} </caption>
            <tr>
                <td><Box value={grid[0]} onClick={()=>{handleMove(0)}}/></td>
                <td><Box value={grid[1]} onClick={()=>{handleMove(1)}}/></td>
                <td><Box value={grid[2]} onClick={()=>{handleMove(2)}}/></td>

            </tr>
            <tr>
                <td><Box value={grid[3]} onClick={()=>{handleMove(3)}}/></td>
                <td><Box value={grid[4]} onClick={()=>{handleMove(4)}}/></td>
                <td><Box value={grid[5]} onClick={()=>{handleMove(5)}}/></td>

            </tr>
            <tr>
                <td><Box value={grid[6]} onClick={()=>{handleMove(6)}}/></td>
                <td><Box value={grid[7]} onClick={()=>{handleMove(7)}}/></td>
                <td><Box value={grid[8]} onClick={()=>{handleMove(8)}}/></td>

            </tr>
        </table>
    )
}