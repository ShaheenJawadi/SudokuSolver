# SudokuSolver

SudokuSolver is a web application built using Next.js and TypeScript that can solve any given Sudoku puzzle using a backtracking algorithm. The app provides a user-friendly interface where users can input their Sudoku puzzle and let the algorithm solve it.


## Demo
Explore the live version of the app here:  [SudokuSolver](https://shaheenjawadi.github.io/SudokuSolver/)

Full link: https://shaheenjawadi.github.io/SudokuSolver/

## How it Works
The algorithm solves the Sudoku puzzle using the backtracking approach, which involves:

1. __Finding the next empty cell__: The solver searches for an empty cell (denoted by 0).
2. __Trying candidates__: For each empty cell, it tries numbers from 1 to 9 and checks if the number can be placed based on Sudoku's rules (row, column, and 3x3 block constraints).
3. __Backtracking__: If a number doesn't lead to a valid solution, the algorithm backtracks and tries the next candidate.
4. __Recursion__: The process is repeated recursively for all empty cells until the puzzle is solved or determined unsolvable.

## Algorithm Implementation
Here is an overview of the main functions used in the algorithm:
1. `canPlaceNumber`:Checks if a candidate number can be placed at a given row and column by validating the row, column, and 3x3 block constraints.
    - **Input**:  Sudoku grid, row, column, candidate number.
    - **Output**: true if the number can be placed, otherwise false.

2. `findNextEmptyCell`: Finds the next empty cell in the grid (a cell with value `0`).

    - **Input**: Sudoku grid.
    - **Output**: Coordinates of the next empty cell or null if no empty cells are found.

3. `solvePuzzle`: Solves the Sudoku puzzle using backtracking. It fills the grid by recursively trying numbers and backtracking when necessary.

    - **Input**: Sudoku grid.
    - **Output**: `true` if the puzzle is solved, otherwise `false`.


## Getting Started

Follow these steps to run **SudokuSolver** locally on your machine:

 1. Clone the repository:
 
```Bash
git clone https://github.com/ShaheenJawadi/SudokuSolver.git
```
2. Install dependencies:
```Bash
cd SudokuSolver
npm install
``` 
or
```Bash
cd SudokuSolver
yarn
```
3. Start the development server:

```Bash
npm run dev
```
or
```Bash
yarn dev
```
 
4. Open your browser and navigate to http://localhost:3000  to interact with the Sudoku solver.

## How to Use

1. Input a Sudoku puzzle in the grid .
2. Click the "Solve" button to let the algorithm solve the puzzle.



## Contributing

We welcome contributions to enhance SudokuSolver. Feel free to:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## License

This project is licensed under the  [`MIT License`](https://github.com/ShaheenJawadi/SudokuSolver/blob/main/LICENSE).

