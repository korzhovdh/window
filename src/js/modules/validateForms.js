const validateForms = (trigger, modal, windows, state) => {
    const openWindow = () => {
        windows.forEach(item => {
            item.style.display = "none";
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    const showMessage = (trigger) => {
        const existingMessage = trigger.parentNode.querySelector('.error-message');
        if(!existingMessage) {
            let message = document.createElement('div');
                message.classList.add('error-message');
                message.style.marginTop = '10px';
                message.style.color = 'red';

                const parent = trigger.parentNode;
                      parent.appendChild(message);
                      message.textContent = '*Заполните все полня';

                      trigger.addEventListener('click', () => {
                        message.remove();
                      });
        }
    };
    
    if (trigger.id) {
        switch(trigger.id) {
            case 'popup_calc_button' : 
                state.width && state.height ? openWindow() : showMessage(trigger);
                break;
            case 'popup_calc_profile_button' : 
                state.profile ? openWindow() : showMessage(trigger);
                break;
            default: 
                openWindow();
                break;
        }
    } else {
        openWindow();
    }
}; 

export default validateForms;