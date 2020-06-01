<template>
    <div class="minSkole">
        <div id="top"><h1>DOWNLOAD GRAFISKE MATERIALER</h1></div>
        <div class="container spray">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/gulflaske_pdf.pdf?alt=media&token=3a9d44e8-ac92-4b5a-9981-726745b46340">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        
        
        <div class="container isvaffel">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/isvaffel_pdf.pdf?alt=media&token=92440e31-db7f-4488-bb22-2d93657af3d6">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>

        <div class="container brain">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/use_your_brain_pdf.pdf?alt=media&token=f232ac16-5a16-431b-b6fc-6a5e7b7b4e24">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        <div class="container sæbe">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/pinksvamp_pdf.pdf?alt=media&token=63fd1c7b-9199-4c63-b729-89ca1c3887c5">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        <div class="container todo">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/checkliste_pdf.pdf?alt=media&token=044e6aed-3ad4-4757-9fa0-8476e2140619">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        <div class="container noodle">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/pool.noodle_pdf.pdf?alt=media&token=daf5314b-5cab-402f-bf3d-48722db7bc79">
                    <h4>download</h4>
                    <div id="shadow"></div>
                </a>
            </div>
        </div>
        <div class="container linje">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <a id="button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/exit19.appspot.com/o/cross.the.line_pdf.pdf?alt=media&token=d5518416-df1c-4156-9d77-3183b104f189">
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
        margin: 30vw 0 0 0;
    
    }
    h1{
        text-align: center;
    }
    h2{
        position: absolute;
        width: 100%;
        text-align: center;
        padding-top: 10vw;
    }
  #front{
    width: 70%;
    padding-top: 95%;
    position: relative; 
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: map-get($map: $blue, $key: primary);
    background-size: cover;
    
    
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
            background-image: url("./../../assets/PNG/Prikker Lys Blå.png");
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
  }

  #back{
    width: 70%;
    padding-top:115%;
    position: absolute; 
    z-index: 1;
    background-color: map-get($map: $blue, $key: tertiary);
  }

  .container:nth-child(odd){
      #front{
          transform: translate(0,0);
         #button{
             transform: translateX(25vw);
         } 
      }
      #middle{
          transform: translate(8vw,0);
          
      }
      #back{
          transform: translate(-5vw,0);
      }
  }

  .spray{
      #front{
          background-image: url("./../../assets/JPG/spray.jpeg");
          #button{
            h4{
                background-color: map-get($map: $red, $key: tertiary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("./../../assets/PNG/Prikker Lyserød.png");
                border-color: map-get($map: $red, $key: tertiary);
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
          background-image: url("./../../assets/JPG/isvaffel.jpeg");
          #button{
            h4{
                background-color: map-get($map: $blue, $key: tertiary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("./../../assets/PNG/Prikker Lyserød.png");
                border-color: map-get($map: $red, $key: tertiary);
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
          background-image: url("./../../assets/JPG/brain.jpeg");
          #button{
            h4{
                background-color: map-get($map: $yellow, $key: secondary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("./../../assets/PNG/Prikker Orange.png");
                border-color: map-get($map: $yellow, $key: primary);
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
          background-image: url("./../../assets/JPG/svamp.jpeg");
          #button{
            h4{
                background-color: map-get($map: $blue, $key: primary);
                color: map-get($map: $BW, $key: white);
            }
            #shadow{
                background-image: url("./../../assets/PNG/Prikker Blå.png");
                border-color: map-get($map: $blue, $key: secondary);
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
          background-image: url("./../../assets/JPG/checkliste.jpeg");
          #button{
            h4{
                background-color: map-get($map: $yellow, $key: secondary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("./../../assets/PNG/Prikker Orange.png");
                border-color: map-get($map: $yellow, $key: primary);
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
          background-image: url("./../../assets/JPG/noodle.jpeg");
          #button{
            h4{
                background-color: map-get($map: $red, $key: secondary);
                color: map-get($map: $BW, $key: white);
            }
            #shadow{
                background-image: url("./../../assets/PNG/Prikker Blå.png");
                border-color: map-get($map: $blue, $key: secondary);
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
          background-image: url("./../../assets/JPG/linje.jpeg");
          #button{
            h4{
                background-color: map-get($map: $blue, $key: tertiary);
                color: map-get($map: $BW, $key: black);
            }
            #shadow{
                background-image: url("./../../assets/PNG/Prikker Mørk blå.png");
                border-color: map-get($map: $blue, $key: primary);
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
    background-image: url("./../../assets/PNG/Prikker Lyserød.png");
    background-size: cover;
    margin: 20vw 5%;
  }

  #video{
      width: 80vw;
      height: 45vw;
    
  }
</style>