import { useState } from "react";

const QuestionCardB = ({selectedQuestion:{question,answers,answer,index},userSelectAnswer,goNextAnswer}) => {
  
    return(
        <>
        <h4>{question}</h4>
         <ul>
             {answers.map(function(item,key){
                 return (<li  key={key}>
                     <button  disabled={!enableClickHandler && true} onClick={() => selectAnswer(item )}>{item}</button>
                     </li>)
             })}
         </ul>
         <button onClick={nextAnswer} disabled={enableClickHandler} >Next Question</button>
        </>
    )
}

export default QuestionCard