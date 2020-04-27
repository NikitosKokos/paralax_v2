var myWave = $('#myID').wavify({
    height: 550,
    bones: 6,
    amplitude: 80,
    color: '#62a6ff',
    speed: .25
  });
  var myWave = $('#svg').wavify({
    height: 50,
    bones: 5,
    amplitude: 100,
    color: '#111',
    speed: .25
  });

  $(window).scroll(function(event){
    
    let s = $(this).scrollTop();
    let w = $(this).outerWidth();
    let h = $(".wrapper").outerHeight();
    let p = s/h*100;
    let t = p;
    if(p > 0){
      h = document.querySelector(".header");
      h.classList.add("header_active");
    }else if(p === 0){
      h = document.querySelector(".header");
      h.classList.remove("header_active");
    }
    // console.log(t);
    // console.log(s);
    console.log(p);
    $(".svg-parallax").css('transform', `translateY(${100-p}%)`)
  });

  setInterval(() => {
    const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh)+ (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss  }deg)`;
  })



