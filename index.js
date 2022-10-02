const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

     console.log(data)

     document.getElementById("title").innerHTML = `Advice #${data.slip.id}`
     document.getElementById("text").innerHTML = `"${data.slip.advice}"`
}

fetchAdvice()






// const number = document.querySelector(".title");
// const advice = document.querySelector(".text");
// const button = document.querySelector(".button");

// async function fetchAdvice() {
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const adviceGenerated = await res.json();
//     console.log(adviceGenerated)
//     number.innerHTML = `#${adviceGenerated.slip.id}`;
//     advice.innerHTML = `"${adviceGenerated.slip.advice}"`;

// }
// fetchAdvice;

// button.addEventListener("click", () => {
//   fetchAdvice()
// });





