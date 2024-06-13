const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipW7EZa-Tv3L7yeES_3vco_Gtxvmz8aEPW2o3fg3-dEjZuv0XJXGZ44WFKbQokoRIkLVDhri3EoDPNDfXa1qAbLb0Z8JNql5cWE6JqIkVBOrKPIQHBnoSAedDBPr4Gvo6I7I-01mnEWT8of6zvj-bCSJzCLCrLvRg8r-P3e5Ha2PT_75nwa_Qy3-lS1abA/s872/KakaoTalk_20240531_152346278_08.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4GmoZBLHYr9Tplk45GBuRF3E2N3QgKIgijuC9HlhP0LAO8nTI9ATydgU6dxlNLLwPCR8uiZbHoV-TbjBeE8b1nZXyD9apH_7OR3kfgIi569TZpPrvI1z4vpi5foYwKU1V3xcjtgzUkdhrhayZlrdo16dfzM8gSxDDuBFImlOpHLJVMwp2rnQLzvg6GCJV/s586/KakaoTalk_20240614_012741627.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikYdUXMi9tVfwNNtI5Lu65_yrPUv2cgjmpu0uSyd-dq-7rMu7c2c2km2e7_DAlOcRnTaZzOAVu3vzvvav-xCpaxOGiHEIQuBX-jtF2iesKA-35sc1Wfs0vFrkaWQIc68dTpfvfExJFs0DU3i9h-JS1ZsoFcDUHh-xbeAxPcS5IaGo24z89H9_gwa7UVT1S/s810/KakaoTalk_20240531_152346278_09.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5YZ5L1pMOntRNhdpmJIhw1j8_-8X_CnfmHVmjbw3VODS636v2KoBGnFrqhjj4jkGmyPy8RcLMVO-2rFAzRqYwM18vJdaEEDV6s-JFMAJpgBODFF2NjgrgbV3R3Zc2AHYfkRlRajUFBvYNszLc9iX2X8C4ANkc_qYmdH2LxXlEvoOPR4LVQ-eoptGvpHFa/s534/KakaoTalk_20240614_012741627_01.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg972csDwRk_ZPv6ksAATzOZwhGnaC0LzwDrMXC2Ve3GfZ_Ag-INtYdxdr4pt7ZRnxF0d_CI2UtPZSSsvjJe72rjsnDHz30gK61I_MW2QMGruQLKmtnFn87RvspOYD9YXkJSR_XoZ8U2bz5hIM7Jg_Wg-xoP1cM_tzRezRuUKnOK5kD7wbLSFWPoHT9faUT/s799/KakaoTalk_20240531_152346278_10.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilV8G5vPunRCzwPGv7aoVet-rR0jAIdPww3BY1p5wJi_X8og9MfJuT21JeXySfFdgqifHpQeBSngj3U9vFE3_ObtAEzbqGM8D3k0qM09UeZpKSf1XkgGzroT4yerkcmiLVyElBEoK3LV5jo7tkL8nGBhXIH5FbWe5P1Eh4qGAtHE0VUy6YBt30zu4AWU0P/s579/KakaoTalk_20240614_012741627_02.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSDiiiMW8xKvxjazceq9R8B0xXBel_1BfSPupahTOT3gRLeCfFgjk0ZyCKy_ZgQfS07RdUpCiAnd3ME6boF7CxQgwQdWOfR-r5QQNMQDHpgJRM7BPeYGsEB-ydsKn_fG3W7RuP8dZ00vv6JfTlP5KJNych3XjJCz2-cLxwwTOU7fzlkpNBFwLERyMIUl4r/s784/KakaoTalk_20240531_152346278_11.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEeBXA84cOE-05TOxRCv7XVw4mPq9vs8lNovoJYBbKSo7dO3ptnr8vXWUmN9uRVcxKHbnzjkANs9OXrcWWVjePpMBF4fYPZwAmYeW6_FkQ5wcliUbabxYJTUE4xX19mdSod50f0JeKHv3mz3eBZq-tuqnvNGNp90vUM6rlHC6CP_iaI69zD7nwSMMe9myw/s654/KakaoTalk_20240614_012741627_03.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiG9Ym7TUYoDN4Vw5OitmiVHMepv-MOnOGnDzqPgsBbg-bCzOmnrQRRvIxxyF0youqdMMK2hgecegtVnd_63VTq0K94nYQcUnVz46nGTCAB97qOfXwosNIETc1F6-HrfL6Ybqf90J-N3vf7lqEM_LpfVEOgpoghMY-0Sb9rylgVQ8FprDieDBrUpESxn9l7/s759/KakaoTalk_20240531_152346278_12.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqINAj8Qhc-O3KSRUBAKVAkakda5uA4E6xQkO4nj9DVMPdSLrwqgNQju4wc2H3WpfgM72ul936QJO9hnMWB6ju0fextbGsLlZk1pgTg1fKeadzVTwvASk3h2NGVwbngP9Hm45JYjU8ASl17M31-lFAKqcTu4BepADua5C-O-ftk2NnlAfaPYner0cJ7urz/s720/KakaoTalk_20240614_012741627_04.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgThNslQg8SLJAsJUSb8NTI6ey9kbjnzJ6krzzqDUmOOccRJlwVgDtPB-i7TPDnjxTjEglUWt-rqhfhvi0QPK9SkGEN_j_WCFvTTqvoarGkGNRvyyt0Ch0C4zT56mRcUQ4c7eeWgWTAKa4ZbVKG2QCbgx33QF0or5BTSOrDZc4GtmQ_PCR04st0Y5tY9-Z_/s757/KakaoTalk_20240531_152346278_13.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHtUiTQL1r0nGaxh1bEi4lIbWBpJcCUxSDkkSn6qtuaNVBsRKL7zaOOdSK4miggOiWxLd0ub2sPnCKxRbiiOZA4eCHCGMczi80lvK_cGbBhhZjHdyfAbzS7alfFZLRmkn_QrXSkZ5-pbKOlYA1bg4rHmYU40INDanxh8u-3aIhxeNpflRFY4fyLw5nYl-O/s576/KakaoTalk_20240614_012741627_05.jpg",
        selectedAnswer: null
    }
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiKU0_7WH8s8P_jkb_Si5myoZtYNsBhxfspEhyphenhyphenehfpnNRf998Jt85Tkv9mUB6mwEI8ZjtuD3hSCaTy8IHHH8hUtuMs0rcLbT7YMiuOqChhuRojDb84IvNL0e8MQd-DG1nWyGyenTVzCnlQdWu8DqJPwMfY5qmSzU0F7oO6w_hf9O-BuglkerY7-ochfA2k/s754/KakaoTalk_20240531_152346278_14.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZF-6rOJvCH3qFZxRLOR9hUeKhEJNLGb3qo-dGAtFJOaybthPYUXq89roDX8nQvcJSiuRDUxrDmNOgVTvKXST0vMb7wAKFt_9_HiEuZKYXWEsU_rCBybd0KtWyW-FPUGgh3KkqbUEOs8kyIIFZBm26qdmLFyRyo-T3bvdKaq1RcooAklYv6J_rKtUgEMSI/s552/KakaoTalk_20240614_012741627_06.jpg",
        selectedAnswer: null
    }
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQmSJslIpeXfStD1cT7UFxMoVem1iWrs1W6b8EnIsnM90-IwLXhJQ0ANnvRA2H84IzrxvX5C_KjsDlo88i55gqQ7ojGoyg3RcJ58wPiAkZwmCGQRIPvQOQ2r-8auP-UyH9RJcyWxGo94Q_mGv8L2TfZXWrWzkGIQMBfLGTPpOV-Q75M-GdW-Vyt7eWWuYm/s734/KakaoTalk_20240531_152346278_15.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKEqXY_vvyWYcItGdR7Ti9svkAfLQQ5FzgBV7o1hyBBgKk3DXvsVzSsy70xsZgyiTVHZvkXj460hS9jdv1aWL7lmeqRLBe9bygzP6_S5gaWd07AW9azqYU6crP1ZTodwRR5cKynA_YCSLa0FdQTEp8ueK7rcGjrqx1Wzxv6DJ_vhhXDgj36QbPwazADKtA/s572/KakaoTalk_20240614_012741627_07.jpg",
        selectedAnswer: null
    }
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 9,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNXGZZFeSWSuEKXCMgMsJh3RhNzL-Uq7eCh_mKwFslB9bO3Vwol3uKpFme26xmDfstHH6xZYzVv8OZG1h4EpG0JOxLGnfSlXhd-XGaEYYgRbur18KpSXmXinNk2XSA9QF13AZ2ZCvlL9erfpB93UVoenz5y5tQPVzNh1M_FwhCZLpAwhSOqrVEnTOkpZtA/s542/1111.PNG",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWI7n3bMIVTAok9IDnyqsMLIMJpIop79N2EbC5bKq8TfTaLvK8XxaGhEt801A0f_bXnd0vORKfbLL4LAjp94shArYcLSlN6cSVcWEQux48wc18mOgZCdDvApWrjcET6gvZ6am7Etz_5e5LMXlfhiACH5wLon3Tc7FpqvQsQCjNJn2MNUG8KDzstDpGt5SD/s590/KakaoTalk_20240614_012741627_08.jpg",
        selectedAnswer: null
    }
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 10,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4BB4826yoCc8B00eymoowuWPA-QL8XPIpNZym4U_gIWC1QkcEpvRUf8tgaVzbqCBMWhQ5sPKZkzG0kgrwlGPwu6-Ir4KrdiedOcbN_56fNQgXORdllblLG7cWY1MxKN2mFMHsMrq2tTBO1LB4DHtlO5AVI9nMzKNdBIsrfl856z98mTmdbtfcbTs6CIIz/s547/111111.PNG",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ_q-45bQVSFB-pgDl2E00hDC6A5XYQTf9XqhDrQbkAVrexKvMzyv8dcndAhDjnQCroBvJnsF2c94QL4W9PetjaOMgFVPRuXapU9kTmjJjoGrSC11i7iwN7v5XcVdYMZxY1NBfe5djOkz_845Zj0YVrfvaL1615VqnxanS0LqHLWNtzTQRpbrfZ9JvJ1YX/s558/KakaoTalk_20240614_012741627_09.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();