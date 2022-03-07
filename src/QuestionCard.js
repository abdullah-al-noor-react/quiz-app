import { useState } from "react";
import AnswerCard from './AnswerCard'

const QuestionCard = ({selectedQuestion:{question,answers,answer,index},userSelectAnswer,goNextAnswer}) => {
    const [enableClickHandler,setEnableClickHandler]= useState(true)
    // const [selectedAnswer,setSelectedAnswer]= useState(true)

    
    // const [wrongAnswer,setWrongAnswer]= useState(false)
    // const correct = answer ==
    function selectedAnswer(ans){
       
        userSelectAnswer(ans)
    
        setEnableClickHandler(false)
    }
    function nextAnswer(){
        // console.log(index);
        goNextAnswer()
        setEnableClickHandler(true)
    }
    return(
        <>
        <h4>{question}</h4>
         <ul>
             {answers.map(function(answerItem,key){
                 return (<AnswerCard  key={key}  selectedAnswer={selectedAnswer} answerItem={answerItem} enableClickHandler={enableClickHandler} answer={answer}  />)
             })}
         </ul>
         {!enableClickHandler && (
             <>
                <h4>Corrent Answer Is : {answer} </h4>
             </>
         )}
         <button onClick={nextAnswer} disabled={enableClickHandler} >Next Question</button>
        </>
    )
}

export default QuestionCard