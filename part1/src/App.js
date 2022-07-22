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
  const totalExercises = props.parts.reduce((acc, obj) => {
    return acc + obj.exercises;
  }, 0);
  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content exercises={parts} />
      <Total count={parts} />
    </div>
  );
};

export default App;
