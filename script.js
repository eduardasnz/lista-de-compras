const input = document.querySelector("input")
const submit = document.querySelector("button")

submit.addEventListener("click", (event) => {
  event.preventDefault()
  
  console.log(input.value)
})