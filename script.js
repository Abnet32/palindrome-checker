const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");
const head = document.getElementById("h1");
function isPalindrome(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = cleanStr.split("").reverse().join("");
  return cleanStr === reversed;
}

checkBtn.addEventListener("click", () => {
  const inputVal = textInput.value;

  if (!inputVal.trim()) {
    alert("Please input a value.");
    return;
  }

  const isPalin = isPalindrome(inputVal);
  if (isPalin) {
    resultDiv.textContent = `${inputVal} is a palindrome.`;
    resultDiv.style.color = "#67eb34";
    head.style.color = "#67eb34";
    checkBtn.style.backgroundColor = "#67eb34";
  } else {
    resultDiv.textContent = `${inputVal} is not a palindrome.`;
    resultDiv.style.color = "red";
    head.style.color = "red";
    checkBtn.style.backgroundColor = "red";
  }
});
