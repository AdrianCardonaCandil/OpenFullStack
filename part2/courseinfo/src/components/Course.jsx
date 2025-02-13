const Title = ({title}) => <h2>{title}</h2>

const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key = {part.id} part = {part}/>)}
  </div>
)

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({parts}) => {
  const total = parts.map(part => part.exercises).reduce((x, y) => x + y, 0)
  return <p><b>Number of exercises {total}</b></p>
}

const Course = ({course}) => {
  return (
    <div>
      <Title course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default Course