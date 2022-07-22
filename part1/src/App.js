const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = ({ title, exerciseCount }) => {
  return (
    <p>
      {title} {exerciseCount}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      {props.exercises.map((part) => {
        return <Part title={part.name} exerciseCount={part.exercises} />;
      })}
    </>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.count}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  const exercises = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content exercises={exercises} />
      <Total count={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
};

export default App;
