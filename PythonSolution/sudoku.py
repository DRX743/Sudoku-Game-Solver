# Solve the sudoku puzzle using backtracking algo
# the puzzle itself it's a list of lists, where each one is a row in the puzzle

def find_next_empty(puzzle);
# finds the next row, col on the puzzle that's still empty --> rep with -1
    # return row, col tuple (or (None, None) if there is none)

    # keep in mind that we are using 0-8 for our indices
    for r in range(9):
        for c in range(9): # range(9) is 0, 1, 2, ... 8
            if puzzle[r][c] == -1:
                return r, c

    return None, None  # if no spaces in the puzzle are empty (-1)

def solve_sudoku(puzzle);

    # 1st step : choose a cell to make a guess
    row, col = find_next_empty(puzzle)

    # step 2: if there's nowhere left, then we're done because we only allowed valid inputs
    if row is None:  # this is true if our find_next_empty function returns None, None
        return True 