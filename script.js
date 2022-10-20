const inner = document.querySelector('.inner')
const intro = document.querySelector('.intro')
const enter = document.querySelector('.btn');
const input = document.querySelector('.input');
const container = document.querySelector('.container')
const timer = document.querySelector('.timer')
const title = document.querySelector('.name')
const day = document.querySelector('.days')
const hours= document.querySelector('.hours')
const minutes= document.querySelector('.minutes')
const seconds= document.querySelector('.seconds')
const theDay = document.querySelector('.d-day')






const d1 = new Date()
const d2 = new Date(2022, 10, 26, 00)
const time = d2- d1 
const days = Math.floor(time/(1000 * 60 * 60 * 24))
timer.innerHTML = `${days} days`
if(days == 1){
  timer.innerHTML = `a day`
}
theDay.classList.add('day-hidden')
if(days <= 0){
  theDay.classList.remove('day-hidden')
  intro.classList.add('day-hidden')
  container.classList.add('day-hidden')
}

enter.addEventListener('click', function(e){
  e.preventDefault()
    if(input.value !== ''){
        intro.style.display = 'none'
        container.style.display = 'contents'
        intro.style.height = "0"
        title.innerHTML= input.value
        input.value = ''
    }else{
        container.style.display = 'none'
    }
})


const date = new Date('Nov 26, 2022 00:00:00').getTime()


const timers = setInterval(function(){
    const now = new Date().getTime()
    const diff = date - now
const days = Math.floor(diff / (1000 * 60 * 60 * 24))
const hours = Math.floor((diff %(1000 * 60 * 60 *24 )) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60));
const seconds = Math.floor((diff %(1000 * 60 )) / 1000 );

document.getElementById("demo").innerHTML = days + 'd ' + hours + 'h '+ ": " + minutes + 'm ' + ": " +  seconds + 's'
}, 1000) ;

//Reveal Animation
const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer){
  const [entry] = entries

  if(!entry.isIntersecting)return;

  entry.target.classList.remove('section--hidden')

  observer.unobserve(entry.target)
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root:null,
  threshold: 0
})
allSections.forEach(function(section){
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})