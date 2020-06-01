<template>
    <div>
        <div id="top"><h1>MY SCHOOL</h1></div>
        <div class="container undervisning">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>YOUR LECTURES</h3>
                    <p>Dear students, We look forward to welcoming you to your education again.</p>
                <p>In the classrooms, you will find that there is more distance to your classmates than there usually is. In addition, you will experience greater distance to your teacher as well as remote assistance, if you need any help. All rooms will be equipped with hand-sanitizers.</p> 
                <p>You will also be required to wash your hands after toilet visits, breaks and after eating.</p>
                </div>
            </div>
        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>THE INNOVATORIUM</h4>
                <p>Relevant information will be updated.</p>
            </div>
            <div id="line"></div>
            <div id="tekst">
                <h4>E0</h4>
                <p>Relevant information will be updated.</p>
            </div>
            <div id="line"></div>
            <div id="tekst">
                <h4>FREDAGSBAR</h4>
                <p>The bar is temporarily closed. All social events will be held outside depending on the weather.</p>
            </div>
        </div>
        
        <div class="container rygeområder">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>SMOKING AREAS</h3>
                    <p>In the smoking areas you will find that it is marked where it is allowed to stand.</p>
                    <p> It may be a good idea to bring an umbrella as we cannot guarantee covered smoking facilities for all students.</p>
                </div>
            </div>
        </div>
        <h2>THE CANTEEN</h2>
        <div class="container mikrobølge">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>THE MICROWAVE</h3>
                    <p>It is possible to heat its food in the school's microwaves as you are used to.</p>
                    <p>Just remember to wipe the microwave with disinfectant napkins that will be visible next to the microwaves.</p>
                    <p>As the food is exposed to heat above 75 degrees, for more than a second, any bacteria will be killed.</p>
                </div>
            </div>
        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>DISH OF THE DAY</h4>
                <h4>WEEK 32</h4>
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
                    <h3>SEATING AREAS</h3>
                    <p>The canteen will be seperated into groups where you can enjoy your meal. </p>
                    <p>If the available seats are occupied, it will be possible to bring your food to the other areas of the school including the classrooms.</p>
                    <p>More dishes-disposals will be set up in the school area.</p>
                </div>
            </div>

        </div>
        
        <div class="container hygiejne">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>HYGIENE</h3>
                    <p>The staff is particularly attentive to cleaning and general hygiene.</p>
                    <p>Does that mean anything to me? As a student you will find that there are more pliers in the buffet than usual, this is because we change these every 5 minutes. In addition, the hand sanitizer must be used before entering the buffet.</p>
                    <p>All surfaces will be disinfected twice daily and the floors will be flushed daily. All canteen staff will wear gloves when handling food.</p>
                </div>
            </div>
        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>PAYMENT</h4>
                <p>It is not possible to pay with cash in the canteen, to reduce the spread of infection. However, it is still possible to pay by card.</p>
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
    .container{
        width: 100%;
        height: 600px;
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
          background-image: url("../../assets/PNG/Prikker Lys Gul.png");
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
          background-image: url("../../assets/PNG/Prikker Lys Gul.png");
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
    margin-top: 0;
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
    margin-top: 0;
    #front{
        padding-top: 113vw;
         
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