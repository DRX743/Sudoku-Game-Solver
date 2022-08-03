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

function searchForSolution(boards){
    // List[Board] -> Board or false
    // finds a valid solution to the sudoku problem
    if (boards.length < 1){
        return false
    }
    else {
        // backtracking search for solution
        var first = boards.shift() //take the 1st element Off
        const tryPath = solve(first)
        if (tryPath != false){
            return tryPath
        }
        else{
            return searchForSolution(boards)
        }
    }
}


function solved(board){
    // Board -> Boolean
    // checks to see if the given puzzle is solved
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (board[i][j] == null){
                return false
            }
        }
    }
    return true
}