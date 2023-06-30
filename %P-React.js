//Please explain the relationship of a Parent component and a child component and why we use this in React?

function Child() {
  return <div>This is children content</div>;
}

function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}

function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

//the parent component acts as a container for the child component.
