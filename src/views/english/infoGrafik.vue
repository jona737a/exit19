<template>
    <div >
        <div id="top"><h1>POSTERS</h1></div>
        <div class="container spray">
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/gulflaske-pdf.pdf?alt=media&token=89ed557c-df09-49f0-825d-655eb362bb95">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        
        
        <div class="container isvaffel">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/isvaffel-pdf.pdf?alt=media&token=2374dd9f-02f6-42eb-971e-ca092421c6a5">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>

        <div class="container brain">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/use-your-brain-pdf.pdf?alt=media&token=f96af62d-3fea-40e9-a98a-a725b62d0055">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        <div class="container sæbe">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/pinksvamp_pdf.pdf?alt=media&token=2be4d5aa-f142-4501-99e4-2c2d922fecb6">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        <div class="container todo">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/plakat_checklist_pdf.pdf?alt=media&token=d52292f3-d44d-402e-8176-78a99103bc50">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        <div class="container noodle">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/pool.noodle_pdf.pdf?alt=media&token=41863f3e-eeaf-4c25-85e4-68ed795405d8">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        <div class="container linje">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/plakat_line_pdf.pdf?alt=media&token=4c3d5c78-3ea8-4b21-9f93-3e34a2b5ffc0">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        <div class="video container">
            <iframe id="video" src="https://www.youtube.com/embed/7CiMQpclPKQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import "../../scss/variables.scss";
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
    h1{
        text-align: center;
        width: 90vw;
    }
    h2{
        position: absolute;
        width: 100%;
        text-align: center;
        padding-top: 10vw;
    }
  #front{
    width: 67.2%;
    padding-top: 95%;
    position: relative; 
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: map-get($map: $blue, $key: primary);
    background-size: contain;
    background-repeat: no-repeat;
    
    
    #button{
        margin: -30vw auto 0 auto;
        width: 35vw;
        height: 9vw;
        transform: translateX(-25vw);
        h4{
            width: 32vw;
            height: 7vw;
            font-size: 4vw;
            background-color: map-get($map: $blue, $key: primary);
            color: map-get($map: $BW, $key: white);
        }
        #shadow{
            width: 32vw;
            height: 7vw;
            border-color: map-get($map: $blue, $key: tertiary);
            background-image: url("../../assets/PNG/Prikker Lys Blå.png");
        }
    }
   
  }

  
    
    
  #middle{
    width: 70%;
    padding-top: 105%;
    position: absolute; 
    z-index: 2;
    background-size: cover;
    background-color: map-get($map: $blue, $key: secondary);
    transform: translate(5vw,0);
  }

  #back{
    width: 70%;
    padding-top:115%;
    position: absolute; 
    z-index: 1;
    background-color: map-get($map: $blue, $key: tertiary);
    transform: translate(-8vw,0);
  }

  .container:nth-child(even){
      #front{
          transform: translate(0,0);
         #button{
             transform: translateX(25vw);
         } 
      }
      #middle{
          transform: translate(-8vw,0);
          
      }
      #back{
          transform: translate(5vw,0);
      }
  }

  .spray{
      #front{
          background-image: url("../../assets/JPG/spray.jpeg");
          #button{
            h4{
                background-color: map-get($map: $red, $key: tertiary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("../../assets/PNG/Prikker Lyserød.png");
                border: 2px solid map-get($map: $red, $key: tertiary);
            }
          }
      }
      #middle{
          background-color: map-get($map: $red, $key: secondary);
      }
      #back{
          background-color: map-get($map: $red, $key: tertiary);
      }
  }
  .isvaffel{
      #front{
          background-image: url("../../assets/JPG/isvaffel.jpeg");
          #button{
              transform: translate(-25vw,-5vw) !important;
            h4{
                background-color: map-get($map: $blue, $key: tertiary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("../../assets/PNG/Prikker Lyserød.png");
                border: 2px solid map-get($map: $red, $key: tertiary);
            }
          }
      }
      #middle{
          background-color: map-get($map: $blue, $key: tertiary);
      }
      #back{
          background-color: map-get($map: $red, $key: tertiary);
      }
  }
  .brain{
      #front{
          background-image: url("../../assets/JPG/brain.jpeg");
          #button{
            h4{
                background-color: map-get($map: $yellow, $key: secondary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("../../assets/PNG/Prikker Orange.png");
                border: 2px solid map-get($map: $yellow, $key: primary);
            }
          }
      }
      #middle{
          background-color: map-get($map: $red, $key: primary);
      }
      #back{
          background-color: map-get($map: $yellow, $key: primary);
      }
  }
  .sæbe{
      #front{
          background-image: url("../../assets/JPG/svamp.jpeg");
          #button{
              transform: translate(-30vw,-8vw) !important;
            h4{
                background-color: map-get($map: $blue, $key: primary);
                color: map-get($map: $BW, $key: white);
            }
            #shadow{
                background-image: url("../../assets/PNG/Prikker Blå.png");
                border:2px solid map-get($map: $blue, $key: secondary);
            }
          }
      }
      #middle{
          background-color: map-get($map: $blue, $key: tertiary);
      }
      #back{
          background-color: map-get($map: $blue, $key: primary);
      }
  }
  .todo{
      #front{
          background-image: url("../../assets/JPG/checkliste.jpeg");
          #button{
              transform: translate(28vw,13vw) !important; 
            h4{
                background-color: map-get($map: $yellow, $key: secondary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("../../assets/PNG/Prikker Orange.png");
                border: 2px solid map-get($map: $yellow, $key: primary);
            }
          }
      }
      #middle{
          background-color: map-get($map: $yellow, $key: primary);
      }
      #back{
          background-color: map-get($map: $red, $key: secondary);
      }
  }
  .noodle{
      #front{
          background-image: url("../../assets/JPG/noodle.jpeg");
          #button{
            h4{
                background-color: map-get($map: $red, $key: secondary);
                color: map-get($map: $BW, $key: white);
            }
            #shadow{
                background-image: url("../../assets/PNG/Prikker Blå.png");
                border:2px solid map-get($map: $blue, $key: secondary);
            }
          }
      }
      #middle{
          background-color: map-get($map: $blue, $key: tertiary);
      }
      #back{
          background-color: map-get($map: $blue, $key: secondary);
      }
  }

.linje{
      #front{
          background-image: url("../../assets/JPG/linje.jpeg");
          #button{
              transform: translateX(-30vw);
            h4{
                background-color: map-get($map: $blue, $key: tertiary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("../../assets/PNG/Prikker Mørk blå.png");
                border:2px solid map-get($map: $blue, $key: primary);
            }
          }
      }
      #middle{
          background-color: map-get($map: $yellow, $key: primary);
      }
      #back{
          background-color: map-get($map: $blue, $key: tertiary);
      }
  }
  
  .video{
    height: 60vw;
    width: 90vw;
    background-image: url("../../assets/PNG/Prikker Lyserød.png");
    background-size: cover;
    margin: 20vw 5% 30vw 5%;
  }

  #video{
      width: 80vw;
      height: 45vw;
    
  }
</style>