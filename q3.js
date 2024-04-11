function dfsAllRoutes(graph, source, target) {
    const visited = {};
    const routes = [];

    function dfs(node, path) {
        visited[node] = true;
        path.push(node);

        if (node === target) {
            routes.push([...path]);
        } else {
            for (const neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor, path);
                }
            }
        }

        path.pop();
        visited[node] = false;
    }

    dfs(source, []);
    return routes;
}


const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
};

const sourceNode = "A";
const targetNode = "F";

const allRoutes = dfsAllRoutes(graph, sourceNode, targetNode);
console.log("All possible routes from", sourceNode, "to", targetNode + ":", allRoutes);
