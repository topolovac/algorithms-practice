function countPaths(shops, roads) {
    let graph = buildGraph(shops, roads);
    let count = 0;

    for (let i = 0; i < shops.length; i++) {
        count += backtrack(graph, i, new Set(), new Set([shops[i]]));
    }

    return count;
}

function buildGraph(shops, roads) {
    let graph = new Map();
    for (let i = 0; i < shops.length; i++) {
        graph.set(i, []);
    }

    for (let [src, dest] of roads) {
        graph.get(src).push(dest);
        graph.get(dest).push(src);
    }

    return graph;
}

function backtrack(graph, node, visited, types) {
    if (visited.size === 4) return 1; // Found a valid path
    if (visited.has(node)) return 0; // Already visited this node

    let count = 0;
    visited.add(node);

    for (let neighbor of graph.get(node)) {
        if (!types.has(neighbor)) {
            count += backtrack(graph, neighbor, new Set(visited), new Set(types.add(neighbor)));
        }
    }

    return count;
}