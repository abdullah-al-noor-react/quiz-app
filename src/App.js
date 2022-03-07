
import {useState} from 'react'
import QuestionCard from './QuestionCard'
import QuizResult from './QuizResult'

import shuffle from './utils'

function App() {
 
  const [quizes, setQuizes] = useState(null)
  const [startGame, setStartGame] = useState(null)
  const [endGame, setEndGame] = useState(null)
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [loaded,setLoaded] = useState(false)
  const [score,setScore] = useState(0)


  function formatQuestion(question,index=0){
    const currentQuestion = {
      index:index,
      question:question.question,
      answers:shuffle(question),
      answer:question.correct_answer,
    }
    return currentQuestion
  }

  async function  StartQuiz(){

    try {
      let res = await fetch('https://opentdb.com/api.php?amount=2&category=27&difficulty=easy&type=multiple')
      res = await res.json()
      console.log(res.results);
      setQuizes(res.results)
      setStartGame(true)
      let singelQueston = res.results[0];
      // const currentQuestion = {
      //   question:singelQueston.question,
      //   answer:singelQueston.correct_answer,
      //   answers:shuffle(singelQueston),
      // }
      // let totalQue = Number(res.results.length);
      // console.log(totalQue);
      // setTotalQuestion(totalQue)
      // // console.log(res.results.length);
      // console.log(totalQuestion);
      setSelectedQuestion(formatQuestion(singelQueston))
      setLoaded(true)


    } catch (error) {
      console.log(`Error : ${error}`);
    }

  }
  function userSelectAnswer(answer){
    // console.log(quizes.length);
    // console.log(selectedQuestion.index);
    // if(Number(quizes.length) === Number(selectedQuestion.index + 1)){
    //   setEndGame(true)
    //   // setStartGame(null)
    //   return
    // }
    // return
    if(selectedQuestion.answer === answer){
      setScore(score+1)
      console.log(`score: ${score}`);
      console.log(`user Ans: ${answer}`);
      console.log(`corrent Ans: ${selectedQuestion.answer}`);
    }
  }
  function resetGame(){
    setEndGame(false)
    setStartGame(null)
   
  }
  function goNextAnswer(){
    console.log(quizes.length);
    console.log(selectedQuestion.index);
    if(Number(quizes.length) === Number(selectedQuestion.index + 1)){
      setEndGame(true)
      // setStartGame(null)
      return
    }
    const singelQueston = quizes[selectedQuestion.index +1]
    setSelectedQuestion(formatQuestion(singelQueston,selectedQuestion.index+1))
    // setLoaded(true)
  }

  return (
    <div className="App">
      {endGame && <QuizResult score={score} resetGame={resetGame} /> }
      {startGame && loaded && !endGame && <QuestionCard goNextAnswer={goNextAnswer} userSelectAnswer={userSelectAnswer}  selectedQuestion={selectedQuestion} />}
     {!startGame && <button onClick={StartQuiz}>Start Game</button>}
    </div>
  );
}

export default App;
