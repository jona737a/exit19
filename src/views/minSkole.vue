<template>
    <div >
        <div id="top"><h1>MIN SKOLE</h1></div>
        <div class="container undervisning">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>UNDERVISNING</h3>
                    <p>Kære studerende, Vi glæder os til at modtage dig på skolen igen.</p>
                <p>I klasselokalerne vil i opleve at der er mere afstand til dine klassekammerater end der plejer at være. Derudover vil du opleve større afstand til din underviser samt remote assistance såfremt du har behov for hjælp. Alle lokaler vil være udstyret med håndsprit. </p> 
                <p> Der vil derudover kræves af dig at du vasker hænder efter toiletbesøg, pauser samt efter du har spist. </p>
                </div>
            </div>
        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>INNOVATORIET</h4>
                <p>Relevant info vil blive opdateret</p>
            </div>
            <div id="line"></div>
            <div id="tekst">
                <h4>E0</h4>
                <p>Relevant info vil blive opdateret</p>
            </div>
            <div id="line"></div>
            <div id="tekst">
                <h4>FREDAGSBAR</h4>
                <p>Fredagsbaren er midlertidigt lukket. Alle sociale arrangementer vil blive afholdt udenfor alt afhængigt af vejret.</p>
            </div>
        </div>
        
        <div class="container rygeområder">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>RYGEOMRÅDER</h3>
                    <p>På ryge områderne vil du opleve at der er afmærket hvor det er tilladt at stå. </p>
                    <p>Det kan være en god ide at medbringe en paraply, da vi ikke kan garantere overdækkede rygefaciliteter til alle studerende. </p>
                </div>
            </div>
        </div>
        <h2>KANTINEN</h2>
        <div class="container mikrobølge">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>MIKROBØLGEOVN</h3>
                    <p>Det er muligt at varme sin mad i skolens mikroovne, som du er vant til.</p>
                    <p>Du skal blot huske at tørre mikroovnen af med desinficerende servietter som vil stå ved siden af mikroovnene. </p>
                    <p>Da maden udsættes for varme over 75 grader, i mere end et sekund, vil eventuelle bakterier dræbes. </p>
                </div>
            </div>
        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>DAGENS RET</h4>
                <h4>UGE 32</h4>
                <p>Tarteletter</p>
                <p>Boller i karry</p>
                <p>Gryderet med gyros og kartoffelmos</p>
                <p>Stjerneskud</p>
                <p>Millionbøf</p>
            </div>
        </div>
        <div class="container siddepladser">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>SIDDEPLADSER</h3>
                    <p>Der vil i kantinen være skiltet hvorledes det er muligt at sidde i kantinen.</p>
                    <p>Nå de tilgængelige pladser er optagede, vil det være muligt at medbringe sin mad til de andre områder på skolen inklusiv undervisningslokalerne. </p>
                    <p>Der vil blive stillet flere opvaske stande op på skolens område.</p>
                </div>
            </div>

        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>TILTAG FRA KANTINEN</h4>
                <p>Her vil kantinen løbende opdatere tiltag, så du kan orientere dig om den nyeste information.</p>
            </div>
        </div>
        <div class="container hygiejne">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>HYGIEJNE</h3>
                    <p>Personalet er i disse tider særligt opmærksomme på rengøringen og den generelle hygiejne. </p>
                    <p>Betyder det noget for mig? Du vil som studerende opleve at der er flere tænger i buffeten end normalt, dette er fordi vi udskifter disse hver 5 minut. Derudover skal håndspritten benyttes inden du går i krig med buffeten. </p>
                    <p>Alle overflader vil daglige blive desinficeret 2 gange, og gulvene bliver dagligt spulet. Al kantine-personale vil bære handsker ved håndtering af fødevarer. </p>
                </div>
            </div>
        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>BETALING</h4>
                <p>Det er ikke muligt at betale med kontanter i kantinen, for at mindske smittespredningen. Det er dog stadig muligt at betale med kort og mobilepay.</p>
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
    .container{
        width: 100%;
        height: 150vw;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5vw 0 0 0;
    
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
    background-color: map-get($map: $yellow, $key: secondary);
    h3{
        z-index: 4;
        margin-top: -79vw;
        position: absolute;
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
            margin: 4.5vw auto;
            font-family: 'Roboto', sans-serif;
            color: map-get($map: $BW, $key: black);
            
        }
    }
   
  }

  
    
    
  #middle{
    width: 70%;
    padding-top: 95%;
    position: absolute; 
    z-index: 2;
    background-size: cover;
    background-color: map-get($map: $yellow, $key: tertiary);
    transform: translate(-8vw,0);
  }

  #back{
    width: 70%;
    padding-top:110%;
    position: absolute; 
    z-index: 1;
    background-color: map-get($map: $yellow, $key: primary);
    transform: translate(5vw,0);
  }

  .container:nth-child(4){
      #front{
          transform: translate(0,0);
      }
      #middle{
          transform: translate(8vw,0);
          background: none;
          background-image: url("../assets/PNG/Prikker Lys Gul.png");
          background-size: cover;
          border: 3px solid map-get($map: $yellow, $key: tertiary);
      }
      #back{
          transform: translate(-5vw,0);
      }
  }
  .container:nth-child(8){
      #front{
          transform: translate(0,0);
      }
      #middle{
          transform: translate(8vw,0);
          background: none;
          background-image: url("../assets/PNG/Prikker Lys Gul.png");
          background-size: cover;
          border: 3px solid map-get($map: $yellow, $key: tertiary);
      }
      #back{
          transform: translate(-5vw,0);
      }
  }

  .undervisning{
      #front{
          padding-top: 110%;
         
          #tekst{
              margin-top: 7vw;
              h3{
                     margin-top: -3vw;
                     text-align: center;
                     width: 100%;
                }
          }
      }
      #middle{
          padding-top: 120%;
      }
      #back{
          padding-top: 130%;
      }
  }

.rygeområder{
    #front{
        padding-top: 65vw;
        
         
          #tekst{
              margin-top: 7vw;
              h3{
                     margin-top: -3vw;
                     text-align: center;
                     width: 100%;
                }
          }
    }
    #middle{
        padding-top: 75vw;
    }
    #back{
        padding-top: 85vw;
    }
}

.mikrobølge{
    #front{
        padding-top: 85vw;
        
         
          #tekst{
              margin-top: 7vw;
              h3{
                     margin-top: -3vw;
                     text-align: center;
                     width: 100%;
                }
          }
    }
    #middle{
        padding-top: 95vw;
    }
    #back{
        padding-top: 105vw;
    }
}

.siddepladser{
    margin-top: -20vw;
    #front{
        padding-top: 80vw;
         
          #tekst{
              margin-top: 7vw;
              h3{
                     margin-top: -3vw;
                     text-align: center;
                     width: 100%;
                }
          }
    }
    #middle{
        padding-top: 90vw;
    }
    #back{
        padding-top: 100vw;
    }
}

.hygiejne{
    margin-top: -30vw;
    #front{
        padding-top: 115vw;
         
          #tekst{
              margin-top: 7vw;
              h3{
                     margin-top: -3vw;
                     text-align: center;
                     width: 100%;
                }
          }
    }
    #middle{
        padding-top: 123vw;
    }
    #back{
        padding-top: 133vw;
    }
}
  
  #tail{
      position: relative;  
      display: flex;
      flex-flow: column;
      align-items: center;
      height: 100vw;
      margin-top: -20vw;
      
    #line{
        width: 2px;
        height: 20vw;
        background-color: map-get($map: $yellow, $key: primary);
        margin: 5vw 0;
        z-index: 4;
    }
    p{
        text-align: center;
        padding: 0 10vw;
        font-size: 3vw;
        line-height: 4.5vw;
        margin-top: 1.5vw;
        width: 50vw;
    }
    
    h4{
        text-align: center;
        margin-bottom: 2vw;
    }

  }
</style>