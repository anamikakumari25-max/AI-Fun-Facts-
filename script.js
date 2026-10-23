const button = document.getElementById("factButton");
const p = document.getElementById("fact");

button.addEventListener("click", async () => {

    p.textContent = "Generating....."


try {

    const response = await fetch("/fun-fact")

    const data = await response.json();

    p.textContent = data.fact;

} catch (error) {

    p.textContent = "something went wrong"


}
});

