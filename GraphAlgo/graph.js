// Data

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];



// Matrix representation takes a lot of space and it is inefficient to iterate over and search through.


// --> Therefore, it is recommended to use an Adjacency List

// Adjacency List can be implemented as key-value pairs.

// The graph
const adjacencyList = new Map();
// for algorithm problem in JS, Map has a better option than a regular object. 

// We can also use object but not for now and not recommended
// const adjacencyList = {};


// NOTE: The Map is our graph.

// Add Node to the map
function addNode(airport){
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination); 

    // Inverse of above by getting the destination and pushing the origin.
    adjacencyList.get(destination).push(origin);
}



// Create the Graph and use the above API.
airports.forEach(addNode);
routes.forEach(route => addEdge(...route))  // REST syntax to destructure it.


console.log(adjacencyList);




