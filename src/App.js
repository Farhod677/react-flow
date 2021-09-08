import React, { useState } from 'react';

import ReactFlow, { removeElements, addEdge, Background } from 'react-flow-renderer';

function App() {
  const initialElements = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },
    {
      id: '2',
      data: { label: 'Another Node' },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      data: { label: 'Another Node' },
      position: { x: 300, y: 125 },
    },
    {
      id: '4',
      data: { label: 'Another Node' },
      position: { x: 500, y: 125 },
    },
    {
      id: '5',
      data: { label: 'Another Node' },
      position: { x: 700, y: 125 },
    },
  ]
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));   
  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        deleteKeyCode={46}
      >
        <Background
          variant="dots"
          gap={10}
          size={1}
        />
      </ReactFlow>
    </div>
  );
}

export default App;
