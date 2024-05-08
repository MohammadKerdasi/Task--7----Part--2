function imgSlider(thing) {
    document.querySelector(".phones").src = thing ;
}

function changeBgColor(color) {
    const bg = document.querySelector(".slider-bg");
    bg.style.background = color ;
}

let icons = document.querySelectorAll(".icons li");
let counter = [...new Array (icons.length).keys()];

let autoslide = setInterval(() => {
    let index = counter.shift();
    counter.push(index);
    icons[index].click();


}, 3000)

const stopSlide = () => {
    clearInterval(autoslide)
};

function toggle(e){
    if(e.isTrusted)
        {
            stopSlide();
        
        }

        const oldIcons = document.querySelectorAll(".icons li");
        oldIcons.forEach((icons) => icons.classList.remove("active"));

        this.classList.add("active");

        const img = this.children[0].src;
        imgSlider(img);


        const color = this.children[0].dataset.color;
        changeBgColor(color);

const num = this.dataset.num;
let current = Number(num);
counter = [...new Array(icons/length).keys()];

counter = counter.map((item) =>{
    let total = item = current;
    if (total >= icons.length)
        {
            total = total - icons.length;
        }
return total;
    });
    counter.shift();

    if(e.isTrusted){
        autoslide = setInterval(() =>{
            let index = counter.shift();
            counter.push(index);
            icons[index].click();
        },3000)
    }

}

icons.forEach((icon) =>{
    icon.addEventListener("click", toggle)
})




const modeToggleIcon = document.getElementById('modeToggleIcon');


modeToggleIcon.addEventListener('click', function() {

  document.body.classList.toggle('dark-mode');


  if (document.body.classList.contains('dark-mode')) {
    modeToggleIcon.classList.remove('fa-moon');
    modeToggleIcon.classList.add('fa-sun');
  } else {
    modeToggleIcon.classList.remove('fa-sun');
    modeToggleIcon.classList.add('fa-moon');
  }
});


const accordion =  document.getElementsByClassName('contentBx');

for(i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    }
)
}

var stars = document.querySelectorAll('.star a');

stars.forEach((item, index1)=> {
    item.addEventListener('click' , 
    () => {
                stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add('active') : star.classList.remove ('active')
                })
            })
})










