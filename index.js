const headerLogo = document.querySelector('.logo');
const navHoverColor = document.querySelectorAll('.nav-links li')
const navButton = document.querySelector('.nav-button');
const navLinks = document.querySelector('.nav-links')
const formName = document.querySelector('.name')
// const formLastName = document.querySelector('.lastName')
const formEmail = document.querySelector('.email')
const formMessage = document.querySelector('.message')
const loading = document.querySelector('.loading')
const landing = document.getElementById('landing_page')
const about = document.getElementById('about')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')


//remove html from URL

// let homeLink = window.location.href
// let newHome = homeLink.replace('.html', '')
// console.log(`newHome: ${newHome}`)
// window.history.replaceState(null, null, homeLink+".html")
// // window.history.replaceState(null, null, newHome)




const screenLocation = () => {
  const landingLoc = landing.getBoundingClientRect().top;
  const aboutLoc = about.getBoundingClientRect().top;
  const contactLoc = contact.getBoundingClientRect().top;
  const projectsLoc = projects.getBoundingClientRect().top;


  if (landingLoc <= -200) {
    navHoverColor[0].classList.add('active')
    navHoverColor[1].classList.remove('active')
    navHoverColor[2].classList.remove('active')
    navHoverColor[3].classList.remove('active')
  }
  if (aboutLoc <= 200 || aboutLoc*-1 >= -200) {
    navHoverColor[0].classList.remove('active')
    navHoverColor[1].classList.add('active')
    navHoverColor[2].classList.remove('active')
    navHoverColor[3].classList.remove('active')
  }

  if (projectsLoc <= 200 || projectsLoc*-1 >= -200) {
    navHoverColor[0].classList.remove('active')
    navHoverColor[1].classList.remove('active')
    navHoverColor[2].classList.add('active')
    navHoverColor[3].classList.remove('active')
  }
  if (contactLoc <= 200 || contactLoc*-1 >= -200) {
    navHoverColor[0].classList.remove('active')
    navHoverColor[1].classList.remove('active')
    navHoverColor[2].classList.remove('active')
    navHoverColor[3].classList.add('active')
  }
  

  
}

screenLocation();



window.addEventListener('scroll', e => screenLocation())


// navHoverColor.forEach(nav => nav.addEventListener('click', () => {
//   navHoverColor.forEach(nav => nav.classList.remove('active'))
//   nav.classList.add('active')
  
// })
// )


navButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})




let randomizer = (min, max) => Math.floor(Math.random() * (max-min)+1) + min



function logoColorChange() {
  setInterval(() => {
      let randomBckgndColor = `rgba(${randomizer(150,255)}, ${randomizer(150,255)}, ${randomizer(150,255)}, 0.99)`;
      headerLogo.style.setProperty('color', `${randomBckgndColor}`);
    

  }, 3000);
}

const loadEmail = () => {
  console.log("load Email Clicked")
  loading.classList.add('active')
}




const clearFields = () => {
  formName.value = "";
  formEmail.value = "";
  formMessage.value = "Message";
  loading.classList.remove('active')
}

const emailSending = () => {
  loadEmail();
  sendEmail();
}

const sendEmail = async() => {

  
await Email.send({
    Host: 'smtp.elasticemail.com',
    Username: "densesthawk@gmail.com",
    Password: 'F38E11AD4F294EB1387BF2C16E77B159E07A',
    To: 'brianjmorrissey+portfoliowebsite@gmail.com',
    From : 'densesthawk@gmail.com',
    Subject: 'Message from website',
    Body: `
    Name:  ${formName.value} <br />
    Email: ${formEmail.value} <br />
    Message: ${formMessage.value}`,
  })
  .then(
    message => alert(`Thanks, for the note. I'll be in contact shortly!`)
  )
 .then(
    message =>
    clearFields()
  );
}

