<template>
    <div>
       <router-link id="english" to="/" v-if="lang == false" ><p @click="lang = true">Dansk</p></router-link>
        <router-link id="english" to="/" v-else><p @click="lang = false" >English</p></router-link>
        <div class="container" v-if="lang == false">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <h1>CHOOSE YOUR SCHOOL</h1>
                
                    <div class="selectdiv">
                      <label>
                          <select>
                              <option selected> choose school </option>
                              <option>EASV</option>
                              <option>UC Syd</option>
                              <option>AAU</option>
                              <option>SDU</option>
                          </select>
                          
                      </label>
                      
                    </div>
                
                <router-link to="/en/home">
                    <div id="button">
                        <h4>continue</h4>
                        <div id="shadow"></div>
                    </div>
                </router-link>
                    
            </div>
        </div>  
        <div class="container" v-else>
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <h1>VÆLG SKOLE</h1>
                
                    <div class="selectdiv">
                      <label>
                          <select>
                              <option selected> vælg skole </option>
                              <option>EASV</option>
                              <option>UC Syd</option>
                              <option>AAU</option>
                              <option>SDU</option>
                          </select>
                          
                      </label>
                      
                    </div>
                
                <router-link to="/home">
                    <div id="button">
                        <h4>gå videre</h4>
                        <div id="shadow"></div>
                    </div>
                </router-link>
                    
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    data: () => ({
      lang: true,
      schools: ['Ehversakademi Sydvest Esbjerg', 'Ehversakademi Sydvest Sønderborg', 'UC Syd Esbjerg', 'Esbjerg Gymnasium'],
    }),
}
</script>
<style lang="scss" scoped >
@import "./../scss/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

#english{
  position: absolute;
  z-index: 11;
}

    .container{
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 0;
        background-color: map-get($map: $blue, $key: tertiary);
        position: relative;
        z-index: 10;
    }
  #front{
    width: 70%;
    padding-top: 140%;
    position: relative; 
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/JPG/forside.jpeg");
    background-size: cover;
    height: 0;
    animation: none;
     h1{
      font-family: 'Playfair Display', serif;
      margin-top: -180vw;
      font-size: 6vw;
      padding-left: 1vw;
      margin-bottom: 5vw;
      color: map-get($map: $blue, $key: primary);
    }
  }

  .selectdiv {
  width: 50vw;
  height: 10vw;
  position: relative;  
  float: left;
  border-radius: 0;
  
}


select::-ms-expand {
display: none;
}

.selectdiv:after {
  content: "V";
  font-family: TommyLight;
  font-size: 3vw;
  right: 3.5vw;
  top: 2.5vw;
  color: map-get($map: $BW, $key: white);
  position: absolute;
  pointer-events: none;
}

.selectdiv select {
  font-family: TommyLight;
  appearance: none;
  display: block;
  width: 100%;
  height: 10vw;
  float: right;
  padding-left: 4vw;
  font-size: 4vw;
  line-height: 1.75;
  color: map-get($map: $BW, $key: white);
  background-color: map-get($map: $red, $key: primary);
  background-image: none;
  border: none;
  border-radius: 0;
} 

  #button{
    width: 21vw;
    height: 7vw;
    position: absolute;
    z-index: 4;
    display: flex;
    margin: 0;
    transform: translate(-9.5vw, 5vw);
    h4{
      font-family: TommyLight;
      z-index: 5;
      width: 20vw;
      height: 6vw;
      position: absolute;
      background-color: map-get($map: $red, $key: primary);
      color: map-get($map: $BW, $key: white);
      text-align: center;
      line-height: 6vw;
      box-sizing: border-box;
    } 
    #shadow{
      position: relative;
      z-index: 4;
      width: 19vw;
      height: 6vw;
      background-image: url("../assets/PNG/Prikker Lyserød.png");
      background-size: cover;
      align-self: flex-end;
      margin-left: auto;
      border: 1px solid map-get($map: $red, $key: tertiary);
    } 
  }
    
    
  #middle{
    width: 70%;
    padding-top: 110%;
    position: absolute; 
    z-index: 2;
    background-size: cover;
    background-color: map-get($map: $red, $key: tertiary);
    transform: translate(-8vw,-21vw);
    animation: none;
  }

  #back{
    width: 35%;
    padding-top:170%;
    position: absolute; 
    z-index: 1;
    transform: translate(25vw,0);
    background-image: url("../assets/PNG/Prikker Pink.png");
    background-size: cover;
    border: 3px solid map-get($map: $red, $key: primary);
    animation: none;
  }

  
</style>