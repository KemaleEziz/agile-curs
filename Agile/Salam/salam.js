document.querySelector('h1').classList.add('border')
document.querySelector('h2').classList.add('green')
const headings = document.querySelectorAll('h2')
console.log(headings)
 
const paragraphs = document.querySelectorAll('p')
console.log(paragraphs)
for(let item of headings){
    console.log(item)
    item.classList.add('green-text')
}
for(let item of paragraphs){
 console.log(item)
 item.classList.add('blue-text')
}