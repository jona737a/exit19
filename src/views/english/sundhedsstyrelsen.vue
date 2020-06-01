<template>
    <div>
        <div id="top"><h1>INFORMATION FROM THE NATIONAL BOARD OF HEALTH</h1></div>
        <div class="container symptomer">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <h3>SYMPTOMS</h3>
                <div id="tekst">
                    <p>The symptoms appear between 2 and 14 days after you have been infected. The mild symptoms can often be hard to distinguish from a cold or the flu. In most infected patients, the course is mild and disappears within 4-6 days. If the symptoms worsen, or if you are at risk, a doctor should be contacted.</p>
                    
                </div>
            </div>
        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>Fever</h4>
                <h4>Dry cough</h4>
                <h4>Muscle pain</h4>
                <h4>Having a hard time breathing</h4>
            </div>
            <i>If you have symptoms of COVID-19, or have you been in close contact with a person who is infected, you should get tested by contacting your own doctor. Find more information at sundhedsstyrelsens website.</i>
            
        </div>
        
        <div class="container epidemi">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                <h3>EPIDEMIC STATUS</h3>
                <div id="tekst">
                    <p>The spread of infection and the number of hospitalized patients is stable and remains relatively low. There is control over the epidemic, and this should continue as we work together to avoid the spread of infection.</p>
                    <p>The National Board of Health updates the ongoing status of the spread of infection in Denmark daily.</p>
                    <a id="button" target="_blank" href="https://www.sst.dk/da/corona/tal-og-overvaagning">
                        <h4>read more</h4>
                        <div id="shadow"></div>
                    </a>
                </div>
            </div>
        </div>
        <div id="tail">
            <i>If you are unsure if you are ill, we recommend that you consider yourself ill and stay home for 14 days.</i>
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
        width: 80%;
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
    background-color: map-get($map: $blue, $key: primary);
    
    h3{
        z-index: 4;
        margin-top: -79vw;
        position: absolute;
        color: map-get($map: $BW, $key: white);
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
    background-color: map-get($map: $blue, $key: secondary);
    transform: translate(-8vw,0);
  }

  #back{
    width: 70%;
    padding-top:110%;
    position: absolute; 
    z-index: 1;
    background-color: map-get($map: $blue, $key: tertiary);
    transform: translate(5vw,0);
  }

  .container:nth-child(4){
      #front{
          transform: translate(0,0);
          
      }
      #middle{
          transform: translate(8vw,0);
          background: none;
          background-image: url("./../../assets/PNG/Prikker Blå.png");
          background-size: cover;
          border: 3px solid map-get($map: $blue, $key: secondary);
      }
      #back{
          transform: translate(-5vw,0);
      }
  }

  .symptomer{
      height: 80vw;
      #front{
          padding-top: 72%;
          h3{
              margin-top: -63vw;
          }
          #tekst{
              margin-top: 10vw;
          }
      }
      #middle{
          padding-top: 82%;
      }
      #back{
          padding-top: 92%;
      }
  }

.epidemi{
      height: 80vw;
      #front{
          padding-top: 95%;
          h3{
              margin-top: -85vw;
              transform: translateX(-7vw);
          }
          #tekst{
              margin-top: 10vw;
          }
          #button{
              margin: 0 auto 0 auto;
              width: 35vw;
              height: 9vw;
              transform: translateX(15vw);
              h4{
                  width: 32vw;
                  height: 7vw;
                  font-size: 4vw;
                  background-color: map-get($map: $blue, $key: primary);
                  color: map-get($map: $BW, $key: white);
              }
              #shadow{
                  border: 2px solid map-get($map: $blue, $key: tertiary);
                  width: 32vw;
                  height: 7vw;
                  border-color: map-get($map: $blue, $key: tertiary);
                  background-image: url("./../../assets/PNG/Prikker Lys Blå.png");
              }
          }
      }
      #middle{
          padding-top: 105%;
      }
      #back{
          padding-top: 115%;
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
        background-color: map-get($map: $blue, $key: primary);
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
    i{
        margin-top: 20vw;
        font-style: normal;
        font-size: 4vw;
        letter-spacing: .1vw;
        line-height: 7vw;
        text-align: center;
        width: 80%;
    }
    h4{
        text-align: center;
        margin-bottom: 2vw;
    }

  }
</style>