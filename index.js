// Write your code here!
document.querySelector('main#main').remove()
const newHeader = document.createElement('h1')
newHeader.setAttribute('id', "victory")
newHeader.textContent = 'Vikalp is the champion';

document.body.append(newHeader)

