<template>
    <div>
        <div id="top"><h1>RETNINGSLINJER</h1></div>
        <div class="Container one">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                    <div id="tekst">
                        <h3>1. Vask dine hænder tit og/eller brug håndsprit</h3>
                        <p>- Det anbefales, at man bruger flydende håndsæbe eller sæbeskum, da der kan ophobe sig bakterier på en fast sæbe, der ligger i en sæbeskål. Det er en god idé at bruge fugtighedscreme efter sæbevask for at undgå tør hud og eksem. Det kan være lige så effektivt og mere skånsomt at bruge håndsprit. Men det skal ske på rene og tørre hænder.</p>
                    
                        <h3>2. Host eller nys i dit ærme og ikke i dine hænder</h3>
                    
                        <h3>3. Undgå håndtryk, kindkys og kram</h3>
                        <p>- begræns den fysiske kontakt.</p>
                   
                        <h3>4. Man skal stadig forsøge at holde en afstand på en til to meter mellem hinanden</h3>
                        <p>- Ved at holde afstand til hinanden mindsker man risikoen for smitteoverførsel via dråber i udåndingsluften, nys eller host.</p>
                    </div>
                
            </div>
        </div>
        <div class="Container two">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                
            </div>
        </div>
    
        <div class="Container three">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <div id="tekst">
                    <h3>5. Vær opmærksom på rengøring</h3>
                    <p>- både hjemme og på arbejdspladsen.</p>
                    <h3>6. Har du været tæt på én, der viser tegn på på sygdom, så vær ekstra opmærksom på egne symptomer.</h3>
                    <h3>7. Tag dig af dine nærmeste</h3>
                    <p>- hvis de er i øget risiko, gør det på afstand.</p>
                    <h3>8. Gå eller tag cyklen ved kortere ture i stedet for offentlig transport</h3>
                    <p>- Skal du blot en kort tur, overvej da om det er muligt for dig at cykle eller gå.</p>
                    <h3>9. Rejs uden for myldretiden </h3>
                    <p>- Overvej om du har mulighed for at rejse uden for myldretiden, ved fx at flytte din aftale eller møde lidt tidligere eller senere på arbejdspladsen.</p>
                </div>
            </div>
        </div>
        
        <div class="Container four">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">

            </div>
        </div>
        
        <div class="Container five">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>10. Vis hensyn til andre rejsende</h3>
                    <p>- Host og nys ikke i retningen af dine medrejsende. Skal du hoste eller nyse, gør det da i dit ærme eller i et medbragt engangslommetørklæde. Vær særlig opmærksom på ikke at hoste eller nyse i nærheden af ældre medrejsende.</p>
                    <h3>11. Rejs ikke med kollektiv trafik, hvis du er syg, eller formoder at være smittet.</h3>
                    <p>- Er du syg eller formoder du, at du er smittet, så tag hensyn til andre ved ikke at rejse med den kollektive trafik.</p>
                </div>
            </div>
        </div>
        <div class="Container six">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "./../scss/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    #top{
        background-color: white;
        margin-bottom: -50vw;
    }
    .Container{
        width: 100%;
        height: 200vw;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 0;
    
    }
    h2{
        position: absolute;
        width: 100%;
        text-align: center;
        padding-top: 10vw;
    }
  #front{
    width: 70%;
    padding-top: 85%;
    position: relative; 
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: map-get($map: $red, $key: primary);
    height: 0;
    
    #tekst{
        position: relative;

        
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 90%;
        h3{
            z-index: 4;
            color: map-get($map: $BW, $key: white);
            margin: 5vw auto 2vw auto;
            font-size: 4vw;
            text-align: center;
        }
        p{
            width: 90%;
            
            z-index: 4;
            text-align: center;
            font-size: 3.8vw;
            line-height: 5.5vw;
            font-family: 'Roboto', sans-serif;
            color: map-get($map: $BW, $key: white);
        }
        
    }
   
  }

  
    
    
  #middle{
    width: 70%;
    padding-top: 95%;
    position: absolute; 
    z-index: 2;
    background-size: cover;
    background-color: map-get($map: $red, $key: secondary);
    transform: translate(-8vw,0);
  }

  #back{
    width: 70%;
    padding-top:110%;
    position: absolute; 
    z-index: 1;
    background-color: map-get($map: $red, $key: tertiary);
    transform: translate(5vw,0);
  }

  .Container:nth-child(odd){
      #front{
          transform: translate(0,0);
      }
      #middle{
          transform: translate(8vw,0);
          background: none;
          background-image: url("../assets/PNG/Prikker Lilla.png");
          background-size: cover;
          border: 3px solid map-get($map: $red, $key: secondary);
      }
      #back{
          transform: translate(-5vw,0);
      }
  }

  .one{
      
      #front{
          padding-top: 170%;
          
          #tekst{
              margin-top: -173vw;
          }
      }
      #middle{
          padding-top: 180%;
      }
      #back{
          padding-top: 190%;
      }
  }

.two{
    #front{
        padding-top: 100vw;
        background: none;
        background-image: url("./../assets/JPG/isvaffel.jpeg");
        background-position: center;
        background-size: cover;
    }
    #middle{
        padding-top: 110vw;
    }
    #back{
        padding-top: 120vw;
    }
}

.three{
    #front{
          padding-top: 166%;
          
          #tekst{
              margin-top: -170vw;
          }
      }
      #middle{
          padding-top: 180%;
      }
      #back{
          padding-top: 190%;
      }
}

.four{
    #front{
        padding-top: 100vw;
        background: none;
        background-image: url("./../assets/JPG/noodle.jpeg");
        background-position: center;
        background-size: cover;
    }
    #middle{
        padding-top: 110vw;
    }
    #back{
        padding-top: 120vw;
    }
}

.five{
    height: 120vw;
    #front{
          padding-top: 105%;
          
          #tekst{
              margin-top: -110vw;
          }
      }
      #middle{
          padding-top: 115%;
      }
      #back{
          padding-top: 125%;
      }
}
  
.six{
    margin-top: 10vw;
    #front{
        padding-top: 100vw;
        background: none;
        background-image: url("./../assets/JPG/svamp.jpeg");
        background-position: center;
        background-size: cover;
    }
    #middle{
        padding-top: 110vw;
    }
    #back{
        padding-top: 120vw;
        background-color: map-get($map: $red, $key: primary);
    }
}  
</style>