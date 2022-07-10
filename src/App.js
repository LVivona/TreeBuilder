import './App.css'
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

            node.hidden = children[node.id].hidden;
          }
  
          return node;
        })
      );
      setEdges((eds) =>
        eds.map((edge) => {
          if (edge.source in children || edge.target in children) {
             
            edge.hidden = typeof children[edge.source] === "undefined" ? children[edge.target].hidden : children[edge.source].hidden
          }
  
          return edge;
        })
      );
    }, [children, setNodes, setEdges]);

  return ( <ReactFlow
    nodes={nodes}
    edges={edges}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    onNodeClick={onNodeClick}
    nodeTypes={types}
    fitView/>)
}

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
