//  Burger

const burgerNav = document.querySelector(".burger-nav")
const burgerNavBtns = burgerNav.querySelectorAll("a")
const burgerBtn = document.querySelector(".burger")
const logoDiv = document.querySelector(".logo")
const blackBurger = document.querySelector(".black-burger")

const burgerBtnActiveClass = "burger-active"
const burgerActiveClass = "burger-nav-unvis"
const displayNoneBurger = "burger-nav-none"
const logoActiveClass = "logo-active"
const blackBurgerActiveClass = "black-burger-active"

burgerBtn.addEventListener("click", () => {
  if(document.body.style.overflow == 'auto' || document.body.style.overflow == '') {  
    document.body.style.overflow = 'hidden'
  } else {    
    document.body.style.overflow = 'auto'
  }
    burgerBtn.classList.toggle(burgerBtnActiveClass)
    burgerNav.classList.toggle(burgerActiveClass)
    logoDiv.classList.toggle(logoActiveClass)
    blackBurger.classList.toggle(blackBurgerActiveClass)
    if(!burgerNav.classList.contains(displayNoneBurger)) {
        setTimeout(function() {burgerNav.classList.add(displayNoneBurger)
          blackBurger.classList.add(displayNoneBurger)}, 500)
    } else {
        burgerNav.classList.remove(displayNoneBurger)
        blackBurger.classList.remove(displayNoneBurger)
    }
}) 

burgerNavBtns.forEach((btnNav) => {
    btnNav.addEventListener("click", () => {
      document.body.style.overflow = 'auto'
        burgerBtn.classList.toggle(burgerBtnActiveClass)
        burgerNav.classList.toggle(burgerActiveClass)
        logoDiv.classList.toggle(logoActiveClass)
        blackBurger.classList.toggle(blackBurgerActiveClass)
        if(!burgerNav.classList.contains(displayNoneBurger)) {
            setTimeout(function() {burgerNav.classList.add(displayNoneBurger)
              blackBurger.classList.add(displayNoneBurger)}, 500)
        } else {
            burgerNav.classList.remove(displayNoneBurger)
            blackBurger.classList.remove(displayNoneBurger)
        }
    }) 
})

document.querySelector('.black-burger').addEventListener('click', () => {
  burgerBtn.classList.remove(burgerBtnActiveClass)
  burgerNav.classList.remove(burgerActiveClass)
  logoDiv.classList.remove(logoActiveClass)
  blackBurger.classList.remove(blackBurgerActiveClass)
  if(!burgerNav.classList.contains(displayNoneBurger)) {
      setTimeout(function() {burgerNav.classList.add(displayNoneBurger)}, 500)
      setTimeout(function() {blackBurger.classList.add(displayNoneBurger)}, 500)
  } else {
      burgerNav.classList.remove(displayNoneBurger)
      blackBurger.classList.remove(displayNoneBurger)
  }
  if(document.body.style.overflow == 'auto') {  
    document.body.style.overflow = 'hidden'
  } else {    
    document.body.style.overflow = 'auto'
  }
  document.body.style.overflow = 'auto'
})

//data

const data = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

// Popup

function closePopup() {
  document.body.removeChild(document.querySelector('.popup'))
  document.body.removeChild(document.querySelector('.black-popup'))
  
  BTNS_LEARNMORE = [document.querySelector('.table-active').childNodes[1], 
    document.querySelector('.table-active').childNodes[3], 
    document.querySelector('.table-active').childNodes[5]]
  BTNS_LEARNMORE.forEach((elem) => {
    elem.addEventListener('click', openPopup)
  })
  document.body.style.overflow = 'auto'
}

function openPopup() {
  let blockBlackTemp = document.createElement('div')
  blockBlackTemp.classList.add('black-popup')
  let blockPopupTemp = document.createElement('div')
  blockPopupTemp.classList.add('popup')
  
  let petsName = this.childNodes[3].innerHTML
  let infoPet = {}  
  for(let i = 0; i < data.length; ++i) {
    if(data[i].name === petsName) {
      Object.assign(infoPet, data[i])
      break
    }
  }

  blockPopupTemp.innerHTML= `
      <div class="btn-popup-exit"></div>
      <div class="popup-photo"></div>
      <div class="popup-info-block">
          <h4>` + petsName + `</h4>
          <p class="popup-type-pet">` + infoPet.type + ' - ' + infoPet.breed + `</p>
          <p class="popup-text">` + infoPet.description + `</p>
          <ul class="popup-list">
              <li><strong>Age:</strong> ` + infoPet.age + `</li>
              <li><strong>Inosulations:</strong> ` + infoPet.inoculations.join(', ') + `</li>
              <li><strong>Diseases:</strong> ` + infoPet.diseases.join(', ') + `</li>
              <li><strong>Parasites:</strong> ` + infoPet.parasites.join(', ') + `</li>
          </ul>
      </div>`

  document.body.appendChild(blockBlackTemp)
  document.body.appendChild(blockPopupTemp)

  document.querySelector('.popup-photo').style.backgroundImage = 'url(' + infoPet.img + ')'

  document.body.style.overflow = 'hidden'

  document.querySelector('.btn-popup-exit').addEventListener('click', closePopup)

  document.querySelector('.black-popup').addEventListener('click', closePopup)
  document.querySelector('.black-popup').addEventListener('mouseenter', () => {
    document.querySelector('.btn-popup-exit').classList.add('btn-popup-exit-color')
  })
  document.querySelector('.black-popup').addEventListener('mouseleave', () => {
    document.querySelector('.btn-popup-exit').classList.remove('btn-popup-exit-color')
  })
}
let BTNS_LEARNMORE = [document.querySelector('.table-active').childNodes[1], 
document.querySelector('.table-active').childNodes[3], 
document.querySelector('.table-active').childNodes[5]]

BTNS_LEARNMORE.forEach((elem) => {
  elem.addEventListener('click', openPopup)
})


//  Pets

  const BTN_LEFT = document.querySelector(".button-left")
  const BTN_LEFT320 = document.querySelector(".btn-left-320")
  const BTN_RIGHT = document.querySelector(".button-right")
  const CAROUSEL = document.querySelector(".carousel")
  const ITEM_LEFT = document.querySelector(".table-left")
  const ITEM_RIGHT = document.querySelector(".table-right")

  const moveLeft = () => {
    for(let i = 1; i <= 5; i += 2) {
      document.querySelector(".table-left").childNodes[i].childNodes[1].style.backgroundImage = "url(" + data[randomArr[Math.trunc(i / 2)]]["img"] + ")"
      document.querySelector(".table-left").childNodes[i].childNodes[3].innerHTML = data[randomArr[Math.trunc(i / 2)]]["name"]
    }
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft)
    BTN_LEFT320.removeEventListener("click", moveLeft)
    BTN_RIGHT.removeEventListener("click", moveRight)

  };
  
  const moveRight = () => {
    for(let i = 1; i <= 5; i += 2) {
      document.querySelector(".table-right").childNodes[i].childNodes[1].style.backgroundImage = "url(" + data[randomArr[Math.trunc(i / 2)]]["img"] + ")"
      document.querySelector(".table-right").childNodes[i].childNodes[3].innerHTML = data[randomArr[Math.trunc(i / 2)]]["name"]
    }
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft)
    BTN_LEFT320.removeEventListener("click", moveLeft)
    BTN_RIGHT.removeEventListener("click", moveRight)
    
  };
  
  BTN_LEFT.addEventListener("click", moveLeft)
  BTN_LEFT320.addEventListener("click", moveLeft)
  BTN_RIGHT.addEventListener("click", moveRight)

  let randomArr = [5, 6, 7]

  let generateRandom = function(arr) {
    let res = []
    while(res.length != 3) {
      let temp = Math.floor(Math.random() * 8)
      if(!res.includes(temp) && !arr.includes(temp)) {
        res.push(temp)
      }
    }
    return res
  }

  const createCardTemplate = (n) => {
    const card = document.createElement("div")
    card.classList.add("pet-card")
    card.classList.add("pet-" + n)
    return card
  }

  CAROUSEL.addEventListener("animationend", (animationEvent) => {
    let changedItem
    randomArr = generateRandom(randomArr)

    if (animationEvent.animationName === "move-left") {
      
      CAROUSEL.classList.remove("transition-left")
      changedItem = ITEM_LEFT
      document.querySelector(".table-active").innerHTML = ITEM_LEFT.innerHTML
    } else {
      
      CAROUSEL.classList.remove("transition-right")
      changedItem = ITEM_RIGHT
      document.querySelector(".table-active").innerHTML = ITEM_RIGHT.innerHTML
    }
  
  BTN_LEFT.addEventListener("click", moveLeft)
  BTN_LEFT320.addEventListener("click", moveLeft)
  BTN_RIGHT.addEventListener("click", moveRight)
  
  BTNS_LEARNMORE = [document.querySelector('.table-active').childNodes[1], 
      document.querySelector('.table-active').childNodes[3], 
      document.querySelector('.table-active').childNodes[5]]
    BTNS_LEARNMORE.forEach((elem) => {
      elem.addEventListener('click', openPopup)
    })
})
