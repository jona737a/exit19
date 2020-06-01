<template>
    <div>
       
        <div class="container">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <h1>VÆLG SKOLE</h1>
                
                    <v-select
                        :items="schools"
                        label="Outlined style"
                        outlined
                    ></v-select>
                
                <router-link to="/"> 
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
      schools: ['Ehversakademi Sydvest Esbjerg', 'Ehversakademi Sydvest Sønderborg', 'UC Syd Esbjerg', 'Esbjerg Gymnasium'],
    }),
}
</script>
<style lang="scss" scoped >
@import "./../scss/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


    .container{
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 0;
        background-color: map-get($map: $blue, $key: tertiary);

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
     h1{
      font-family: 'Playfair Display', serif;
      margin-top: -200vw;
      font-size: 5vw;
      color: map-get($map: $blue, $key: primary);
    }
  }

  #schools{
      border: none;
      background-color: map-get($map: $red, $key: primary);
      position: relative;
  }

  #button{
    width: 22vw;
    height: 8vw;
    position: absolute;
    z-index: 4;
    display: flex;
    margin: 0;
    transform: translate(-7vw, 5vw);
    h4{
      font-family: TommyLight;
      z-index: 5;
      width: 20vw;
      height: 6vw;
      position: absolute;
      background-color: map-get($map: $red, $key: primary);
      color: map-get($map: $BW, $key: black);
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
  }

  
</style>