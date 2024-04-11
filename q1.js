// class Edge {
//     constructor(start, end, weight) {
//         this.start = start;
//         this.end = end;
//         this.weight = weight;
//     }
// }

// function pAlgo(edges, vertices) {

// }
// Create a class
class Edge {
    constructor(source, destination, weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}

// Define a function to perform Prim's algorithm
function primsAlgorithm(edges, numVertices) {
    const visited = new Array(numVertices).fill(false);
    const key = new Array(numVertices).fill(Infinity);
    const parent = new Array(numVertices).fill(null);

    key[0] = 0;

    for (let count = 0; count < numVertices - 1; count++) {
        let minKey = Infinity;
        let minIndex = -1;
        console.log("Count Split", count)
        for (let v = 0; v < numVertices; v++) {
            console.log("prior to if", v, key[v])
            if (!visited[v] && key[v] < minKey) {
                console.log("minkey prior", minKey, v, visited[v], minIndex)
                minKey = key[v];
                minIndex = v;
                console.log("minIndex & minkey", minIndex, minKey)
            }
        }

        visited[minIndex] = true;
        console.log("visted array:", visited)
        for (let i = 0; i < edges.length; i++) {
            const { source, destination, weight } = edges[i];
            // console.log(edges[i])
            if (
                source === minIndex &&
                !visited[destination] &&
                weight < key[destination]
            ) {
                parent[destination] = minIndex;
                key[destination] = weight;

            }
            // console.log("parent", parent)
            // console.log("key array", key)
        }
    }
    console.log(parent)
    let totalCost = 0;
    for (let i = 1; i < numVertices; i++) {
        totalCost += key[i];
    }

    return totalCost;
}

// Edges and their respective weights
const edges = [
    new Edge(0, 1, 4),
    new Edge(0, 7, 8),
    new Edge(1, 2, 8),
    new Edge(1, 7, 11),
    new Edge(2, 3, 7),
    new Edge(2, 8, 2),
    new Edge(2, 5, 4),
    new Edge(3, 4, 9),
    new Edge(3, 5, 14),
    new Edge(4, 5, 10),
    new Edge(5, 6, 2),
    new Edge(6, 7, 1),
    new Edge(6, 8, 6),
    new Edge(7, 8, 7),
];

const numVertices = 9;

const minimumCost = primsAlgorithm(edges, numVertices);
console.log("Minimum cost to connect all rooms:", minimumCost);
