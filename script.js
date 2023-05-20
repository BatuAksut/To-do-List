
const randColor= ()=>{
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  return `rgb(${r}, ${g}, ${b})`;
}





const form = document.querySelector('form');
const gorevler = document.querySelector('#gorevler');

form.addEventListener('submit',e=>{
  e.preventDefault();
  const input = document.querySelector('input').value;
  if(input ===''|| input ===' ' || input.trim().length < 1){
    alert('Bir değer giriniz');
  }
  else{
    let li = document.createElement('li');
    li.innerText = `${input}`;
    gorevler.appendChild(li);
    form.reset();
  }
  
})

gorevler.addEventListener('click',e=>{
  e.target.nodeName ==='LI' && e.target.remove();
})