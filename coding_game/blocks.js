function solve(width, height, nbBlocks, grid) {
    // Convert grid strings to arrays for easier manipulation
    grid = grid.map(row => row.split(''));

    // Helper function to check if a block can move in a given direction
    function canMove(block, direction) {
        let positions = [];
        let emptyRowOrColumn;

        // Find all positions of the block
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (grid[y][x] === block) {
                    positions.push({x, y});
                }
            }
        }

        // Check if all positions of the block can move in the given direction
        return positions.every(pos => {
            switch (direction) {
                case 'UP':
                    return pos.y === 0 || (grid[pos.y - 1][pos.x] !== 'X' && grid[pos.y - 1][pos.x] !== block);
                case 'RIGHT':
                    return pos.x === width - 1 || (grid[pos.y][pos.x + 1] !== 'X' && grid[pos.y][pos.x + 1] !== block);
                case 'DOWN':
                    return pos.y === height - 1 || (grid[pos.y + 1][pos.x] !== 'X' && grid[pos.y + 1][pos.x] !== block);
                case 'LEFT':
                    return pos.x === 0 || (grid[pos.y][pos.x - 1] !== 'X' && grid[pos.y][pos.x - 1] !== block);
            }
        });
    }

    // Iterate through the grid to find blocks and check their movability
    for (let block = 0; block < nbBlocks; block++) {
        const blockStr = block.toString();
        const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
        for (let direction of directions) {
            if (canMove(blockStr, direction)) {
                return `${blockStr} ${direction}`;
            }
        }
    }

    // Return a message if no move is possible
    return "No move possible";
}