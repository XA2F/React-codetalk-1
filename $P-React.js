// Please Explain how Usestate is being used in this application and explain what it is returning.

function Child({ setValue }) {
  return (
    <>
      <div>Child</div>
      <button onClick={() => setValue("Parent has been updated!")}>
        Change Parent Value
      </button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));

//Use state is used in the parent component to create a state variable value that corresponds to to the function setValue to update the state. the updated state value is rendered in the parent component.
