function apiCall(topic) {
  let apiKey = "4d6d3a603f2o058afbtc1e8fa6515357";
  let prompt = `Write a short poem about ${topic}. Make sure to structure it like a poem with line breaks using HTML but do not wrap it in backticks , and only write the poem, nothing around it. `;
  let context = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

function getTopic(event) {
  event.preventDefault();
  let topic = document.querySelector("#topic-input");
  apiCall(topic.value);
}

function displayPoem(response) {
  new Typewriter("#poem-field", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

let submitForm = document.querySelector("#submit-form");
submitForm.addEventListener("submit", getTopic);
