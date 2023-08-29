export const accordion = () => {
   const accordions = document.querySelectorAll('.accordion__button');
   accordions.forEach(item => {
      item.addEventListener('click', () => {
         const contentHeight = item.nextElementSibling.scrollHeight;
         item.nextElementSibling.style=`height: ${contentHeight}px`
         item.classList.toggle('accordion__button--active')
         if(!item.classList.contains('accordion__button--active')) {
            item.nextElementSibling.style=`height: 0`
         }
      })
   })
}