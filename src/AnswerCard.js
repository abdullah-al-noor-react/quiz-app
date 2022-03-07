function AnswerCard({answerItem,enableClickHandler,answer,selectedAnswer}){
  
    // const correctClass = answer === 
    const isRightAnswer = enableClickHandler && answer === selectedAnswer
    // const isWrongAnswer = enableClickHandler && answer !== selectedAnswer



    function selectAnswer(ans){

        selectedAnswer(ans)
     
    }
   
    return(
        <>
         <li >
         <button  
         disabled={!enableClickHandler && true} onClick={() => selectAnswer(answerItem )}>{answerItem}</button>
         </li>
        </>
    )
}
export default AnswerCard