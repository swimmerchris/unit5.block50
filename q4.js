function dijkstra(graph, startNode, endNode) {
    const distances = {};
    const visited = {};
    const predecessors = {};
    const priorityQueue = new PriorityQueue();

    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    priorityQueue.enqueue(startNode, 0);

    while (!priorityQueue.isEmpty()) {
        const currentNode = priorityQueue.dequeue().element;
        const currentDistance = distances[currentNode];
        visited[currentNode] = true;

        for (const neighbor in graph[currentNode]) {
            if (!visited[neighbor]) {
                const edgeWeight = graph[currentNode][neighbor];
                const newDistance = currentDistance + edgeWeight;

                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    predecessors[neighbor] = currentNode;
                    priorityQueue.enqueue(neighbor, newDistance);
                }
            }
        }
    }

    const shortestPath = [endNode];
    let predecessor = predecessors[endNode];
    while (predecessor) {
        shortestPath.unshift(predecessor);
        predecessor = predecessors[predecessor];
    }

    return {
        path: shortestPath,
        distance: distances[endNode]
    };
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const graph = {
    A: { B: 5, C: 2 },
    B: { D: 4, E: 2 },
    C: { B: 8, E: 7 },
    D: { E: 6, F: 3 },
    E: { F: 1 },
    F: {}
};

const startNode = "A";
const endNode = "F";

const result = dijkstra(graph, startNode, endNode);
console.log("Shortest path:", result.path.join(" -> "), "and Distance:", result.distance);
