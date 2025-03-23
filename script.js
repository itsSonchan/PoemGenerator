function displayPoem(response) {
  let poemField = document.querySelector("#poem-field");
  poemField.innerHTML = "⌛️ Generating your poem...";
  new Typewriter("#poem-field", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function apiCall(topic) {
  let apiKey = "4d6d3a603f2o058afbtc1e8fa6515357";
  let prompt = `Write a short poem about ${topic}. Make sure to structure it like a poem with line breaks using HTML but do not wrap it in backticks , and only write the poem, nothing around it. It should not be longer than 8 lines. `;
  let context = "You are funny and uplifting.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

function getTopic(event) {
  event.preventDefault();
  let topic = document.querySelector("#topic-input");
  apiCall(topic.value);
}

let submitForm = document.querySelector("#submit-form");
submitForm.addEventListener("submit", getTopic);
