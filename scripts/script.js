

let quizForm = document.querySelector(".quizForm");
let cardsSection = document.querySelector(".cardsSection");


// Questions Info
let questionsInfo = [{
    question: '¿En qué ciudad se encuentra el edificio Chrysler?',
    correctAnswer: "Nueva York",
    wrongAnswers: ["Chicago","París","Amsterdam"],
    img: "https://www.voyanyc.com/wp-content/uploads/2016/02/Chrysler-Building-Voy-a-NYC.jpg",
    alt: "Edificio Chrysler"
},{
    question: '¿En qué año se terminó de construir la Opera de Sidney?',
    correctAnswer: "1973",
    wrongAnswers: ["1898","1952","1999"],
    img: "https://elsolweb.tv/wp-content/uploads/2018/10/Opera-house-sydney.jpg",
    alt: "Opera de Sidney"
},{
    question: '¿En qué ciudad española se encuentra el edificio comúnmente conocido como "la Corona de Espinas"?',
    correctAnswer: "Madrid",
    wrongAnswers: ["Barcelona","Sevilla","Bilbao"],
    img: "https://www.metalocus.es/sites/default/files/styles/mopis_news_gallery_deskop/public/metalocus-coronadeespinas-ohm16-28.jpg?itok=DMo_vogc",
    alt: "Edificio Corona de espinas"
},{
    question: '¿A qué se refieren las siglas "AEC" relacionadas con el sector de la construcción a día de hoy?',
    correctAnswer: "Architecture, Engeneering and construction",
    wrongAnswers: ["Acero, Eficiencia y Calor","Air, Elements and Cars","No significan nada"],
    img: "https://segurosnews.com/wp-content/uploads/2021/12/QBE-construccion.jpg",
    alt: "Trabajadores en la obra"
},{
    question: '¿Cuál de estos arquitectos es el autor de una de las cuatro torres de Chamartín?',
    correctAnswer: "Norman Foster",
    wrongAnswers: ["Tadao Ando","Juan Herreros","Iñaki Ábalos"],
    img: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/07/torres-de-madrid-atardecer.jpg",
    alt: "Torres de Chamartín"
},{
    question: '¿A qué altura se encuentra el piso más alto de la Torre Eiffel?',
    correctAnswer: "300 metros",
    wrongAnswers: ["200 metros","280 metros","400 metros"],
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg",
    alt: "Torre Eiffel"
},{
    question: 'El aire caliente tiende a ...',
    correctAnswer: "Subir",
    wrongAnswers: ["Bajar","Bajar brúscamente","Se queda donde está"],
    img: "https://disenarparalavida.com/wp-content/uploads/2020/07/captador-02.jpg",
    alt: "Captadores de viento"
},{
    question: 'Popularmente se dice que el Monasterio de El Escorial tiene un ...',
    correctAnswer: "Ladrillo de oro",
    wrongAnswers: ["Becerro de oro","Pomo de oro","Inhodoro de oro"],
    img: "https://www.turismoenmadrid.com/wp-content/uploads/2020/06/monasterio-de-el-escorial-patrimonio-de-la-humanidad.jpg",
    alt: "Monasterio de El Escorial"
},{
    question: 'En los túneles que canalizan el agua en los jardines de La Granja en Segovia vive ...',
    correctAnswer: "Una gran comunidad de murciélagos",
    wrongAnswers: ["Los trabajadores que cuidan el jardín","Una jauría de lobos","El Yeti"],
    img: "https://farm9.staticflickr.com/8214/8336443651_282bc4bdce_o.jpg",
    alt: "Jardines de La Granja, Segovia"
},{
    question: '¿Quién diseñó el Museo Solomon R. Guggenheim de Nueva York construido en 1937?',
    correctAnswer: "Frank Lloyd Wright",
    wrongAnswers: ["Norman Foster","Pablo Picasso","Antoni Gaudí"],
    img: "https://www.mejores-planes-viaje-nueva-york.com/wordpress/wp-content/uploads/2019/06/Guggenheim-Museum-New-York-City-24.jpg",
    alt: "Museo Solomon R. Guggenheim de Nueva York"
}
]

// Create question cards
function createQuestionCards(arr){
    for(let i=0; i<arr.length; i++){
        let {question, correctAnswer, wrongAnswers, img, alt} = arr[i];
        let quesNum = i+1;

        let randomIndex = Math.floor(Math.random()*4);
        let answers = wrongAnswers;
        answers.splice(randomIndex, 0, correctAnswer);

        let questionCard = `<article class="question_card">
                                <h3>${quesNum}. ${question}</h3>
                                <img src="${img}" alt="${alt}">
                                <div class="radio_div">
                                    <input type="radio" id="answer${quesNum}-1" name="ansQuest${quesNum}" value="${answers[0]}"><label for="answer${quesNum}-1">${answers[0]}</label>
                                    <input type="radio" id="answer${quesNum}-2" name="ansQuest${quesNum}" value="${answers[1]}"><label for="answer${quesNum}-2">${answers[1]}</label>
                                    <input type="radio" id="answer${quesNum}-3" name="ansQuest${quesNum}" value="${answers[2]}"><label for="answer${quesNum}-3">${answers[2]}</label>
                                    <input type="radio" id="answer${quesNum}-4" name="ansQuest${quesNum}" value="${answers[3]}"><label for="answer${quesNum}-4">${answers[3]}</label>
                                </div>
                            </article>`
        
                        
        
        quizForm.innerHTML += questionCard;

    }
    let submitInput = `<input type="submit" id="submit" value="Send"><label for="submit">Enviar respuestas</label>`
    quizForm.innerHTML += submitInput;
}
                        

createQuestionCards(questionsInfo);




// Check the answers
quizForm.addEventListener("submit", function(event){
    event.preventDefault();

    let userAnswers = quizForm.querySelectorAll('input[type="radio"]:checked');
    console.log(userAnswers)
    console.log(userAnswers[0].value)

    let correctAnswers = questionsInfo.map(item => item.correctAnswer)
    console.log(correctAnswers)

    for(let i=0; i<correctAnswers.length; i++){
        console.log("+", correctAnswers[i])
        console.log("-", userAnswers[i].value)
        if(correctAnswers[i]==userAnswers[i].value){
            console.log(`La respuesta número ${i+1} es correcta!`)
        } else {
            console.log(`La respuesta número ${i+1} es INCORRECTA!`)
        }
    }
    
})







// Question cards template:
/* <article class="question_card">
    <h3>0. ¿En qué año se terminó de construir la Opera de Sidney?</h3>
    <img src="/assets/images/photo-1616128618694-96e9e896ecb7.jpeg" alt="Opera de Sidney">
    <div class="radio_div">
        <label>1973<input type="radio" name="answer1" value="1973"></label>
        <label>1898<input type="radio" name="answer1" value="1898"></label>
        <label>1952<input type="radio" name="answer1" value="1952"></label>
        <label>1999<input type="radio" name="answer1" value="1999"></label>
    </div>
</article> */