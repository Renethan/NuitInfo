function generateRandomString() {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._';
  let result = '';
  for (let i = 0; i < 15; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  const resultDiv = document.getElementById('resultemail');
  resultDiv.textContent = result;
  resultDiv.style.display = 'block';
}
