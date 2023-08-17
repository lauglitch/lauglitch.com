<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html lang='es' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
      <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
      <b:if cond='data:blog.pageType == &quot;index&quot;'>
      </b:if>
      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <title>
          <data:blog.pageTitle/>
        </title>
        <b:else/>
        <title>
          <data:blog.pageName/>
        </title>
      </b:if>
      <b:include data='blog' name='all-head-content'/>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin='anonymous;'/>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&amp;display=swap" rel="stylesheet"/>
      <link href='lauglitchStyle.css' rel='stylesheet' type='text/css'/>

      <b:skin><![CDATA[     
      /*
      -----------------------------------------------
      Lauglitch Theme's XML Template
      -----------------------------------------------
      Name           : lauglitchTheme
      Version        : 1.1
      Author         : Laura Rodríguez Corpas
      Author  URL    : http://www.lauglitch.com/
      Date           : August, 2023
      -----------------------------------------------
      License:
      http://creativecommons.org/licenses/by/3.0/
      ----------------------------------------------- */
      }
    }
    }
    ]]></b:skin>
  </head>

<!-- BODY -->
  <body>
    <div class="loader-container">
        <div class="loader"></div>
    </div>
    
    <!-- NAVBAR -->
    <nav class="navbar navbar-inverse" style="background-color: #3b5998; animate: true; transition: all 0.15s;">    
      <div class="container"> 

        <div class="row">
            <!-- Logo Section -->
            <div id="DivLogo" class="col-lg-4 col-md-4 col-sm-6 col-12">
                <button id='lauglitchButton' class='botonLogo transparent-button'>
                    <img src='https://imgur.com/uuOdmOV.png'/>
                </button>
            </div>
        </div>

        <div id="DivKeypad" class="largeNavbar row" >
          <!-- Language Selection Dropdown -->
          <div class="largeNavbar dropdown col-lg-4 col-md-4 col-sm-6 col-12" style="margin-top: 5%; margin-right: 15%;">

            <button id="langButton" class="largeNavbar boton transparent-button dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src='https://imgur.com/FZpaV40.png' width="50%" height="50%"/>
            </button>
            
            <div id="langDropdown" class="dropdown-menu dropdown-large-margin align-center" aria-labelledby="langButton">
                <button id='spanishButton' class="largeNavbar botonDrop transparent-button dropdown-item" type="button">
                    <img src='https://imgur.com/iU8KDiy.png'/>
                </button>
                <button id='englishButton' class="largeNavbar botonDrop transparent-button dropdown-item" type="button">
                    <img src='https://imgur.com/Wmd2JSQ.png'/>
                </button>
            </div>
         
          </div>

          <!-- Contact Button (On Mobile, each button occupies full width) -->
          <div class="col-lg-4 col-md-4 col-sm-12 col-12" style="margin-top: 5%;">
              <div class="largeNavbar">
                  <button class='largeNavbar boton transparent-button' id='contactButton'>
                      <img src='https://imgur.com/WyqsCu9.png' height='100%' width='100%'/>
                  </button> 
              </div> 
          </div> 

        </div>

        <div id="DivMore" class="row" >
          <!-- "More" Button (For Mobile View, each button occupies full width) -->
          <div class="dropdown col-lg-4 col-md-4 col-sm-6 col-12" style="margin-top: 5%;">
              <button id="moreButton" class="smallNavbar boton transparent-button dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src='https://imgur.com/skCGjQf.png' width="50%" height="50%"/>
              </button> 

              <div id="moreDropdown" class="dropdown-menu dropdown-menu-center dropdown-small-margin" aria-labelledby="moreButton">
                    <button id='contactButtonMobile' class="smallNavbar botonDrop transparent-button dropdown-item" type="button">
                        <img src='https://imgur.com/Oytrah3'/>
                    </button>
                    
                    <button id="langButtonMobile" class="smallNavbar transparent-button dropdown-toggle dropdown-item" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src='https://imgur.com/FZpaV40.png' class="langDropdownMobile-margin" width="50%" height="50%"/>
                    </button>

                    <div id="langDropdownMobile" class="smallNavbar dropdown-menu dropdown-menu-center" aria-labelledby="langButton">
                        <button id='spanishButtonMobile' class="smallNavbar botonDrop transparent-button dropdown-item" type="button">
                            <img src='https://imgur.com/yMcZxYg.png'/>
                        </button>
                        <button id='englishButtonMobile' class="smallNavbar smallNavbar botonDrop transparent-button dropdown-item" type="button">
                            <img src='https://imgur.com/WNRh5O7.png'/>
                        </button>
                    </div>

              </div>
          </div>     
        </div> 

      </div>
    </nav>
    <!-- END NAVBAR -->

    <!-- CONTENT -->
    <div id='body-templates' style='min-height: 100vh;'>

      <!-- Home Body (ES/EN) -->
      <div id='BodyHome'>
        <section id='DivBio'>
          <div class='DivBio-block'>

            <img height='150' src='https://i.imgur.com/ryP6CTY.png' width='150'/>
            <h1>
              @lauglitch
            </h1>

            <p id='spanishBio'>
              Diseñadora y Desarrolladora de Videojuegos 🎮 😄
              <br/>
              Amante de los gatitos 🐱, la música 🎵 y los viajes 🌍
              <br/>
              📍 Madrid (España)
              <br/>
            </p>

            <p id='englishBio'>
              Videogame Designer and Developer 🎮 😄
              <br/>
              Kitty 🐱, music 🎵 and travelling 🌍 lover
              <br/>
              📍 Madrid (España)
              <br/>
            </p>
          </div>
        </section>

        <template id="image-template">
          <div class="image-container">
            <img class="img-fluid" />
            <div class="centered-text margenesTitulosJuegos">
              <a></a>
            </div>
          </div>
        </template>
        
        <div id='DivImages' class="container" style='margin-top:5%'>
          
        </div>

      </div>

      <!-- Contact Body (ES/EN) -->
      <div id='BodyContact'>
        <div class="container">
  
          <div class='row divContactRow' >
              <div id='DivContactLeft' class='col-lg-8 col-md-6 col-10'>
                <h1 id='spanishContactText' class='hContactTitle'> Contacto </h1>
                <h1 id='englishContactText' class='hContactTitle'> Contact </h1>

                <div class='col-lg-6 col-md-6 col-12'>
                  <div  class='container row'> <!--id='DivContactForm'-->
                    <b:includable id='main'>
                      <div id='DivContactForm' class='contact-form-widget formularios'>

                          <!-- Spanish Contact -->
                          <div id='spanishForm' class='form' style="margin-right:5%">
                            <form name='contact-form' style=''>
                                <p>Nombre</p>
                                <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='25' type='text' value='' />

                                <p style="margin-top:10%">Correo electrónico*</p>
                                <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='25' type='text' value='' />

                                <p style="margin-top:10%">Mensaje*</p>
                                <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'></textarea>
                                <p />
                                <div style="margin-left:40%">
                                  <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='submit' style='font-size: 18px;'/>
                                </div>
                                <p />
                                <div style='text-align: center; max-width: 222px; width: 100%'>
                                    <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;' />
                                    <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;' />
                                </div>
                            </form>
                        </div>

                          <!-- English Contact -->
                          <div id='englishForm' class='form'>
                            <form name='contact-form' style=''>
                                <p>Name</p>
                                <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='25' style='' type='text' value=''/>

                                <p style="margin-top:10%">Mail*</p> 
                                <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='25' style='' type='text' value=''/>

                                <p style="margin-top:10%">Message*</p> 
                                <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
                                <p/>
                                <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
                                <p/>
                                <div style='text-align: center; max-width: 222px; width: 100%'>
                                <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
                                <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
                                </div>
                            </form>
                          </div>

                      </div>
                    <b:include name='quickedit'/>
                    </b:includable>
                  </div>
                </div>
              </div>

              <div id='DivContactRight' class='col-lg-4 col-md-6 col-10' >
                <h1 id='spanishFindOnText'>Encuéntrame en</h1>
                <h1 id='englishFindOnText'>Find me on</h1>

                <div class='col-lg-6 col-md-6 col-12'>           
                  <div id='DivFindMe' class='container row' style = 'margin-top:-5%;'>
                    <div id='contactLinks' class= ''>

                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/5Nm0KK7.png' width='30'></img>
                          <a href='https://www.linkedin.com/in/laurarodriguezcorpas/' target='_blank' style='font-size:20px !important;'>LinkedIn</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/NzPu5gC.png' width='30'></img>
                          <a href='https://lauglitch.itch.io/' target='_blank' style='font-size:20px !important;'>itch.io</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/avPePyZ.png' width='30'></img>
                          <a href='https://github.com/lauglitch' target='_blank' style='font-size:20px !important;'>Github</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/ASYtMct.png' width='30'></img>
                          <a href='https://twitter.com/lauglitch' target='_blank' style='font-size:20px !important;'>Twitter</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/V76aIMg.png' width='30'></img>
                          <a href='https://www.instagram.com/lauglitch/' target='_blank' style='font-size:20px !important;'>Instagram</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://imgur.com/6wBNFrp.png' width='30'></img>
                          <a href='https://www.twitch.tv/lauglitch/' target='_blank' style='font-size:20px !important;'>Twitch</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://imgur.com/6kh73ZU.png' width='30'></img>
                          <a href='https://www.youtube.com/channel/UCWAWDAv_8jiMMDcurpnYEMg' target='_blank' style='font-size:20px !important;'>YouTube</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://imgur.com/TR4A0fq.png' style='' width='30'></img>
                          <a href='https://www.tiktok.com/@lauglitch' target='_blank' style='font-size:20px !important;'>TikTok</a>
                      </div>
                      
                    </div>
                  </div>
                </div> 
              </div>
          </div>

        </div>
      <!-- END Content -->
      </div>

    </div>
    <!-- END CONTENT -->

    <!-- FOOTER-->
    <div style='text-align: center; position: sticky;'>
      <div style='margin-bottom:5%;'> </div>
      <div class='footer-top'>
        <div class='container'>
          <div class='row'>
            <b:section class='footermain' id='footermainContact' preferred='yes'/>
          </div>
        </div>
      </div>

      <div id='footer'>
        <div>
          <center> &#169; Laura Rodríguez Corpas 2023</center>
        </div>
      </div>
    </div>

    <script defer='defer' src='lauglitchLogic.js'/> 
    <!-- END FOOTER --> 
  </body>
  <!-- END BODY --> 
</html>
