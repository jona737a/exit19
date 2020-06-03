<template>
    <div class="sundhed">
        <div id="top">
            <h1>INFO FRA SUNDHEDSSTYRELSEN</h1></div>
        <div class="container symptomer">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>SYMPTOMER</h3>
                    <p>Symptomerne viser sig mellem 2 og 14 dage fra du er blevet smittet. De milde symptomer kan ofte være svær at skelne fra en forkølelse eller en influenza. Hos de fleste smittede er forløbet mildt og forsvinder i løbet af 4-6 dage. Er symptomerne tiltagende, eller er du i risikogruppen skal der kontaktes en læge. </p>
                </div>
            </div>
        </div>
        <div id="tail">
            <div id="line"></div>
            <div id="tekst">
                <h4>Feber</h4>
                <h4>Tør hoste</h4>
                <h4>Muskelsmerter</h4>
                <h4>Vejrtrækningsproblemer</h4>
            </div>
            <i>Har du symptomer på COVID-19, eller har du været i nærkontakt med en person, der er smittet, så skal du testet ved at kontakte egen læge. </i>
            
        </div>
        
        <div class="container epidemi">
            
            <div id="back"></div>
            <div id="middle"></div>
            <div id="front">
                
                <div id="tekst">
                    <h3>EPIDEMI STATUS</h3>
                    <p>Smittespredningen og antallet af indlagte patienter er stabilt og ligger fortsat relativt lavt. Der er kontrol over epidemien, og det skal gerne fortsætte ved at vi i fællesskab fortsat arbejder på at undgå smittespredningen.</p>
                    <p>Sundhedsstyrelsen opdater dagligt den løbende status for smittespredningen i Danmark.</p>
                    <a id="button" target="_blank" href="https://www.sst.dk/da/corona/tal-og-overvaagning">
                        <h4>se tallene her</h4>
                        <div id="shadow"></div>
                    </a>
                </div>
            </div>
        </div>
        <div id="tail">
            <i>Hvis du er i tvivl om du er syg, anbefaler vi at du betragter dig som syg og bliver hjemme i 14 dage. </i>
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
          background-image: url("../assets/PNG/Prikker Blå.png");
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
          padding-top: 76%;
          
          #tekst{
              h3{
                     margin-top: -3vw;
                     text-align: center;
                     width: 100%;
                }
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
      margin-top: 35vw;
      #front{
          padding-top: 95%;
          
          #tekst{
              margin-top: 10vw;
              h3{
                     margin-top: -3vw;
                     text-align: center;
                     width: 100%;
                }
          }
          #button{
              margin: 0 auto 0 auto;
              width: 35vw;
              height: 9vw;
              transform: translateX(15vw);
              h4{
                  width: 32vw;
                  height: 7vw;
                  font-size: 4.6vw;
                  background-color: map-get($map: $blue, $key: primary);
                  color: map-get($map: $BW, $key: white);
              }
              #shadow{
                  width: 32vw;
                  height: 7vw;
                  border:2px solid map-get($map: $blue, $key: tertiary);
                  background-image: url("./../assets/PNG/Prikker Lys Blå.png");

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