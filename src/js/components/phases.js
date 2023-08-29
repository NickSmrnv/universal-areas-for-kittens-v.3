export const phases = () => {
   const phasesButtons = document.querySelectorAll('.phases__button');
   const phasesPicture = document.querySelectorAll('.phases__picture');

   phasesButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
         phasesButtons.forEach(button => button.classList.remove('phases__button--current'));
         phasesPicture.forEach(element => element.classList.remove('phases__picture--current'));

         button.classList.add('phases__button--current');
         phasesPicture[index].classList.add('phases__picture--current');
      });
   });
}