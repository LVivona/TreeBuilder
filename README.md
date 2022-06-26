
# README Tree Builder

### Table of Contents
* [How To Run](https://github.com/LVivona/Libp2p-pubsub-gui#how-to-run)

## How To Run
  This is a simple npx create-react-app so ``npm start`` will run the code; but if you do clone then please **NOTE** it's a older version of react so there is vulnerability so do not use this model for final development. I do just suggest copying the tree.js located **src/tools/build/\*\*.js** as that file does more of the heavy lifting in both creating the information for React-flow to render. 
 
## Data-Format
```
 { value : "root",
    children : [
      {
        value : "first child",
        children :[
          {
            value : "first child of first child",
            children : []
          },
          {
            value : "second child of first child",
            children : [
              {
                value : "first child of first's, second child",
                children : []
              },
              {
                value : "second child of first's, second child",
                children : []
              }
            ]
          },
          {
            value : "third child of first child",
            children : [{
              value : "first child of first's, third child",
              children : []
            }]
          }
        ],
      },
      {
        value : "second child",
        children : [
          {
            value : "first child of second child",
            children : []
          },
          {
            value : "second child of second child",
            children : [
              {
                value : "first child of second's, second child",
                children : []
              }
            ]
          },
          {
            value : "third child of second child",
            children : [
              {
                value : "first child of second's, third child",
                children : []
              }
            ]
          }
        ]
      }

    ] }
```
## Converted Data

### Node
```
[
  { id       : ...,
    type     : ...,
    data     : { ..., ... },
    position : { x : ..., y : ...},
  },
  ...
]
```

### Edge
```
[
 {  id       : ...,
    source   : parent.id,
    target   : child.id,
    animated : true,
    style    : { ... } 
  },
]
```

You can really put any information withing **value** in the tree you can put a whole new object it's really up to you, and with that you can access that info custom node with React-Flow given if you need to.


## External Library
* React Flow [https://reactflow.dev/]
