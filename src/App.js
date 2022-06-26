import './App.css'
import { TreeRender, root } from "./tools/tree/tree";
import { types } from './tools/customNode';
//import { dataTree } from './data/dataflow' --Tester--
import ReactFlow, { applyNodeChanges, applyEdgeChanges } from 'react-flow-renderer'
import { useState, useCallback } from 'react';



function App() {
  let rendered = new TreeRender(root)
  const data = rendered.flatten(rendered.nodeRoot)
  const [nodes, setNodes] = useState(data.nodes);
  const [edges, setEdges] = useState(data.edges);
  console.log(nodes)
  
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes,eds)), [setEdges])



  return (
    <div className="App">
      <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={types}
      fitView/>
    </div>
  );
}

export default App;