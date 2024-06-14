document.getElementById("flipButton").addEventListener("click", () => {
  fetch("/flip")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("coin").innerText = data;
    })
    .catch((error) => console.error("Error:", error));
});
