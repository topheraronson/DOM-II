const destinationCard = document.querySelectorAll('.destination')

destinationCard.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = 'palegreen'
        card.style.transition = '0.3s'
        card.style.borderRadius = '5px'
    })

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = 'white'
        card.style.transition = '0.3s'
    })
})

const destinationContent = document.querySelector('.content-destination')
destinationContent.addEventListener('dblclick', () => {
    destinationContent.style.backgroundColor = 'palevioletred'
})

const destination = document.querySelector('.content-destination h2')
destination.addEventListener('dblclick', (event) => {
    destination.style.color = "SteelBlue"
    event.stopPropagation()
})