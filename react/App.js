const heading = React.createElement(
  "h1",
  { id: "heading"},
  "Hello world from React!"
);

const heading1 = React.createElement(
    "h1",
    {
      id: "parent",
      style: {
        background:"red",
      },
      className:"title"
    },
    "heading1"
  );
  const heading2 = React.createElement(
    "h1",
    {
      id: "child",
    },
    "heading2"
  );
  
  // Create nested React Elements
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1, heading2]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);