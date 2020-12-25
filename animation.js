
var barr = document.getElementById('barr')

var home = document.getElementById('home')
var about = document.getElementById('about')
var expertise = document.getElementById('expertise')
var team = document.getElementById('team')
var works = document.getElementById('works')
var peopleSay = document.getElementById('peopleSay')
var contact = document.getElementById('contact')

var display = true
var screenWidth = screen.availWidth
/*barr.addEventListener('click', function(){
	if(display == false){
		display = true
		home.style.display = 'block'
		about.style.display = 'block'
		expertise.style.display = 'block'
		team.style.display = 'block'
		works.style.display = 'block'
		peopleSay.style.display = 'block'
		contact.style.display = 'block'
	}
	else if(display == true){
		display = false;
		home.style.display = 'none'
		about.style.display = 'none'
		expertise.style.display = 'none'
		team.style.display = 'none'
		works.style.display = 'none'
		peopleSay.style.display = 'none'
		contact.style.display = 'none'
	}
});
*/
window.onload = function(){
		barr.onclick = function(){

		if(display == true){
		display = false;
				home.classList.remove('active')
			about.classList.remove('active')
			expertise.classList.remove('active')
			team.classList.remove('active')
			works.classList.remove('active')
			peopleSay.classList.remove('active')
			contact.classList.remove('active')
		}
		else if(display == false){
		display = true
			home.classList.add('active')
			about.classList.add('active')
			expertise.classList.add('active')
			team.classList.add('active')
			works.classList.add('active')
			peopleSay.classList.add('active')
			contact.classList.add('active')
		}
	}

}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}