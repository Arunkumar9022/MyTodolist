const Task = (props) => {
  return (
    <div className="task" style={{backgroundColor:props.completed?"green":"red"}}>
      <h1>{props.taskname}</h1>
      <button onClick={()=>  props.completetask(props.id)}>Complete</button>
      <button onClick={() => props.deletetask(props.id)}>X</button>
    </div>
  );
};
export default Task;
