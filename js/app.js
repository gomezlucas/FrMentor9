eventListerners();


function eventListerners() {
    let ui = new UI()
    //navbar button
    document.querySelector('.navbar-button').addEventListener('click', function () {
        ui.navbarClick()
    })
    //features Selector
    document.querySelector(".features-list").addEventListener("click", function (event) {
        event.preventDefault()
        ui.featureClick(event)
    // accordion
    })
    let accordion = document.querySelectorAll(".question-acordion")
    console.log(accordion)
    for ( let i = 0 ;  i < accordion.length; i++){ 
    accordion[i].addEventListener("click", function(){
       let self = this;
        ui.questionClick(self)
    })
    }
    //Email validation
    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        console.log("asdfsdf")
        ui.submitForm(event)
    })

}

//constructor function UI 
function UI() { };
//UI methods
UI.prototype.navbarClick = function () {
    let value = document.querySelector('.navbar-button')
    let navbar = document.querySelector('.navbar')
    let logoImg = document.querySelector('.container-svg')
    console.log(logoImg)
    if (value.classList.contains("change")) {
        console.log('contiene')
        value.classList.remove("change");
        navbar.classList.remove("navbar-show");
        logoImg.classList.remove("white")
    } else {
        value.classList.add("change");
        navbar.classList.add("navbar-show");
        logoImg.classList.add("white")
    }
}
//features
UI.prototype.featureClick = function (event) {
    let value = event.target.parentNode
    
    if (value.classList.contains("item1")) {

        document.querySelector("#item1").classList.add("item1-show")
        document.querySelector('.item1').classList.add("redBorder")
        document.querySelector('.item2').classList.remove("redBorder")
        document.querySelector('.item3').classList.remove("redBorder")
        document.querySelector("#item1").animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
        document.querySelector("#item2").classList.remove("item2-show")
        document.querySelector("#item3").classList.remove("item3-show")
    } else if (value.classList.contains("item2")) {
        document.querySelector("#item1").classList.remove("item1-show")
        document.querySelector("#item2").classList.add("item2-show")
        document.querySelector("#item2").animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
        document.querySelector('.item1').classList.remove("redBorder")
        document.querySelector('.item2').classList.add("redBorder")
        document.querySelector('.item3').classList.remove("redBorder")
        document.querySelector("#item3").classList.remove("item3-show")
    } else if (value.classList.contains("item3")) {
        document.querySelector("#item1").classList.remove("item1-show")
        document.querySelector("#item2").classList.remove("item2-show")
        document.querySelector("#item3").classList.add("item3-show")
        document.querySelector("#item3").animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
        document.querySelector('.item1').classList.remove("redBorder")
        document.querySelector('.item2').classList.remove("redBorder")
        document.querySelector('.item3').classList.add("redBorder")
    }
}

//question 
UI.prototype.questionClick = function (self) {
    let panel = self.nextElementSibling
    let icon = self.children[0]
    let color = self.children[0].children[0]
    console.log(color)
    icon.classList.toggle("active")
   
    if (panel.style.display ===  "block"){
        color.style.stroke = '#5267DF';
        panel.style.display = "none"
    }else{
        color.style.stroke = " var(--softRed)";
        panel.style.display = "block"
    }    
}
// Email validation
UI.prototype.submitForm = function (event) {
    event.preventDefault()

    let value = document.querySelector(".contact-email").value
    let input = document.querySelector(".contact-email")
    let feedback = document.querySelector(".invalid-feedback")
    let feedbackIcon = document.querySelector('.feedback-icon')


    console.log(value)
    if (value.indexOf("@") === -1 || value.indexOf('.') === -1 || !value) {
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
        feedback.style.display = "block"
        feedback.innerHTML = "Whoops, make sure it's an email"
        feedbackIcon.style.display = "block"
        feedbackIcon.innerHTML = `<img src="./images/icon-error.svg"> `
    
    } else {
        feedback.style.display = "none"
        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
        feedbackIcon.innerHTML = ''
        feedback.innerHTML = ''
        console.log("encontro");

    }

}