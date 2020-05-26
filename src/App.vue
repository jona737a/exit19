<template>
  <div id="app">
    <nav >
      <div id="menuToggle">
        <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
    <ul id="menu">
      <router-link id="link" to="/minSkole"><li>MIN SKOLE</li></router-link>
      <router-link id="link" to="/retningslinjer"><li>RETNINGSLINJER</li></router-link>
      <router-link id="link" to="/sundhedsstyrelsen"><li>INFO FRA SUNDHEDSSTYRRELSEN</li></router-link>
      <router-link id="link" to="/infoGrafik"><li>DOWNLOAD GRAFISK MATERIALE</li></router-link>
      <router-link id="link" to="/about"><li>OM OS</li></router-link>
    </ul>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./scss/variables.scss";
@font-face {
  font-family: 'TommyBold';
  src:  url(assets/fonts/MADEtommyBold.otf) format("opentype");
}



*{
  margin: 0;
}

h3{
 font-family: TommyBold;
}

html{
  background-color: #f6f4f0;
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
  top: 40px;
  left: 85%;
  z-index: 4;
  user-select: none;
}






#menuToggle input{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  opacity: 0; 
  z-index: 4; 
  
  
}


#menuToggle span{
  display: block;
  width: 26.5px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: map-get($map: $BW, $key: black);
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
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
  transform: rotate(45deg) translate(-2px, -1px);
  background: #fcc030;
}


#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}


#menuToggle input:checked ~ span:nth-last-child(2){
  transform: rotate(-45deg) translate(0, -1px);
}


#menu{
  position: fixed;
  width: 100%;
  height: 120vh;
  margin-top: -100px;
  
  background: #ea4c8b;
  list-style-type: none;
  transform-origin: 0% 0%;
  transform: translate(15%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

#menu li
{
  padding: 20px 0;
  font-size: 4.5vw;
}


#menuToggle input:checked ~ ul
{
  transform: translateX(-85%);
}
</style>
