// Working with Props in React please explain what the props are assigned to and how it works.
function formatDate(date) {
  return date.toLocaleDateString();
}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          sing
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="User Info-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

const root = ReactDOM.createRoot(document.getElementById(" root "));
root.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />
);

//props is a way to pass data from a parent component to a child component. in the code the comment component gets props like the comments date,text,and author, and utilizes them to render the information in the components jsx
