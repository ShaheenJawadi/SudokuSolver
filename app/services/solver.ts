import { SudokuBoardTpe, SudokuCellContent } from "../types";

export function canPlaceNumber(
  sudokuGrid: SudokuBoardTpe, 
  row: number,
  column: number,
  candidateNumber: number 
): boolean {
  // Check row
  for (let i = 0; i < 9; i++) {

    if (sudokuGrid[row][i] === candidateNumber) {
      return false;
    }
  }

  // Check column
  for (let i = 0; i < 9; i++) {
    if (sudokuGrid[i][column] === candidateNumber) {

      return false;

    }
  }

  // Check  block
  const blockStartRow = 3 * Math.floor(row / 3);
  const blockStartColumn = 3 * Math.floor(column / 3);
  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
      if (
        sudokuGrid[blockStartRow + i][blockStartColumn + j] === candidateNumber
      ) {

        return false;
      }


    }
  }

  return true;
}

function findNextEmptyCell(
  sudokuGrid: SudokuBoardTpe
): [number, number] | null {

  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
    if (sudokuGrid[row][column] === 0) {
        return [row, column]; 
      }
    }
  }
  return null; //  no empty cells found
}

export function solvePuzzle(sudokuGrid: SudokuBoardTpe): boolean {
  const emptyCell = findNextEmptyCell(sudokuGrid);

  if (!emptyCell) {
    // No empty cells left, puzzle solved
    return true;
  }

  const [row, column] = emptyCell;

  for (let numberToTry = 1; numberToTry <= 9; numberToTry++) {
    if (canPlaceNumber(sudokuGrid, row, column, numberToTry)) {
      // Place the number if it's valid
      sudokuGrid[row][column] = numberToTry as SudokuCellContent;

      // Recursively attempt to solve the rest of the puzzle
      if (solvePuzzle(sudokuGrid)) {
        return true;
      }

      // Backtrack if the placement doesn't lead to a solution
      sudokuGrid[row][column] = 0;
    }
  }

  // No valid number found
  return false;
}
