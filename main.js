var text = document.getElementById('text');

text.style.fontSize = 30;

text.addEventListener('mouseover', () => console.log('mouse over text'));
text.addEventListener('mouseout', () => console.log('mouse not over text'))