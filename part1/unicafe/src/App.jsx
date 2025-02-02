import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const Button = ({handler, name}) => <button onClick={handler}>{name}</button>

const Statistics = ({title, nofeedback, good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100
  if (total) {
    return (
      <div>
        <h2>{title}</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    )
  } else {
    return <p>{nofeedback}</p>
  }
} 

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Event handler for positive feedback
  const handleGoodFeedback = () => setGood(good + 1)
  // Event handler for neutral feedback
  const handleNeutralFeedback = () => setNeutral(neutral + 1)
  // Event handler for negative feedback
  const handleBadFeedback = () => setBad(bad + 1)

  return (
    <div>
      <Header title='give feedback'></Header>
      <Button handler={handleGoodFeedback} name='good' ></Button>
      <Button handler={handleNeutralFeedback} name='neutral'></Button>
      <Button handler={handleBadFeedback} name='bad'></Button>
      <Statistics title='statistics'
        nofeedback='No feedback given'
        good={good} 
        neutral={neutral} 
        bad={bad}>
      </Statistics>
    </div>
  )
}

export default App
