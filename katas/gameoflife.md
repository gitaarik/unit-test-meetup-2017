# The Game of Life Kata.

The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells.
Each cell is in one of two possible states, alive or dead.  
 
Every cell interacts with its eight neighbours, 
which are the cells that are horizontally, vertically, or diagonally adjacent. 
 
At each step in time, the following transitions occur:

```
  Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  Any live cell with two or three live neighbours lives on to the next generation.
  Any live cell with more than three live neighbour sdies, as if by overcrowding.
  Any dead cell with exactly three live neighbours be- comes a live cell, as if by reproduction.
```

At the start of the game the grid seeded with some alive cell at various points in the grid.
The next generation is created by applying the above rules simultaneously to every cell in the grid.

## Goal of this kata

This aim of this Kata is to write some code that calculates the following generations, given a starting “seed” position.
