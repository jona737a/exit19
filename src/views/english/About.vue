<template>
    <div class="minSkole">
        <div id="top"><h1>ABOUT US</h1></div>
        <div class="container one">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                  <h3>VISION </h3>
                  <p>The students enrolled in education have to feel that it is safe to return to school.</p>
                  <h3>MISSION</h3>
                  <p>We want to establish safe parameters for the students as well as the educators through graphical material and create awareness regarding Covid19 through our webpage, which is targeted towards students enrolled in higher educations.</p>
                  <h3>VALUES</h3>
                  <p>Security, freedom to socialize with responsibility, safety.</p>
                  </div>
            </div>
        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>CONTACT INFO </h4>
                <p>+45 7613 3200</p>
                <p>info@easv.dk</p>
            </div>
            <div id="line"></div>
            <div id="tekst">
                <h4>STUDY COUNSELING</h4>
                <p>+45 4199 1299</p>
                <p>SC@easv.dk</p>
            </div>
            
        </div>
        
        <div class="container two">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <div id="tekst">
                        <h3>CAMPAIGN STRATEGY</h3>
                        <p>The EXIT19 communication strategy includes eye catching nudging and humorous graphics with a clear message regarding safety as well as clear visual video posters which are to be played on big screens. EXIT19 will both exploit printed material as well as electronic media to best possible hit the target group.</p>
                    </div>
            </div>
        </div>
        
        <div class="container three">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                  <h3>ABOUT US AS A CAMPAIGN</h3>
                    <p>EXIT19 is a non-profit campaign created by a competent team of multimedia designers, who long for the wellbeing of the higher educations’ students.</p>
                    <p>In connection to the re-opening of the higher educational institutions during Covid19, is the purpose of the campaign EXIT19 to communicate a clear message to both students as well as educators regarding awareness of complying with the appropriate behaviour as put forth by the guidelines, so that everyone at the institutions are secured as best as possible.</p>
                </div>
            </div>
        </div>
        <div id="profiles">
            <div id="profile">
                <div class="Pat pic"></div>
                <h3>Patrick</h3><h3> Jensen</h3>
            </div>
            <div id="profile">
                <div class="Cec pic"></div>
                <h3>Cecilie</h3><h3> Dichmann</h3>
            </div>
            <div id="profile">
                <div class="Mal pic"></div>
                <h3>Malene</h3><h3> Tranholm</h3>
            </div>
            <div id="profile">
                <div class="Jon pic"></div>
                <h3>Jonathan</h3><h3> Madsen</h3>
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
    background-color: map-get($map: $red, $key: tertiary);
    transform: translate(5vw,0);
  }

  #back{
    width: 70%;
    padding-top:110%;
    position: absolute; 
    z-index: 1;
    transform: translate(-8vw,0);
    background-color: map-get($map: $yellow, $key: primary);
  }

  .container:nth-child(4){
      #front{
          transform: translate(0,0);
      }
      #middle{
          transform: translate(-8vw,0);
          background: none;
          background-image: url("../../assets/PNG/Prikker Lyserød.png");
          background-size: cover;
          border: 3px solid map-get($map: $red, $key: tertiary);
      }
      #back{
          transform: translate(5vw,0);
      }
  }
  .container:last-child{
      margin-bottom: 40vw;
  }

  .one{
      #front{
          padding-top: 120%;
          
          #tekst{
              margin-top: -115vw;
          }
      }
      #middle{
          padding-top: 130%;
      }
      #back{
          padding-top: 140%;
      }
  }

.two{
    #front{
        padding-top: 75%;
         
          #tekst{
              margin-top: -68vw;
              width: 93%;
          }
    }
    #middle{
        padding-top: 85%;
    }
    #back{
        padding-top: 95%;
    }
}

.three{
    #front{
        padding-top: 115vw;
         
          #tekst{
              margin-top: -107vw;
          }
    }
    #middle{
        padding-top: 125vw;
    }
    #back{
        padding-top: 135vw;
    }
}

.siddepladser{
    margin-top: 0;
    #front{
        padding-top: 80vw;
         h3{
              margin-top: -74vw;
          }
          #tekst{
              margin-top: 7vw;
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
         h3{
              margin-top: -107vw;
          }
          #tekst{
              margin-top: 7vw;
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
      margin-top: 5vw;
      
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
  #profiles{
        display: flex;
        flex-wrap: wrap;
        width: 80vw;
        justify-content: space-between;
        height: 110w;
        margin: -20vw auto 50vw auto ;
        margin-top: 20vw;
        margin-bottom: 50vw;
        #profile{
            width: 40vw;
            height: 50vw;
            display: flex;
            flex-flow: column;
            align-items: center;
            h3{
                text-align: center;
                width: 40vw;
                font-size: 4vw;
            
            }
            .pic{
                width: 30vw;
                height: 30vw;
                margin-bottom: 2vw;
                background-size: contain;
                background-repeat: no-repeat;
            }
            .Pat{
                background-image: url("../../assets/PNG/patrick.png");
                
            }
            .Cec{
                background-image: url("../../assets/PNG/cecilie.png");
            }
            .Mal{
                background-image: url("../../assets/PNG/malene.png");
            }
            .Jon{
                background-image: url("../../assets/PNG/jonathan.png");
            }
        }
    }
</style>