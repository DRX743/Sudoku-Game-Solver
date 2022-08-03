const b = null;

// Main solving function
function solver(board) {
    if (solved(board)) {
        return board //If already solved return that Board
    } else { 
        const possibilities = nextBoards(board) //Otherwise we need to generate all the possibilities
        const validBoards = keepOnlyValid(possibilities) // and proof them
        return searchForSolution(validBoards) // helper function that will use backtracking
    }
}