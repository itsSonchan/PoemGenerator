function getTopic(event) {
  event.preventDefault();
  let topic = document.querySelector("#topic-input");
  console.log(topic.value);
}
let submitForm = document.querySelector("#submit-form");
submitForm.addEventListener("submit", getTopic);
