<template>

  <div>
    <div id="top">
      <p>IGEN</p>
      <h2>SAMMEN</h2><h2 id="Hver">HVER FOR SIG</h2>
    </div>
    <div class="home">
      <div class="minSkole container">
        <h3>MIN SKOLE</h3>
        <div id="back" ></div>
        <div id="middle"></div>
        <div id="front" data-aos="fade-right">
          <div id="tekst">
            <p>Her kan du læse mere om hvilke forbehold din skole tager i forbindelse med forebyggelsen mod Covid19. </p>
            <p>Oplysningerne vil blive opdateret løbende. </p>
          </div>
          <router-link id="button" to="/minSkole">
            <h4 @click="scroll()">læs mere</h4>
            <div id="shadow"></div>
          </router-link>
        </div>
      </div>
      <div class="retningslinjer container">
        <h3>RETNINGSLINJER</h3>
        <div id="back"></div>
        <div id="middle"></div>
        <div id="front">
          <div id="tekst">
            <p>Her kan du læse om sundhedsstyrelsens retningslinjer, så du er sikker på hvordan du skal færdes i denne tid.</p>
          </div>
          <router-link id="button" to="/retningslinjer">
            <h4 @click="scroll()">læs mere</h4>
            <div id="shadow"></div>
          </router-link>
        </div>
      </div>
      <div class="sundhedsstyrelsen container">
        <h3>INFO FRA SUNDHEDSSTYRELSEN</h3>
        <div id="back"></div>
        <div id="middle"></div>
        <div id="front">
          <div id="tekst">
            <p>Her holdes du opdateret omkring smittespredningen, hvilke symptomer du skal være opmærksom på, samt hvordan du bliver tester og hvilke forholdsregler du skal tage.</p>
          </div>
          <router-link id="button" to="/sundhedsstyrelsen">
            <h4 @click="scroll()">læs mere</h4>
            <div id="shadow"></div>
          </router-link>
        </div>
      </div>
    </div>
    <div id="bottom">
      
      <div class="infografik container">
        <h3>PLAKATER</h3>
        <router-link id="button" to="/infoGrafik">
          <h4 @click="scroll()">find dem her</h4>
          <div id="shadow"></div>
        </router-link>
        <div id="prikker"></div>
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
  methods: {
    scroll: function() {
      window.scrollTo(0, 0);
    },
  },
}
</script>
<style lang="scss" scoped>
@import "./../scss/variables.scss";
  #top{
    width: auto;
    height: 80vw;
    background-color: map-get($map: $yellow, $key: secondary);
    margin: 0;
    padding-bottom: 20vw;
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
  
 .home{
    transform: translateY(-50vw);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    height: 400vw;
  }

  .container{
    width: 100%;
    height: 100vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
      font-size: 4vw;
      z-index: 3;
      color: map-get($map: $BW, $key: black);
      margin-top: -115%;
      position: relative;
    }
    #tekst{
        position: absolute;
        margin: 5vw auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
            width: 90%;
        p{
            width: 90%;
            height: auto;
            z-index: 4;
            text-align: center;
            font-size: 3.8vw;
            line-height: 5.5vw;
            margin: 4.5vw auto;
            font-family: 'Roboto', sans-serif;
        }
    }
  }
  
  #front{
    width: 60%;
    padding-top: 75%;
    position: absolute; 
    z-index: 3;
    display: flex;
    flex-flow: column;
    align-items: center;
    animation: slide-bottom 0.5s ease;
  }

  #button{
    width: 22vw;
    height: 8vw;
    margin-top: -15vw;
    position: absolute;
    z-index: 4;
    display: flex;
    h4{
      font-family: TommyLight;
      z-index: 5;
      width: 20vw;
      height: 6vw;
      position: absolute;
      
      text-align: center;
      line-height: 6vw;
      box-sizing: border-box;
    } 
    #shadow{
      position: relative;
      z-index: 4;
      width: 19vw;
      height: 6vw;
      
      background-size: cover;
      align-self: flex-end;
      margin-left: auto;
    } 
  }

  #middle{
    width: 60%;
    padding-top: 85%;
    
    position: absolute; 
    z-index: 2;
    background-size: cover;
  }

  #back{
    width: 60%;
    padding-top:95%;
    position: absolute; 
    z-index: 1;
  }
  .minSkole{
    #front{
      background-color: map-get($map: $yellow, $key: secondary);
      transform: translate(0,0);
      
      h4{
        color: map-get($map: $BW, $key: black);
        background-color: map-get($map: $yellow, $key: secondary);
      }
      #shadow{
        background-image: url("./../assets/PNG/Prikker Orange.png");
        border: 2px solid map-get($map: $yellow, $key: primary);
      }
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
    h3{
      margin-top: -95vw;
    }
    #front{
      background-color: map-get($map: $red, $key: primary);
      transform: translate(0,0);
      padding-top: 60%;
      
      p{
        color: map-get($map: $BW, $key: white);
      }
      h4{
        color: map-get($map: $BW, $key: white);
        background-color: map-get($map: $red, $key: primary);
      }
      #shadow{
        background-image: url("./../assets/PNG/Prikker Lyserød.png");
        border: 2px solid map-get($map: $red, $key: tertiary);
      }
    }
    #middle{
      padding-top: 70%;
      transform: translate(8vw,0);
      background-color: map-get($map: $red, $key: secondary);
    }
    #back{
      padding-top: 80%;
      background-color: map-get($map: $red, $key: tertiary);
      transform: translate(-5vw,0);
    }
  }

  .sundhedsstyrelsen{
    #front{
      background-color: map-get($map: $blue, $key: primary);
      transform: translate(0, 0);
      
      p{
        color: map-get($map: $BW, $key: white);
      }
      h4{
        color: map-get($map: $BW, $key: white);
        background-color: map-get($map: $blue, $key: primary);
      }
      #shadow{
        background-image: url("./../assets/PNG/Prikker Lyserød.png");
        border: 2px solid map-get($map: $blue, $key: tertiary);
      }
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
  #bottom{

  
  .infografik{
    background-color: map-get($map: $blue, $key: tertiary);
    height: 80vw;
    padding-bottom: 30vw;
    box-sizing: border-box;
    #button{
      width: 28vw;
      margin-top: 9vw;  
      transform: translateX(-32vw);
    }
    h3{
      width: 23vw;
      text-align: center;
      margin-top: -7vw;
      z-index: 4;
      transform: translateX(-32vw);
    }
    h4{
      width: 26vw;
        color: map-get($map: $BW, $key: black);
        background-color: map-get($map: $yellow, $key: primary);
      }
      #shadow{
        width: 26vw;
        background-image: url("./../assets/PNG/Prikker Orange.png");
        border: 2px solid map-get($map: $yellow, $key: primary);
      }

      #front{
        background-image: url("./../assets/JPG/brain.jpeg");
        background-size: cover;
        transform: translate(15vw, 0);
        
        width: 35%;
        padding-top: 48%;
      }
      #middle{
        background-color: map-get($map: $blue, $key: tertiary);
        transform: translate(23vw,0);
        width: 30%;
        padding-top: 55%;
      }
      #back{
        background-color: map-get($map: $yellow, $key: primary);
        transform: translate(10vw,0);
        width: 35%;
        padding-top: 65%;
      }
      #prikker{
        position: absolute;
        width: 60vw;
        height: 40vw;
        
        transform: translate(15vw,0);
        background-image: url("./../assets/PNG/Prikker Orange.png");
        background-size: 50%;
        
      }
    }
  }
</style>
