const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      {props.exercises.map((part) => {
        return (
          <p>
            {part.title} {part.exercises1}
          </p>
        );
      })}
    </>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.count}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const exercises = [
    { title: part1, count: exercises1 },
    { title: part2, count: exercises2 },
    { title: part3, count: exercises3 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total count={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
