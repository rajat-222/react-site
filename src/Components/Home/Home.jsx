import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
const Home = () => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);
  
  function lerp(n1, n2, speed) {
    return (1 - speed) * n1 + speed * n2;
  }
  
  function angle(from, to) {
    return Math.atan2(
      to[1] - from[1],
      to[0] - from[0]
    );
  }
  
  // function distance(from, to) {
  //   return Math.sqrt(
  //     Math.pow(to[0] - from[0], 2),
  //     Math.pow(to[1] - from[1], 2)
  //   );
  // }
  
  function distNorm(from, to, xMax, yMax) {
    return Math.sqrt(
      Math.pow((to[0] - from[0]) / xMax, 2),
      Math.pow((to[1] - from[1]) / yMax, 2)
    );
  }
  
  Array.prototype.lerp = function(target, speed) {
    this.forEach((n, i) => this[i] = lerp(n, target[i], speed));
  };
  
  class Frame {
    constructor(node) {
      this.node = node;
      this.scale = 1;
      this.maxScale = 1.25;
      this.rotation = [0, 0, 0];
      this.translation = [0, 0, 0];
      this.center = [0, 0];
      this.target = [
        0.5 * window.innerWidth,
        0.5 * window.innerHeight
      ];
      this.padding = [
        0.5 * this.node.clientWidth,
        0.5 * this.node.clientHeight
      ];
      this.focus = false;
      this.mouseover = false;
      this.distance = 0;
      this.node.addEventListener('mousemove', this.hover.bind(this));
      this.node.addEventListener('mouseleave', this.hover.bind(this));
      this.setCenter();
    }
    setCenter() {
      let rect = this.node.getBoundingClientRect();
      this.center[0] = rect.left + this.padding[0];
      this.center[1] = rect.top + this.padding[1];
      return this;
    }
    setTarget(target) {
      this.target[0] = target[0];
      this.target[1] = target[1];
      return this;
    }
    setDistance() {
      this.distNorm = distNorm(this.center, this.target, window.innerWidth, 0.5 * window.innerHeight);
      return this;
    }
    translate() {
      this.translation.lerp([
        0,
        0,
        this.mouseover ? 300 : 200 - this.distNorm * 400
      ], 0.15);
      return this;
    }
    rotate() {
      let theta = angle(this.center, this.target);
      this.rotation.lerp([
        Math.sin(-theta) * 60 * this.distNorm,
        Math.cos(theta) * 90 * this.distNorm
      ], 0.15);
      return this;
    }
    update() {
      this.node.style.transform = `
        translate3d(${this.translation[0]}px,${this.translation[1]}px,${this.translation[2]}px) 
        rotateX(${this.rotation[0]}deg) rotateY(${this.rotation[1]}deg)
      `;
    }
    hover(e) {
      this.mouseover = e.type === 'mousemove';
    }
  }
  
  class Gallery {
    constructor() {
      this.container = $('.gallery');
      this.center = [
        0.5 * window.innerWidth,
        0.5 * window.innerHeight
      ];
      this.mouse = this.center.slice(0);
      this.target = this.mouse.slice(0);
      this.container.addEventListener('mousemove', this.hover.bind(this));
      this.container.addEventListener('mouseleave', this.hover.bind(this));
      window.addEventListener('resize', this.resize.bind(this));
      this.initFrames();
      this.update();
    }
    initFrames() {
      this.frames = [];
      $$('.frame').forEach(node => this.frames.push(new Frame(node)));
    }
    resize() {
      this.center = [
        0.5 * window.innerWidth,
        0.5 * window.innerHeight
      ]
      this.frames.forEach(frame => frame.setCenter());
    }
    hover(e) {
      this.mouseover = e.type === 'mousemove';
      this.target[0] = e.clientX;
      this.target[1] = e.clientY;
    }
    update() {
      this.mouse.lerp(
        this.mouseover ? this.target : this.center, 
        0.125
      );
      this.frames.forEach(frame => {
        frame.setTarget(this.mouse)
          .setDistance()
          .translate()
          .rotate()
          .update();
      });
      this.container.style.perspectiveOrigin = `${this.mouse[0]}px 50%`;
      window.requestAnimationFrame(this.update.bind(this));
    }
  }
  
  const gallery = new Gallery();

  ;(function () {
    let card  = document.getElementsByClassName('card')[0],
        moved = 0,
        interval;

    if (!card) return;
    
    card.addEventListener('click', function (event) {
        clearInterval(interval);
        card.style.transform = '';
        
        // Do not flip the card if the user is trying to
        // tap a link.
        if (event.target.nodeName === 'A') {
            return;
        }
        
        let cName   = card.getAttribute('data-toggle-class');
        let toggled = card.classList.contains(cName);
        card.classList[toggled ? 'remove' : 'add'](cName);
    });
    
    interval = setInterval(function () {
        moved = moved ? 0 : 10;
        card.style.transform = 'translateY(' + moved + 'px)';
    }, 1500);
})();















const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
	"About",
	"Microsoft",
	"Technical",
	"Community",

];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)})`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)})`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.
animate();

  

  return (
    <>
        <main>
        <section className="container section-1">
        <div className="slogan">
            <div className="headingcontainer">
              <br/>
              <br/>
              <br/>
              
              <br/>
              <br/>
              <br/>
              
                {/* <!--<h1>Microsoft <span className="txt-type" data-wait="3000" data-words='["Technical Community"]'></span></h1>--> */}
                <span>
                  Microsoft Technical Community
                </span>
                <br/>
                <h2><b>Technology is making people's lives easier.
                    We, here at MTC are, constantly
                    Innovating, Inventing and Improvising.</b></h2>

                    <br/>
                    <br/>
              
                    <div className="containerbtn">
                      <Link to='#about'><button>About US</button></Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button><Link to='#about'>event</Link></button>
                    </div> 

              </div>
        </div>


        <div className="home-computer-container">
       {/* <!--   <img className="home-computer" src="https://github.com/r-e-d-ant/Computer-store-website/blob/main/assets/images/home_img.png?raw=true" alt="a computer in dark with shadow" className="home-img">--> */}
       <div className="logo-container">
        <h1 id="page-logo">     <img src={require('./images/Mtc.png')}/></h1>
      </div>
    </div>

  <section className="logobox">
    <section className="wrapper">
        <div className="one"></div>
        <div className="one1"></div>
         <div className="one2"></div>
         <div className="one3"></div>
        <div className="one4"></div>
         <div className="one5"></div>
         <div className="one6"></div>
        <div className="one7"></div>
         <div className="one8"></div>
        <div className="one9"></div>
         <div className="one10"></div>
         <div className="one11"></div>
         <div className="one12"></div>
         <div className="one13"></div>
         <div className="one14"></div>
         <div className="one15"></div>
         <div className="one16"></div>
         <div className="one17"></div>
        <div className="one18"></div>
        <div className="one19"></div>
        <div className="one20"></div>
 
        </section>
        </section>

<div className="area" >
  <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>              <li></li>
          <li></li>
          <li></li>
          <li></li>
  </ul>
</div > 
</section>

<section id="about" className="about">


<div className="abtimg">
<img src={require('./images/back.JPG')} alt="" style={{width:600, height:500}}/>
</div>

<div className="abttxt">
  <h1><strong>ABOUT US</strong></h1>
</div>



<div className="abtmtc">
  Microsoft Technical Community was established in February 2018 <br/>with the vision of “Innovating, Inventing and Improvising” to educate fellow <br/>computer science 
  enthusiasts about various aspects of the technical world.<br/> The goal was and is to create professionals out of amateurs and <br/>to teach not just 
  Microsoft technologies but anything that is required <br/> for students to excel in their careers.
   We have come a long way since then, <br/>and still have many more goals to reach..</div>


<div className="mtcc">
  Microsoft Technical Community only focuses on technical events<br/> and approaches them with complete professionalism.<br/>
   ‘Pathshala’ sessions, ‘Career Pathway’ sessions, ‘Buggymania’<br/> and ‘Career Drive’our main flagship event are just some of the events<br/> we conduct over a year
    with the sole purpose of creating better<br/> IT professionals. The team at Microsoft Technical Community is full of <br/>hard-working and professional individuals,
     who are always<br/> learning and teaching something new.
</div>
</section>

<section id="pastsection">

           
        <center>
          <br/>
          <h1 style={{fontSize: 100, color: `rgb(0, 0, 0)`}}><b>Our Past Event</b></h1>  
            </center>
  
        <div className="gallery-container">
          <div className="gallery" onClick={()=> gallery()}>
           

            <div className="frame"><img className="image" src={require('./images/1.jpeg')} />
              <br/>
              <div className="info">Java Pathsala</div>
            </div>

            <div className="frame"><img className="image" src={require('./images/2.png')}/>
              <div className="info">Codivent</div>
            </div>

            <div className="frame"><img className="image" src={require('./images/3.png')}/>
              <br/>
              <div className="info">&nbsp;&nbsp;&nbsp;Qurantime &nbsp;&nbsp;&nbsp;Programmer</div>
            </div>

            <div className="frame"><img className="image" src={require('./images/4.png')}/>
              <br/>
              <div className="info">Web-Portfolio</div>
            </div>
            <div className="frame"><img className="image" src={require('./images/5.png')}/>
              <br/>
              <div className="info">Buggymania 2.0</div>
            </div>

            <div className="frame"><img className="image" src={require('./images/6.png')}/>
              <br/>
              <div className="info">Infosec Talk</div>
            </div>

            <div className="frame"><img className="image" src={require('./images/7.png')}/>
              <br/>
              <div className="info">C++ Paathshala</div>
            </div>

            <div className="frame"><img className="image" src={require('./images/8.jpg')}/>
              
              <div className="info">Cloud Computing</div>
            </div>

         
          </div>
        </div>

      
        <div className="pastbg">
          <img src={require('./images/past_full_bg.png')} alt="..." />
        </div>
</section>
<section className="sponsorsection">

          <center>
            <br/>
          
            <br/>
            <br/>
        <h1 style={{fontSize: 100,color: `rgb(15, 15, 134)`}}><b>Our Sponsor</b></h1> 
        </center> 

        <br/>
        <br/>
        
<div className="sponsorbox1">
<img src={require('./images/10.png')} style={{height:210}}/>
<div className="sponsortxt">
  <h4 style={{color: `rgb(15, 15, 134)`, fontSize: 30, fontWeight: 900}}><br/>Coding Ninja </h4>Coding Ninjas is a place that trains passionate people in various technologies. Our core programs are intensive, immersive training that transforms people into outstanding developers. The training is provided by expert faculties who have graduated from esteemed Universities such as Stanford, IITs and IITs. They have valuable teaching experience and extensive knowledge which they share with students to guide them in becoming a great programmer or a developer."</div>
</div>


<br/>
<br/>


<div className="sponsorbox1">
  <img src={require('./images/40.png')} style={{height:210}}/>
  <div className="sponsortxt">
    <br/>
    <h4 style={{color: `rgb(15, 15, 134)`, fontSize: 30, fontWeight: 900}}>Zuno </h4><br/>Zuno is a platform that offers paid internships and jobs for freshers. With thousands of openings on our platform, we are on our way to helping students and fresh graduates find the right career opportunities to kickstart their careers.</div>
  </div>


<br/>
<br/>


  <div className="sponsorbox1">
    <img src={require('./images/20.png')} style={{height:210}}/>
    <div className="sponsortxt">
      <br/>
      <h4 style={{color: `rgb(15, 15, 134)`, fontSize: 30, fontWeight: 900}}>Microsoft </h4><br/>Microsoft Corporation is an American multinational technology company that develops, licenses, and sells computer software, consumer electronics, and personal computers. It is best known for its Windows operating system, Microsoft Office Suite, and Xbox gaming console.</div>
    </div>


<br/>
<br/>




    <div className="sponsorbox1">
      <img src={require('./images/30..png')} style={{height:210}}/>
      <div className="sponsortxt">
        <h4 style={{color: `rgb(15, 15, 134)`, fontSize: 30, fontWeight: 900}}><br/>Wayspire </h4><br/>
        
"WAYSPIRE ED-TECH PVT LTD is a dedicated E-learning platform to creating a community of lifelong learners. An E-learning platform with the goal of competence to students for the workforce and assisting you in landing your desired Job/ University.</div>
      </div>
      </section>

      

</main>
    </>
  );
}

export default Home;