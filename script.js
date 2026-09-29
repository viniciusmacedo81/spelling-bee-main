var palavra
var jogo = []
palavra = jogo[Math.floor(Math.random() * 65)]
var correto = document.getElementById("acerto")
var erro = document.getElementById("erro")
var hipercorreto = document.getElementById("hiperacerto")
var hipererro = document.getElementById("hipererro")
var scorenumber = 0
var highscorenumber = 0
var pal = 0
var scoretext = document.getElementById("score")
var highscoretext = document.getElementById("highscore")
var desafio = document.getElementById("desafio")
var perda = document.getElementById("perda")
var spelling = document.getElementById("spelling")
var bee = document.getElementById("premio")
var numpal = 0

function proximo(){
    if (spelling.value.toUpperCase() == palavra.toUpperCase())
    {
        console.log(diff);
        numpal++
        document.getElementById("card").style.backgroundColor = "green"
        spelling.value = ""
        setTimeout(()=>{document.getElementById("card").style.backgroundColor = "white"}, 100)
        correto.play()
        scorenumber++
        scoretext.innerHTML = "score:"+scorenumber
        if (localStorage.getItem("chall") == 1){
                desafio.innerHTML = "palavra:" + numpal + "/100" 
        }
    }
    else{
      document.getElementById("card").style.backgroundColor = "red"
        spelling.value = ""
        setTimeout(()=>{document.getElementById("card").style.backgroundColor = "white"}, 100)
        erro.play()
        correcao.innerHTML = palavra
        if (scorenumber > highscorenumber)
        {
            highscorenumber = scorenumber
        }
        highscoretext.innerHTML = "high-score:"+highscorenumber
        scorenumber = 0
        scoretext.innerHTML = "score:"+scorenumber
        if (localStorage.getItem("chall") == 1){
            perda.style.display = "block"
            perda.style.color = "red"
            perda.style.fontSize = "2rem"
            hipererro.play()
            setTimeout(()=>{window.location.href = "index.html";}, 1000)
        }
    }
    if(diff == 1){
        palavra = jogo[Math.floor(Math.random() * jogo.length)]
    }
    else if (diff == 2)
    {
        palavra = jogo[Math.floor(Math.random() * jogo.length)]
    }
    else if (diff == 3)
    {
        palavra = jogo[Math.floor(Math.random() * jogo.length)]
    }
    else if (diff == 4){
        palavra = jogo[Math.floor(Math.random() * jogo.length)]
    }
    else{
        console.log("pal:" + pal) 
        jogo.splice(pal, 1);
        console.log("lenght:" + jogo.length)    
        pal = Math.floor(Math.random() * jogo.length)
        palavra = jogo[pal]  
        console.log("palavra:" + palavra)  


if (jogo.length == 0){
    hiperacerto.play()
    perda.innerHTML = "PARABENS. VOCE GANHOU!"
    perda.style.display = "block"
    perda.style.color = "green"
    perda.style.fontSize = "2rem"
    localStorage.setItem("vitoria", 1)
    setTimeout(()=>{window.location.href = "index.html";}, 1000)
}
}
}
var correcao = document.createElement("p")
document.getElementById("card").appendChild(correcao)

function challenge(){
    if (localStorage.getItem("diff") != "" && localStorage.getItem("diff") != null){
    localStorage.setItem("chall", 1);
window.location.href = "index2.html";
desafio.className = "desafiorevelado"
}
}


function facil(){
    localStorage.setItem("diff", 1)
            localStorage.setItem("chall", 0);
    window.location.href = "index2.html";
}
function medio(){
    localStorage.setItem("diff", 2)
            localStorage.setItem("chall", 0);
    window.location.href = "index2.html";
}
function dificil(){
    localStorage.setItem("diff", 3)
            localStorage.setItem("chall", 0);
    window.location.href = "index2.html";
}
function aleatorio(){
    localStorage.setItem("diff", 4)
            localStorage.setItem("chall", 0);
window.location.href = "index2.html";
}
function muitoDificil(){
    localStorage.setItem("diff", 5)
            localStorage.setItem("chall", 0);
    window.location.href = "index2.html";
}
function extremamenteHiperDificil(){
    localStorage.setItem("diff", 6)
        localStorage.setItem("chall", 0);
    window.location.href = "index2.html";
}

var diff = localStorage.getItem("diff")
if (localStorage.getItem("chall") == 1){
                          desafio.style.display = "block"
                          desafio.style.fontSize = "4rem"
                        scoretext.style.display = "none"
                        highscoretext.style.display = "none"
} 
if (diff == 1)
{
    jogo = [
  "apple", "baby", "bag", "ball", "banana", "bathroom", "beach", "bed", "bicycle", "bird",
  "black", "blue", "book", "box", "bread", "brother", "brown", "bus", "cake", "car",
  "cat", "chair", "child", "class", "classroom", "clock", "clothes", "coat", "coffee", "cold",
  "computer", "cook", "cousin", "cup", "dance", "day", "desk", "dinner", "dog", "door",
  "dress", "drink", "easy", "family", "father", "fish", "flower", "food", "friend", "fruit",
  "game", "garden", "girl", "glass", "green", "hair", "happy", "help", "home", "horse",
  "house", "jacket", "juice", "kitchen", "leg", "lesson", "light", "lunch", "milk", "mother",
  "mouth", "music", "name", "night", "orange", "park", "pen", "pencil", "phone", "picture",
  "pink", "pizza", "play", "read", "red", "rice", "room", "school", "shirt", "shoe",
  "sister", "small", "song", "table", "teacher", "train", "tree", "trousers", "water", "window"
];
    palavra = jogo[Math.floor(Math.random() * jogo.length)]
}

    if (diff== 2)
        {
            jogo = [
  "abroad", "accept", "adventure", "airline", "airport", "alive", "almost", "already", "amazing", "anywhere",
  "appointment", "area", "arrive", "backpack", "barbecue", "become", "believe", "booking", "border", "boring",
  "cancel", "careful", "century", "champion", "cheerful", "choose", "comfortable", "concert", "continue", "culture",
  "dangerous", "decide", "discover", "documentary", "east", "education", "emergency", "enormous", "environment", "equipment",
  "event", "experience", "explain", "factory", "festival", "follow", "foreign", "future", "guide", "healthy",
  "history", "improve", "include", "instead", "international", "journey", "local", "member", "message", "modern",
  "neighbour", "noisy", "normal", "north", "ordinary", "passenger", "perhaps", "popular", "prepare", "probably",
  "public", "receive", "recently", "recommend", "repair", "return", "safe", "similar", "south", "special",
  "spend", "successful", "surprise", "theatre", "together", "tourist", "traffic", "transport", "unusual", "useful",
  "view", "visit", "weather", "western", "winner", "without", "wonderful", "world", "write", "yourself"
];
            palavra = jogo[Math.floor(Math.random() * jogo.length)]
        }
        if (diff== 3)
            {
                jogo = [
  "ability", "accept", "achieve", "advantage", "afford", "agree", "allow", "amount", "announce", "appear",
  "apply", "argue", "arrange", "attitude", "average", "avoid", "balance", "behave", "benefit", "career",
  "cause", "challenge", "choice", "communicate", "compare", "complain", "complete", "condition", "consider", "contact",
  "create", "decision", "degree", "develop", "difference", "education", "effect", "encourage", "energy", "environment",
  "experience", "explain", "familiar", "goal", "habit", "imagine", "improve", "increase", "influence", "information",
  "knowledge", "likely", "manage", "meaning", "mention", "modern", "opportunity", "organise", "original", "particular",
  "perform", "perhaps", "position", "possible", "practical", "prefer", "prepare", "prevent", "probably", "progress",
  "promise", "provide", "realise", "reason", "receive", "relationship", "remember", "responsible", "result", "serious",
  "situation", "solution", "suggest", "support", "technology", "traditional", "understand", "usual", "value", "volunteer",
  "warning", "waste", "wonder", "worry", "youth", "attend", "attention", "describe", "discussion", "immediately"
];
                palavra = jogo[Math.floor(Math.random() * jogo.length)]            
            }
                    if (diff== 4)
            {
                jogo = [
  "abstract", "academic", "access", "accommodation", "accompany", "acquire", "adapt", "adequate", "adjust", "adopt",
  "advance", "advertise", "allocate", "analyse", "anticipate", "apparent", "appropriate", "approve", "aspect", "assess",
  "assume", "attempt", "aware", "capacity", "category", "circumstance", "clarify", "complex", "conduct", "confirm",
  "considerable", "consistent", "consume", "context", "contrast", "convince", "cooperate", "crucial", "decline", "demonstrate",
  "derive", "despite", "distinguish", "diverse", "domestic", "efficient", "emphasise", "enable", "encounter", "ensure",
  "establish", "estimate", "evaluate", "evident", "expand", "factor", "flexible", "focus", "function", "identify",
  "impact", "indicate", "individual", "interpret", "involve", "issue", "maintain", "method", "obtain", "occur",
  "participate", "perceive", "perspective", "potential", "predict", "principle", "procedure", "process", "range", "react",
  "reduce", "relevant", "require", "research", "resource", "respond", "restrict", "significant", "specific", "strategy",
  "structure", "sufficient", "survive", "tendency", "transform", "trend", "valid", "vary", "widespread", "withdraw"
];
                palavra = jogo[Math.floor(Math.random() * jogo.length)]            
            }
                    if (diff== 5)
            {
                jogo = [
  "abandon", "absolute", "acceptable", "accompany", "accomplish", "acknowledge", "additional", "administration", "aggressive", "agriculture",
  "anxiety", "apparent", "appeal", "applicant", "assessment", "association", "awareness", "barrier", "biological", "budget",
  "campaign", "candidate", "capacity", "capture", "circumstance", "collapse", "commercial", "commission", "commitment", "committee",
  "comparison", "component", "concentration", "concept", "concern", "confidence", "conflict", "conservation", "considerable", "constant",
  "construction", "consult", "contemporary", "contract", "contribute", "controversy", "convert", "corporate", "criticism", "deadline",
  "depression", "determine", "devote", "dimension", "disability", "discipline", "distribution", "district", "dramatic", "edition",
  "elderly", "election", "emotional", "enthusiasm", "enthusiastic", "environmental", "estate", "ethical", "finance", "financial",
  "foundation", "funding", "gender", "genetic", "household", "immigration", "implication", "income", "increasingly", "industrial",
  "infection", "initiative", "insurance", "investment", "justice", "leadership", "manufacturing", "mechanism", "military", "minority",
  "mortgage", "obligation", "occupation", "outcome", "poverty", "psychological", "recovery", "regulation", "reputation", "restriction"
];
                palavra = jogo[Math.floor(Math.random() * jogo.length)]            
            }
            if (diff== 6)
                {
                    jogo = [
  "accurate", "admire", "admit", "affect", "against", "agreement", "aim", "alarm", "alternative", "amazed",
  "ambition", "analyse", "apologise", "approach", "argue", "arrangement", "attend", "attract", "available", "average",
  "award", "background", "behaviour", "belief", "belong", "borrow", "branch", "breathe", "cancel", "celebrate",
  "certain", "choice", "communicate", "complain", "concentrate", "confident", "connect", "consider", "contact", "convenient",
  "crowded", "decision", "depend", "describe", "develop", "disadvantage", "discover", "discussion", "education", "effective",
  "encourage", "environment", "equipment", "event", "examine", "exist", "experience", "explanation", "familiar", "feature",
  "feeling", "generation", "goal", "imagine", "improve", "include", "increase", "independent", "influence", "information",
  "intention", "knowledge", "manage", "meaning", "mention", "necessary", "opinion", "opportunity", "organise", "particular",
  "performance", "permission", "population", "position", "possible", "practical", "prefer", "prepare", "progress", "promise",
  "provide", "purpose", "realise", "receive", "recommend", "relationship", "responsible", "solution", "support", "traditional"
];
                 pal = Math.floor(Math.random() * jogo.length)
                    palavra = jogo[pal]          
                }

                            if (localStorage.getItem("chall") == 1)
                {
                 
                 pal = Math.floor(Math.random() * jogo.length)
                    palavra = jogo[pal]          
                          desafio.style.display = "block"
                          desafio.style.fontSize = "4rem"
                        scoretext.style.display = "none"
                        highscoretext.style.display = "none"
                          console.log("lenght-begin:" + jogo.length)    
                }
            document.body.addEventListener("keyup", (event)=>{
               if (event.code == "Enter")
               {
                proximo()
               }
               if (event.code == "Space")
                {
                    responsiveVoice.speak(palavra);
                  spelling.value = spelling.value.trim()
                }
                if (localStorage.getItem("vitoria") == 1){
                    bee.style.display = "block"
                }
            })