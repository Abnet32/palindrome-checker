const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

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
  } else {
    resultDiv.textContent = `${inputVal} is not a palindrome.`;
  }
});
