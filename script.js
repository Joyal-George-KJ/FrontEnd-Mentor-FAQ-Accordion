const FAQ_container = document.querySelector('.faqs-container')
const FAQs = document.querySelectorAll('.faqs-container .faq')


const iconToggle = (element) => {
    const toggleImage = element.childNodes[3]
    if (toggleImage.alt == 'plus') {
        toggleImage.src = 'assets/images/icon-minus.svg'
        toggleImage.alt = 'minus'
    } else if (toggleImage.alt == 'minus') {
        toggleImage.src = 'assets/images/icon-plus.svg'
        toggleImage.alt = 'plus'
    }
}

FAQ_container.addEventListener('click', (e) => {
    if (e.target.classList == 'faq' && e.target.dataset.toggle == 'false') {
        e.target.dataset.toggle = 'true'
        iconToggle(e.target.childNodes[1]);
    } else if (e.target.classList == 'faq' && e.target.dataset.toggle == 'true') {
        e.target.dataset.toggle = 'false'
        iconToggle(e.target.childNodes[1]);
    }
})

function ExtendColapse(index) {
    if ( FAQs[index].dataset.toggle == 'false') {
        FAQs[index].dataset.toggle = 'true'
        iconToggle(FAQs[index].childNodes[1]);
    } else if ( FAQs[index].dataset.toggle == 'true') {
        FAQs[index].dataset.toggle = 'false'
        iconToggle(FAQs[index].childNodes[1]);
    }
}