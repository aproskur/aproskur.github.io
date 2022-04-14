async function getAdvice() {
    const api_url = "https://api.adviceslip.com/advice";
    try {
        let res = await fetch(api_url, {cache: "no-store"});
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderAdvice() {
    let app_advice = await getAdvice();
    document.getElementById('advice-number').innerHTML = app_advice.slip.id;
    document.getElementById('advice-text').innerHTML = '\"'+ app_advice.slip.advice + '\"';
}

renderAdvice();


const button = document.getElementById("toggle-advice");
button.addEventListener("click", renderAdvice);


//    document.getElementById('advice-number').appendChild(document.createTextNode(app_advice.slip.id));
//    document.getElementById('advice-text').appendChild(document.createTextNode('\"'+ app_advice.slip.advice + '\"'));
