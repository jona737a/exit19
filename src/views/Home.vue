<template>

  <div>
    <div id="top">
      <p>IGEN</p>
      <h2>SAMMEN</h2><h2 id="Hver">HVER FOR SIG</h2>
    </div>
    <div class="home">
      <div class="minSkole container">
        <h3>MIN SKOLE</h3>
        <div id="back"></div>
        <div id="middle"></div>
        <div id="front">

        </div>
      </div>
      <div class="retningslinjer container">
        <h3>RETNINGSLINJER</h3>
        <div id="back"></div>
        <div id="middle"></div>
        <div id="front">

        </div>
      </div>
      <div class="sundhedsstyrelsen container">
        <h3>INFO FRA SUNDHEDSSTYRELSEN</h3>
        <div id="back"></div>
        <div id="middle"></div>
        <div id="front">

        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  
}
</script>
<style lang="scss">
@import "./../scss/variables.scss";
  #top{
    width: auto;
    height: 80vh;
    background-color: map-get($map: $yellow, $key: secondary);
    margin: 0;
    padding: 10px; 
    display: flex;
    align-items: center;
    justify-content: center;
    p{
      font-family: TommyBold;
      font-size: 5vw;
      color: map-get($map: $BW, $key: black);
      transform: translate(3vw, -7vw)
                  rotate(-20deg);
      position: absolute;
    }
    h2{
      font-family: TommyBold;
      font-size: 5vw;
      margin-left: 2vw;
      color: map-get($map: $BW, $key: black);
    }
    #Hver{
      text-decoration: line-through map-get($map: $BW, $key: black);
      
    }
  }
  h3{
    font-size: 4vw;
    position: relative;
    z-index: 3;
    color: map-get($map: $BW, $key: black);
  }
 .home{
    transform: translateY(-300px);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    height: 550vw;
  }

  .container{
    width: 100%;
    height: 600px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
      margin-top: -125%;
      position: relative;
    }
  }

  #front{
    width: 70%;
    padding-top: 85%;
    position: absolute; 
    z-index: 3;
  }

  #middle{
    width: 70%;
    padding-top: 95%;
    
    position: absolute; 
    z-index: 2;
    background-size: cover;
  }

  #back{
    width: 70%;
    padding-top:110%;
    
    position: absolute; 
    z-index: 1;
   
  }
  .minSkole{
    #front{
      background-color: map-get($map: $yellow, $key: secondary);
      transform: translate(0,0);
    }
    #middle{
      
      background-color: map-get($map: $yellow, $key: tertiary);
      transform: translate(-8vw,0);
    }
    #back{
      background-color: map-get($map: $yellow, $key: primary);
      transform: translate(5vw,0);
    }
  }

  .retningslinjer{
    #front{
      background-color: map-get($map: $red, $key: primary);
      transform: translate(0,0);
    }
    #middle{
      transform: translate(8vw,0);
      background-color: map-get($map: $red, $key: secondary);
    }
    #back{
      background-color: map-get($map: $red, $key: tertiary);
      transform: translate(-5vw,0);
    }
  }

  .sundhedsstyrelsen{
    #front{
      background-color: map-get($map: $blue, $key: primary);
      transform: translate(0, 0);
    }
    #middle{
      background-color: map-get($map: $blue, $key: tertiary);
      transform: translate(-8vw,0);
    }
    #back{
      background-color: map-get($map: $blue, $key: secondary);
      transform: translate(5vw,0);
    }
  }

  
</style>
