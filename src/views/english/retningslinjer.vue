<template>
    <div >
        <div id="top"><h1>RETNINGSLINJER</h1></div>
        <div class="Container one">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                    <div id="tekst">
                        <h3>1. Wash your hand or/and use hand sanitizer</h3>
                        <p>- It is recommended to use hand soap or soap foam because bacteries can accumulate on solid soap bars. It is a good idea to use moisturizer after washing with soap to avoid dry skin and eczema. It can be just as effective using hand sanitizer, but it has to be used on dry and clean hands.</p>
                    
                        <h3>2. Cough or sneeze in your sleeve and not your hands</h3>
                    
                        <h3>3. Avoid handshakes, hugs and kisses </h3>
                        <p>- limit your physical contact</p>
                   
                        <h3>4. You still have to keep a minimum of 1 - 2m distance</h3>
                        <p> - by keeping your distance you minimize the risk of transmission by drops in the breath, coughs or sneezes.</p>
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
                    <h3>5. Be aware of cleaning </h3>
                    <p>- both at home and at your work</p>
                    <h3>6. Have you been close to someone showing signs of symptoms, please be extra attentive regarding your own symptoms</h3>
                    <h3>7. Take care of your loved ones</h3>
                    <p>- if they are at an increased risk, do it from afar.</p>
                    <h3>8. Walk or ride the bike for shorter trips instead of taking public transport</h3>
                    <p>- if you are going on a shorter trip, consider if it is possible to walk or ride the bike.</p>
                    <h3>9. Travel outside of rush hours</h3>
                    <p>- Consider if it is possible to travel outside of rush hours by moving your appointments or meeting a bit later or earlier.</p>
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
                    <h3>10. Care for others</h3>
                    <p>- Do not cough or sneeze in the direction of your fellow travelers. If you have to cough or sneeze, do it in your sleeve or a brought handkerchief. Be extra attentive not to cough or sneeze when you are near other travelers.</p>
                    <h3>11. Do not travel by public transport if you are sick or showing symptoms</h3>
                    <p>- if you are sick or showing symptoms, care for others by not using public transport.</p>
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
@import "./../../scss/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    #top{
        background-color: white;
        margin-bottom: -50vw;
    }
    .Container{
        width: 100%;
        height: 190vw;
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
          background-image: url("../../assets/PNG/Prikker Lilla.png");
          background-size: cover;
          border: 3px solid map-get($map: $red, $key: secondary);
      }
      #back{
          transform: translate(-5vw,0);
      }
  }

  .one{
      margin-top: 5vw;
      #front{
          padding-top: 155%;
          
          #tekst{
              margin-top: -160vw;
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
        background-image: url("./../../assets/JPG/isvaffel.jpeg");
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
          padding-top: 165%;
          
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
        background-image: url("./../../assets/JPG/noodle.jpeg");
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
    #front{
        padding-top: 100vw;
        background: none;
        background-image: url("./../../assets/JPG/svamp.jpeg");
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
</style>