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

      <script src='https://code.jquery.com/jquery-3.5.1.slim.min.js'/>

      <link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' rel='stylesheet'/>
      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'/>
      
      <link href='https://fonts.googleapis.com' rel='preconnect'/>
      <link crossorigin='anonymous;' href='https://fonts.gstatic.com' rel='preconnect'/>
      <link href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP&amp;display=swap' rel='stylesheet'/>
      <link href='https://lauglitch.github.io/lauglitch.com/lauglitchStyle.css' rel='stylesheet' type='text/css'/>

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
    <div class='loader-container'>
        <div class='loader'/>
    </div>
    
    <!-- NAVBAR -->
    <nav class='navbar navbar-inverse' style='background-color: #3b5998; animate: true; transition: all 0.15s;'>    
      <div class='container'> 

        <div class='row'>
            <!-- Logo Section -->
            <div class='col-lg-4 col-md-4 col-sm-6 col-12' id='DivLogo'>
                <button class='botonLogo transparent-button' id='lauglitchButton'>
                    <img src='https://imgur.com/uuOdmOV.png'/>
                </button>
            </div>
        </div>

        <div class='largeNavbar row' id='DivKeypad'>
          <!-- Language Selection Dropdown -->
          <div class='largeNavbar dropdown col-lg-4 col-md-4 col-sm-6 col-12' style='margin-top: 5%; margin-right: 15%;'>

            <button aria-expanded='false' aria-haspopup='true' class='largeNavbar boton transparent-button dropdown-toggle' data-toggle='dropdown' id='langButton' type='button'>
                <img height='50%' src='https://imgur.com/FZpaV40.png' width='50%'/>
            </button>
            
            <div aria-labelledby='langButton' class='dropdown-menu dropdown-large-margin align-center' id='langDropdown'>
                <button class='largeNavbar botonDrop transparent-button dropdown-item' id='spanishButton' type='button'>
                    <img src='https://imgur.com/iU8KDiy.png'/>
                </button>
                <button class='largeNavbar botonDrop transparent-button dropdown-item' id='englishButton' type='button'>
                    <img src='https://imgur.com/Wmd2JSQ.png'/>
                </button>
            </div>
         
          </div>

          <!-- Contact Button (On Mobile, each button occupies full width) -->
          <div class='col-lg-4 col-md-4 col-sm-12 col-12' style='margin-top: 5%;'>
              <div class='largeNavbar'>
                  <button class='largeNavbar boton transparent-button' id='contactButton'>
                      <img height='100%' src='https://imgur.com/WyqsCu9.png' width='100%'/>
                  </button> 
              </div> 
          </div> 

        </div>

        <div class='row' id='DivMore'>
          <!-- "More" Button (For Mobile View, each button occupies full width) -->
          <div class='dropdown col-lg-4 col-md-4 col-sm-6 col-12' style='margin-top: 5%;'>
              <button aria-expanded='false' aria-haspopup='true' class='smallNavbar boton transparent-button dropdown-toggle' data-toggle='dropdown' id='moreButton' type='button'>
                  <img height='50%' src='https://imgur.com/skCGjQf.png' width='50%'/>
              </button> 

              <div aria-labelledby='moreButton' class='dropdown-menu dropdown-menu-center dropdown-small-margin' id='moreDropdown'>
                    <button class='smallNavbar botonDrop transparent-button dropdown-item' id='contactButtonMobile' type='button'>
                        <img src='https://imgur.com/WyqsCu9.png'/>
                    </button>
                    
                    <button aria-expanded='false' aria-haspopup='true' class='smallNavbar transparent-button dropdown-toggle dropdown-item' data-toggle='dropdown' id='langButtonMobile' type='button'>
                        <img class='langDropdownMobile-margin' height='50%' src='https://imgur.com/FZpaV40.png' width='50%'/>
                    </button>

                    <div aria-labelledby='langButton' class='smallNavbar dropdown-menu dropdown-menu-center' id='langDropdownMobile'>
                        <button class='smallNavbar botonDrop transparent-button dropdown-item' id='spanishButtonMobile' type='button'>
                            <img src='https://imgur.com/yMcZxYg.png'/>
                        </button>
                        <button class='smallNavbar smallNavbar botonDrop transparent-button dropdown-item' id='englishButtonMobile' type='button'>
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

            <p id='spanishBio' style='font-size:20px !important;'>
              Diseñadora y Desarrolladora de Videojuegos 🎮 😄
              <br/>
              Amante de los gatitos 🐱, la música 🎵 y los viajes 🌍
              <br/>
              📍 Madrid (España)
              <br/>
            </p>

            <p id='englishBio' style='font-size:20px !important;'>
              Videogame Designer and Developer 🎮 😄
              <br/>
              Kitty 🐱, music 🎵 and travelling 🌍 lover
              <br/>
              📍 Madrid (España)
              <br/>
            </p>
          </div>
        </section>

        <template id='image-template'>
          <div class='image-container'>
            <img class='img-fluid'/>
            <div class='centered-text margenesTitulosJuegos'>
              <a/>
            </div>
          </div>
        </template>
        
        <div class='container' id='DivImages' style='margin-top:5%'>
          
        </div>

      </div>

      <!-- Contact Body (ES/EN) -->
      <div id='BodyContact'>
        <div class='container'>
  
          <div class='row divContactRow'>
              <div class='col-lg-8 col-md-6 col-10' id='DivContactLeft'>
                <h1 class='hContactTitle' id='spanishContactText'> Contacto </h1>
                <h1 class='hContactTitle' id='englishContactText'> Contact </h1>

                <div class='col-lg-6 col-md-6 col-sm-6 col-12' style='min-width:100%; margin-bottom:15%'>
                  <div class='container row'> <!--id='DivContactForm'-->
             
                      <div class='contact-form-widget formularios' id='DivContactForm'>

                          <!-- Spanish Contact --> 
                          <b:section id='spanishForm' preferred='yes' style='margin-right:5%'>
                             <b:widget id='ContactForm1' locked='false' title='spanishForm' type='ContactForm' version='1'>
                               <b:includable id='main'>
                                <b:if cond='data:title != &quot;&quot;'>
                                  <h2 class='title' style='display:none'><data:title/></h2>
                                </b:if>
                                <div class='contact-form-widget'>
                                  <div class='form'>
                                    <form name='contact-form'>
                                      <p style='margin-top:5%'>Nombre</p>
                                      <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' type='text' value=''/>
                                      <p style='margin-top:5%'>email*</p>
                                      <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' type='text' value=''/>
                                      <p style='margin-top:5%'>Mensaje*</p>
                                      <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
                                      <p/>
                                      <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' style='margin-top:2.5%; margin-left:30%' type='button'/>
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
                             </b:widget>
                           </b:section>

                          <!-- English Contact -->
                          <b:section id='englishForm' preferred='yes' style='margin-right:5%'>
                            <b:widget id='ContactForm2' locked='false' title='englishForm' type='ContactForm' version='1'>
                              <b:includable id='main'>
                                <b:if cond='data:title != &quot;&quot;'>
                                  <h2 class='title' style='display:none'><data:title/></h2>
                                </b:if>
                                <div class='contact-form-widget'>
                                  <div class='form'>
                                    <form name='contact-form'>
                                      <p style='margin-top:5%'>Name</p>
                                      <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' type='text' value=''/>
                                      <p style='margin-top:5%'>email*</p>
                                      <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' type='text' value=''/>
                                      <p style='margin-top:5%'>Message*</p>
                                      <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
                                      <p/>
                                      <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' style='margin-top:2.5%; margin-left:30%' type='button'/>
                                      <p/>
                                      <div style='text-align: center; max-width: 222px; width: 100%'>
                                        <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'>An error occurred while submitting the form.</p>
                                        <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'>Form submitted successfully.</p>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                                <b:include name='quickedit'/>
                              </b:includable>
                            </b:widget>
                          </b:section>

                      </div>
                  
                  </div>
                </div>
              </div>

              <div class='col-lg-4 col-md-6 col-10' id='DivContactRight'>
                <h1 id='spanishFindOnText'>Encuéntrame en</h1>
                <h1 id='englishFindOnText'>Find me on</h1>

                <div class='col-lg-6 col-md-6 col-12' style='margin-top:5%; min-width:100%'>           
                  <div class='container row' id='DivFindMe' style='margin-top:-5%;'>
                    <div class='' id='contactLinks'>

                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/5Nm0KK7.png' width='30'/>
                          <a href='https://www.linkedin.com/in/laurarodriguezcorpas/' style='font-size:20px !important;' target='_blank'>LinkedIn</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/NzPu5gC.png' width='30'/>
                          <a href='https://lauglitch.itch.io/' style='font-size:20px !important;' target='_blank'>itch.io</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/avPePyZ.png' width='30'/>
                          <a href='https://github.com/lauglitch' style='font-size:20px !important;' target='_blank'>Github</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/ASYtMct.png' width='30'/>
                          <a href='https://twitter.com/lauglitch' style='font-size:20px !important;' target='_blank'>Twitter</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://i.imgur.com/V76aIMg.png' width='30'/>
                          <a href='https://www.instagram.com/lauglitch/' style='font-size:20px !important;' target='_blank'>Instagram</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://imgur.com/6wBNFrp.png' width='30'/>
                          <a href='https://www.twitch.tv/lauglitch/' style='font-size:20px !important;' target='_blank'>Twitch</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://imgur.com/6kh73ZU.png' width='30'/>
                          <a href='https://www.youtube.com/channel/UCWAWDAv_8jiMMDcurpnYEMg' style='font-size:20px !important;' target='_blank'>YouTube</a>
                      </div>
                      <div class='contact-links-container'>
                          <img height='30' src='https://imgur.com/TR4A0fq.png' style='' width='30'/>
                          <a href='https://www.tiktok.com/@lauglitch' style='font-size:20px !important;' target='_blank'>TikTok</a>
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
          </div>
        </div>
      </div>

      <div id='footer'>
        <div>
          <center> &#169; Laura Rodríguez Corpas 2023</center>
        </div>
      </div>
    </div>
    <script>

    </script>

    <script defer='defer' src='https://lauglitch.github.io/lauglitch.com/lauglitchLogic.js'/> 
    <!-- END FOOTER --> 
  </body>
  <!-- END BODY --> 
</html>
