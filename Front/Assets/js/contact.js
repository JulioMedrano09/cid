/*=========== EMAIL JS ===========*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_szzc1mo', 'template_jhdretr', '#contact-form', '2XBdO_bvanGMu1wQQ')
        .then(() =>{
            // Show sent messages
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove messages after five seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () =>{
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)