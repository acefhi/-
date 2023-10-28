const promobox = document.querySelectorAll('.promo-box')

function datafunc () {
    const currentDate = new Date ()
    const currentDateString = currentDate.toISOString().split('T')[0]
    
    promoBox.forEach((box) => {
        const date = box.getAttribute('data-date')
        const promo = box.getAttribute('data-promo')
        const isActive = date <= currentDateString

        if (isActive) {
            box.classList.add('active')
            box.innerText = 'Нажми чтобы увидеть промокод'
        } else {
            box.classList.remove('active')
            box.innerText = date.split('-')[2]
        }
    })
}

datafunc()

promoBox.forEach((box) => {
    box.addEventListener('click', () => {
        if(box.classList.contains('active')) {
            const promo = box.getAttribute('data-promo')
            alert('Ваш промокод: ' + promo)
        }
    })
})