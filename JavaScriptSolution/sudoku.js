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


function nextBoards(board){ 
    // Board -> List[Board]
    // finds the first emply square and generates 9 different boards filling in that square with numbers 1...9
    var res = []
    const firstEmpty = findEmptySquare(board)
    if (firstEmpty != undefined){
        const y = firstEmpty[0]
        const x = firstEmpty[1]
        for (var i = 1; i <= 9; i++){
            var newBoard = [...board]
            var row = [...newBoard[y]]
            row[x] = i
            newBoard[y] = row
            res.push(newBoard)
        }
    }
    return res
}

function findEmptySquare(board){
    // Board -> [Int, Int] 
    // (get the i j coordinates for the first empty square)
    for (var i = 0; i < 9; i++){
        for (var j = 0; j < 9; j++){
            if (board[i][j] == null) {
                return [i, j]
            }
        }
    }
}