// function bfsShortestPath(graph, source, target) {
//     const queue = [source];
//     const visited = new Set();
//     const previous = {};

//     while (queue.length > 0) {
//         const current = queue.shift();
//         visited.add(current);

//         if (current === target) {
//             return reconstructPath(previous, source, target);
//         }

//         for (const neighbor of graph[current]) {
//             if (!visited.has(neighbor)) {
//                 queue.push(neighbor);
//                 previous[neighbor] = current;
//             }
//         }
//     }

//     return null;
// }

// function reconstructPath(previous, source, target) {
//     const path = [];
//     let current = target;
//     while (current !== source) {
//         path.unshift(current);
//         current = previous[current];
//     }
//     path.unshift(source);
//     return path;
// }

// const graph = {
//     A: ['B', 'C'],
//     B: ['A', 'D', 'E'],
//     C: ['A', 'F'],
//     D: ['B'],
//     E: ['B', 'F'],
//     F: ['C', 'E']
// };


// const source = 'A';
// const target = 'F';

// const shortestPath = bfsShortestPath(graph, source, target);

// if (shortestPath) {
//     console.log(`Shortest path from ${source} to ${target}:`, shortestPath);
// } else {
//     console.log(`No path found from ${source} to ${target}.`);
// }


function bfsShortestPath(graph, source, target) {
    // Queue to store nodes to be visited
    const queue = [];
    queue.push([source]);

    // Visited nodes to keep track of visited locations
    const visited = new Set();
    visited.add(source);

    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];

        // If the current node is the target, return the path
        if (current === target) {
            return path;
        }

        // Explore neighbors of the current node
        const neighbors = graph[current];
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }

    // If no path is found, return null
    return null;
}

// Example usage:
const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
};

const source = "A";
const target = "F";

const shortestPath = bfsShortestPath(graph, source, target);
console.log(`Shortest path from ${source} to ${target}:`, shortestPath);