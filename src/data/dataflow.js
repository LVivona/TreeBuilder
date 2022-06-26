
export const dataTree = [
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
]

export const initialNodes = [
    {
      id: '1',
      type: 'custom',
      data: { text: "Bob Module",
              parentDiv : "h-40 w-44 bg-blue-500 rounded-md border-2 text-gray-500 border-gray-500",
              style : {"backgroundColor" : "#fdf0f0"},
              target : "left",
              source : "left"  
            },
      position: { x: 250, y:25 },

    },
  
    {
      id: '2',
      type: 'custom',
      data: { text: "Alice Module",
              parentDiv : "h-40 w-44 bg-blue-500 rounded-md border-2 text-gray-500 border-gray-500",
              style : {"backgroundColor" : "#def9f5"},
              target : "top",
              source : "bottom"  
            },
      position: { x: 50, y: 225 },

    },
    {
      id: '3',
      type: 'custom',
      data: { text: "Christine Module",
              parentDiv : "h-40 w-44 bg-blue-500 rounded-md border-2 text-gray-500 border-gray-500",
              style : {"backgroundColor" : "#fcfbcf"},
              target : "left",
              source : "left"
            },
      position: { x: 250, y: 425 },

    },
  ];
  
export const initialEdges = [
   
  ];
  