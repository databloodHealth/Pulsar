const buttonFAQ = document.getElementById("buttonColapse");
const cardsFAQ = document.querySelectorAll('.questionCard')
const questionAnswer = document.querySelector('.questionContent') 


cardsFAQ.forEach(card => {
    
    const buttonFAQ = card.querySelector('.colapse'); 
    
    card.addEventListener('click', () => {
        card.classList.toggle('active');
        
        if (card.classList.contains('active')) {
            buttonFAQ.style.background = "var(--primary)";
            buttonFAQ.style.color = "#fff";
            buttonFAQ.style.transform = 'rotate(-45deg)';
        } else {
            buttonFAQ.style.background = '';
            buttonFAQ.style.color = '';
            buttonFAQ.style.transform = '';
        }
    });
});


