<template>
  <div id="app">
    
    <nav>
      <router-link id="english" to="/en" v-if="lang == false" ><p @click="lang = true, scroll()">Dansk</p></router-link>
      <router-link id="english" to="/" v-else><p @click="lang = false, scroll()" >English</p></router-link>
      <div id="menuToggle">
        <input id="Check" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
    <ul id="menu" v-if="lang == false">
      <router-link to="/"> <img id="Logo" @click="unCheck(), scroll()" src="./assets/SVG/Logo_orange.svg" alt="Logo" ></router-link>
      <router-link id="link" to="/en/minSkole" ><li @click="unCheck(), scroll()">MY SCHOOL</li></router-link>
      <router-link id="link" to="/en/retningslinjer"  ><li @click="unCheck(), scroll()">GUIDELINES</li></router-link>
      <router-link id="link" to="/en/sundhedsstyrelsen"  ><li @click="unCheck(), scroll()">INFORMATION FROM THE NATIONAL BOARD OF HEALTH</li></router-link>
      <router-link id="link" to="/en/infoGrafik"  ><li @click="unCheck(), scroll()">DOWNLOAD GRAPHICAL MATERIAL</li></router-link>
      <router-link id="link" to="/en/about"  ><li @click="unCheck(), scroll()">ABOUT US</li></router-link>
    </ul>
    <ul id="menu" v-else>
      <router-link to="/"> <img id="Logo" @click="unCheck(), scroll()" src="./assets/SVG/Logo_orange.svg" alt="Logo" ></router-link>
      <router-link id="link" to="/minSkole" ><li @click="unCheck(), scroll()">MIN SKOLE</li></router-link>
      <router-link id="link" to="/retningslinjer"  ><li @click="unCheck(), scroll()">RETNINGSLINJER</li></router-link>
      <router-link id="link" to="/sundhedsstyrelsen"  ><li @click="unCheck(), scroll()">INFO FRA SUNDHEDSSTYRRELSEN</li></router-link>
      <router-link id="link" to="/infoGrafik"  ><li @click="unCheck(), scroll()">DOWNLOAD GRAFISK MATERIALE</li></router-link>
      <router-link id="link" to="/about"  ><li @click="unCheck(), scroll()">OM OS</li></router-link>
    </ul>
    
  </div>
</nav>
<router-link to="/"> <img id="logo" @click="scroll()" src="./assets/SVG/Logo_pink.svg" alt="Logo" ></router-link>
    <router-view/>
    <div id="footer">
      <div id="social">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-youtube"></i>
      </div>
      <div id="contact">
        <p>info@easv.dk</p>
        <p>+ 42352637</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      lang: true,
    }
  },
  methods: {
    unCheck: function() {
       document.getElementById("Check").checked = false;
    },
    scroll: function() {
      window.scrollTo(0, 0);
    },
    
}
}
</script>

<style lang="scss">
@import "./scss/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap');
@font-face {
  font-family: 'TommyBold';
  src:  url(assets/fonts/MADEtommyBold.otf) format("opentype");
}
@font-face {
  font-family: 'TommyLight';
  src:  url(assets/fonts/MADEtommyLight.otf) format("opentype");
}

p{
  font-family: 'roboto';
}
i{
  font-family: 'Playfair Display', serif;
  
}
h1{
  font-family: TommyBold;
  font-size: 7vw;
}
h2{
  font-family: TommyBold;
  font-size: 7vw;
}

*{
  margin: 0;
}

h4{
  font-family: TommyBold;
  font-size: 3.5vw;
}

h3{
 font-family: TommyBold;
}

html{
  background-color: #f6f4f0;
}

#english{
  position: fixed;
  font-size: 3vw;
  text-decoration: none;
  color: map-get($map: $BW, $key: black);
  left: 70%;
  top: 7vw;
  z-index: 10;
  transition: 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}



#link{
  text-decoration: none;
  font-family: TommyBold;
  color: map-get($map: $yellow, $key: primary);
}

#menuToggle
{
  display: block;
  position: fixed;
  top: 7vw;
  left: 85%;
  z-index: 7;
  user-select: none;
}






#menuToggle input{
  display: block;
  width: 7.3vw ;
  height: 5vw;
  position: absolute;
  top: -7px;
  left: -5px;
  opacity: 0; 
  z-index: 7; 
  
  
}

#menuToggle input:checked ~ #english{
  p{ 
    color: map-get($map: $yellow, $key: primary);
  }
  
}
#menuToggle span{
  display: block;
  width: 7vw;
  height: 0.5vw;
  margin-bottom: 1vw;
  position: relative;
  background: map-get($map: $BW, $key: black);
  border-radius: 3px;
  z-index: 1;
  transform-origin: 0px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2){
  transform-origin: 0% 100%;
}


#menuToggle input:checked ~ span{
  opacity: 1;
  transform: rotate(45deg) translate(0, -1.2vw);
  background: map-get($map: $yellow, $key: primary);
}


#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}


#menuToggle input:checked ~ span:nth-last-child(2){
  transform: rotate(-45deg) translate(0, 1.2vw);
}


#menu{
  position: fixed;
  width: 100%;
  height: 120vh;
  margin-top: -100px;
  
  background: map-get($map: $red, $key: primary);
  list-style-type: none;
  transform-origin: 0% 0%;
  transform: translate(15%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  #Logo{
  position: fixed;
  z-index: 11;
  transform:  scale(0.3)
              rotate(-90deg)
              translate(25vw,-320vw);
  
}
}

#menu li
{
  padding: 20px 0;
  font-size: 4.5vw;
  width: 80vw;
  text-align: center;
}


#menuToggle input:checked ~ ul
{
  transform: translateX(-85%);
}

#logo{
  position: fixed;
  z-index: 6;
  transform:  scale(0.3)
              rotate(-90deg)
              translate(-200vw,-150vw);
}


#footer{
  position: absolute;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: -15vw;
  #social{
    font-size: 8vw;
    color: map-get($map: $BW, $key: black);
    width: 40vw;
    display: flex;
    justify-content: space-between;
  }
  #contact{
    margin-top: 2vw;
    display: flex;
    width: 40vw;
    justify-content: space-between;
    color: map-get($map: $BW, $key: black);
    p{
      font-size: 3vw;
    }
  }
}

</style>
