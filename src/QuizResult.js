function QuizResult({score,resetGame}){
    function gameOver(){
        resetGame()
    }
    return(
        <>
        <h4>Your score is {score} </h4>
        <button onClick={gameOver}>Reset Game</button>
        </>
    )
}
export default QuizResult