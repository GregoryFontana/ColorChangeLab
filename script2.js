
// ===== CHALLENGE =====
  // 1. Create A Function (generate)
  
  const COLORS_ARRAY = ["red", "yellow", "magenta", "cyan", "blue", "black", "gray", "teal", "green", "purple", "violet"];

// Function should get a random color from the 
//   COLORS_ARRAY
function generate(){
  const randomColor = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)] 
  const li = document.createElement('li') 
  li.textContent = randomColor 
  ul.appendChild(li) 
  body.style.backgroundColor = randomColor
}
// Create a li element
const ul = document.getElementById('color-list')
  const button = document.getElementById('generate-color')
  const button2 = document.getElementById('reset')
  const body = document.querySelector('body')
  
// Add the color name to the li text
// Set the background color of the li to the random color
  // Append the li to the ul
 
// 2. Create Function (reset)
function reset(){
  const children = ul.querySelectorAll('li') 
// Should remove all li children from the ul. 
const list = Array.from(children) 
list.map(list => list.remove())
}
  // Should set background color to white.
body.style.backgroundColor = 'white'

button.addEventListener('click', generate)
button2.addEventListener('click', reset)



  
   
   
   