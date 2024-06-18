document.addEventListener('DOMContentLoaded', () =>{
    const faqContainer = document.querySelector('.card') ;
    
    faqContainer.addEventListener('click', (e) =>{
        const gruopHeader = e.target.closest('.question');

        if(!gruopHeader) return;

        const group = gruopHeader.parentElement;
        const groupbody = group.querySelector('.answer');
        const icon = gruopHeader.querySelector('.faq-icon');

        icon.classList.toggle('open');
        groupbody.classList.toggle('open');
        
        const otherGroups = faqContainer.querySelectorAll('.faq');

        otherGroups.forEach((otherGroup)=>{
            if(otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector(".answer");
                const otherIcon = otherGroup.querySelector('.faq-icon');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('open');
            }
            
            });  
});
});
