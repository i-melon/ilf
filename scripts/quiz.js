document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('openQuiz').addEventListener("click", function () {
        document.getElementById('quiz').style.display="flex"
    })
    function answer1(){
        document.getElementById('quiz').style.display="none"
        document.getElementById('quiz2').style.display="flex"
    }
    function answer2(){
        document.getElementById('quiz2').style.display="none"
        document.getElementById('quiz3').style.display="flex"
    }
    function answer3(){
        document.getElementById('quiz3').style.display="none"
        document.getElementById('quizFinish').style.display="flex"
    }

    document.getElementById('doAnswer').addEventListener("click", function () {
        if (document.getElementById('answer1').value.toUpperCase() === "BAO"){
            document.getElementById('doAnswer').style.backgroundColor = "green"
            setTimeout(answer1, 500)
        }
        else {
            document.getElementById('doAnswer').style.backgroundColor = "red"
        }
        // document.getElementById('quiz').style.display="none"
        // document.getElementById('quiz2').style.display="flex"
    })
    document.getElementById('doAnswer2').addEventListener("click", function () {
        if (document.getElementById('answer2').value.toUpperCase() === "ХРАПУН"){
            document.getElementById('doAnswer2').style.backgroundColor = "green"
            setTimeout(answer2, 500)
        }
        else {
            document.getElementById('doAnswer2').style.backgroundColor = "red"
        }
        // document.getElementById('quiz').style.display="none"
        // document.getElementById('quiz2').style.display="flex"
    })
    document.getElementById('doAnswer3').addEventListener("click", function () {
        if (document.getElementById('answer3').value.toUpperCase() != ""){
            document.getElementById('doAnswer3').style.backgroundColor = "green"
            setTimeout(answer3, 500)
        }
        else {
            document.getElementById('doAnswer3').style.backgroundColor = "red"
        }
        // document.getElementById('quiz').style.display="none"
        // document.getElementById('quiz2').style.display="flex"
    })
})