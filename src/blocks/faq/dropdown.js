let faqItems = document.getElementsByClassName('js-faq__item');

Array.from(faqItems).forEach(element => setClickEvent(element));

function setClickEvent(element) {
    let answerElement = element.getElementsByClassName('faq__answer');
    let iconElement = element.getElementsByClassName('faq__plus');
    element.addEventListener('click', handleElementClicked);
    document.addEventListener('click', handleClickedOutside);

    function handleElementClicked() {
        answerElement[0].classList.toggle('faq__answer--active');
        iconElement[0].classList.toggle('faq__plus--active');
    }
    function handleClickedOutside(event) {
        if (!(event.target == element || element.contains(event.target))) {
            answerElement[0].classList.remove('faq__answer--active');
            iconElement[0].classList.remove('faq__plus--active');
        }
    }
}

