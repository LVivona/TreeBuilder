import './App.css'
<<<<<<< HEAD

import { TreeRender, root } from "./tools/build/tree";
import { types } from './tools/customNode';
import { x } from './data/dataflow' //--Tester--
import ReactFlow, {Background, ReactFlowProvider, useNodesState, useEdgesState } from 'react-flow-renderer'
import React, { useState, useEffect } from 'react';
import CustomLine, { edgeTypes } from './tools/CustomLine';
import children_id from './tools/helpers';

function Flow() {
  let rendered = new TreeRender(x)
  const data = rendered.flatten(rendered.nodeRoot)
  const [nodes, setNodes, onNodesChange] = useNodesState(data.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(data.edges);
  const [children, setChildren] = useState({})
  const onNodeClick = (event, node) => {
    setChildren(children_id(node)) 
    }

    useEffect(() => { 
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id in children) {

=======
import { TreeRender } from "./tools/build/tree";
import { types } from './tools/customNode';
import { dataTree } from './data/dataflow' //--Tester--
import ReactFlow, {ReactFlowProvider, useNodesState, useEdgesState } from 'react-flow-renderer'
import { useState, useEffect } from 'react';

function children_id(start) {
  let q = [start]
  let e = [start]
  let id = {}
  
  while (q.length !== 0){
    let v = q.shift()

    
    for (let i=0; i < v.data.children.length; i++){
      if (!e.includes(v.data.children[i])){
        e.push(v.data.children[i])
        q.push(v.data.children[i])
        var current_depth = v.id in id ? id[v.id].depth + 1 : 1
        id[v.data.children[i].id] = {"hidden" : v.data.children[i].hidden, "depth" : current_depth  }  
        v.data.children[i].hidden = v.data.children[i].hidden ? false : true
      }
    }
 
  }
  const state = every(id, false, 1) ? false : true
  Object.keys(id).forEach(key => id[key].hidden = state)

  return id

}

function every(dic, bool, depth){
  for(var key in dic){
    if (dic[key].depth === depth && dic[key].hidden !== bool){
      return false
    }
  }
  return true
}

function Flow() {
  let rendered = new TreeRender(dataTree[0])
  const data = rendered.flatten(rendered.nodeRoot)
  const [nodes, setNodes, onNodesChange] = useNodesState(data.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(data.edges);
  const [children, setChildren] = useState({})
  const onNodeClick = (event, node) => {
      setChildren(children_id(node))
    }

    useEffect(() => {        
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id in children) {

>>>>>>> e0d5f2220ee34dda974b48253dd1ed2a7e138d93
            node.hidden = children[node.id].hidden;
          }
  
          return node;
        })
      );
      setEdges((eds) =>
        eds.map((edge) => {
          if (edge.source in children || edge.target in children) {
<<<<<<< HEAD
            edge.hidden = children[edge.target].hidden 
=======
             
            edge.hidden = typeof children[edge.source] === "undefined" ? children[edge.target].hidden : children[edge.source].hidden
>>>>>>> e0d5f2220ee34dda974b48253dd1ed2a7e138d93
          }
  
          return edge;
        })
      );
    }, [children, setNodes, setEdges]);

<<<<<<< HEAD

  //const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);


  return ( <ReactFlow
    nodes={nodes}
    edges={edges}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    onNodeClick={onNodeClick}
    connectionLineComponent={CustomLine}
    nodeTypes={types}
    edgeTypes={edgeTypes}
    fitView>
      <Background className=' bg-zinc-800' variant="dots" size={2} />
    </ReactFlow>)
}

=======
  return ( <ReactFlow
    nodes={nodes}
    edges={edges}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    onNodeClick={onNodeClick}
    nodeTypes={types}
    fitView/>)
}

>>>>>>> e0d5f2220ee34dda974b48253dd1ed2a7e138d93
function App() {


  return (
    <div className="App">
      <ReactFlowProvider>
      <Flow/>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
