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
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'/>
    <link href='//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css' rel='stylesheet' type='text/css'/>
    <link href="https://lauglitch.github.io/lauglitch.com/lauglitchStyle.css" rel="stylesheet" type="text/css"/>

    <b:skin><![CDATA[     
    /*
    -----------------------------------------------
    Lauglitch Theme's XML Template
    -----------------------------------------------
    Name           : lauglitchTheme
    Version        : 1.1
    Author         : Laura Rodríguez Corpas
    Author  URL    : http://www.lauglitch.com/
    Date           : July, 2023
    -----------------------------------------------
    License:
    This free Blogger template is licensed under the Creative Commons Attribution 3.0 License, which permits both personal and commercial use.
    However, to satisfy the 'attribution' clause of the license, you are required to keep the footer links intact which provides due credit to its authors. For more specific details about the license, you may visit the URL below:
    http://creativecommons.org/licenses/by/3.0/
    ----------------------------------------------- */
    }
   }
  }
  ]]></b:skin>
  </head>

  <body>
    <nav class='navbar navbar-inverse navbar-static-top justify-content-between'>
      <div class='container'>
        <div class='navbar-header' style=''>
          <button class='navbar-toggle' data-target='.navbar-collapse' data-toggle='collapse' type='button'>
            <span class='icon-bar'/>
            <span class='icon-bar'/>
            <span class='icon-bar'/>
          </button>
          <b:section class='' id='blog-title' maxwidgets='5' showaddelement='yes'>
            <b:widget id='Header1' locked='false' title='lauglitch (cabecera)' type='Header' version='1'>
              <b:widget-settings>
                <b:widget-setting name='displayUrl'/>
                <b:widget-setting name='displayHeight'>0</b:widget-setting>
                <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
                <b:widget-setting name='useImage'>false</b:widget-setting>
                <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
                <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
                <b:widget-setting name='displayWidth'>0</b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
                <b:if cond='data:useImage'>
                  <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
                    <!--
                    Show image as background to text. You can't really calculate the width
                    reliably in JS because margins are not taken into account by any of
                    clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
                    width if the user is using shrink to fit.
                    This results in a margin-width's worth of pixels being cropped. If the
                    user is not using shrink to fit then we expand the header.
                    -->
                    <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height + &quot;px;&quot;                      + &quot;_height: &quot; + data:height + &quot;px;&quot;                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
                      <div class='titlewrapper' style='background: transparent'>
                        <h1 class='title' style='background: transparent; border-width: 0px'>
                          <b:include name='title'/>
                        </h1>
                      </div>
                      <b:include name='description'/>
                    </div>
                    <b:else/>
                    <!--Show the image only-->
                    <div id='header-inner'>
                      <a expr:href='data:blog.homepageUrl' style='display: block'>
                        <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
                      </a>
                      <!--Show the description-->
                      <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
                        <b:include name='description'/>
                      </b:if>
                    </div>
                  </b:if>
                  <b:else/>

                  <!-- logoLauglitch -->
                  <div id='header-inner'>
                    <div class='titlewrapper'>
                  
                      <!-- ES: Página Principal-->
                      <div>
                        <h1 class='h-title'>
                            <!-- Desactivamos el botón lauglitch (el de ir a menú principal, porque ya estamos en él)-->
                            <img id ='lauglitchButton' height='80' src='https://i.imgur.com/SCBJ3WO.png' width='240'/>
                          </h1>
                        <b:include name='description'/>
                      </div>

                    </div>
                  </div>
                </b:if>
              </b:includable>
              <b:includable id='description'>
                <div class='descriptionwrapper'>
                  <p class='description'>
                    <span>
                      <data:description/>
                    </span>
                  </p>
                </div>
              </b:includable>
              <b:includable id='title'>
                <b:if cond='data:blog.url == data:blog.homepageUrl'>
                  <data:title/>
                  <b:else/>
                  <a expr:href='data:blog.homepageUrl'>
                    <data:title/>
                  </a>
                </b:if>
              </b:includable>
            </b:widget>
          </b:section>
        </div>

        <!-- Barra superior azul -->
        <nav class='navbar-right' style='animate: true; transition: all 0.15s;'>
            
            <!--  -->
            <div id='keypadsInicio' style='margin-top: 25px; margin-right: 20px; display: block'>
                <table style='margin-left: 25px;'>
                    <tr>
                      <td style='padding-right: 20px;'> <a href="#" class="boton"><img height='50' src='https://imgur.com/zuWBFor.png' width='50' id='spanishButton'/></a> </td>
                      <td style='padding-right: 20px;'> <a href="#" class="boton"><img height='50' src='https://imgur.com/K5Ui26c.png' width='50' id='englishButton'/></a> </td>
                      <td style='padding-right: 20px;'> <a href="#" class="boton"><img height='50' src='https://i.imgur.com/gSjJPIL.png' width='50' id='contactButton'/></a> </td>
                   </tr>
                </table>
            </div>     

        </nav>
     
        <!-- END Barra superior azul -->
      </div>
    </nav>

    <!-- Cuerpo -->
    <div id='body-templates' style='min-height: 100vh;'>

      <!-- ES: Página Principal -->
      <div id='bodyInicio'>
        <section id='portfolio'>
          <div class='portfolio-block'>
            <div class='cuerpo-block'>
            <img height='150' src='https://i.imgur.com/ryP6CTY.png' width='150'/>
            <h1>
              @lauglitch
            </h1>
            <p class='tamanoBiografia'>
              Diseñadora y Desarrolladora de Videojuegos 🎮 😄
              <br/>
              Amante de los gatitos 🐱, la música 🎵 y los viajes 🌍
              <br/>
              📍 Madrid (España)
              <br/>
            </p>

          </div>
          </div>
        </section>
        <div class='container-fluid'>
    
          <div class='row'>

            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/cCrx5qm.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://lauglitch.itch.io/instracker'>InsTracker</a>
              </div>
            </div>
            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/zPOmBx0.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://lauglitch.itch.io/twitracker'>TwiTracker</a>
              </div>
            </div>
            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/dYV13M3.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://iviuriel.itch.io/if-i'>If I</a>
              </div>
            </div>

          </div>

          <div class='row'>

            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/9AFJqM6.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://rodillos-gaming.itch.io/desktop-tower-chess'>Desktop Tower Chess</a>
              </div>
            </div>
          
            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/sGqxp4O.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://rodillos-gaming.itch.io/triskel'>Triskel</a>
              </div>
            </div>

            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/lCPmpak.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://diegodiaz.itch.io/wanted-point-and-shot'>Wanted: Point And Shot</a>
              </div>
            </div>

            <div class='col-lg-4 contenedor'>

              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/peFNJO8.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://castlesgames.github.io/'>Knights And Castles</a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- EN: Cuerpo Home -->
      <div id='bodyHome'>
        <section id='portfolioEN'>
          <div class='portfolio-block'>
            <div class='cuerpo-block'>
            <img height='150' src='https://i.imgur.com/ryP6CTY.png' width='150'/>
            <h1>
              @lauglitch
            </h1>
            <p class='tamanoBiografia'>
              Videogame Designer and Developer 🎮 😄
              <br/>
              Kitty 🐱, music 🎵 y travelling 🌍 lover
              <br/>
              📍 Madrid (España)
              <br/>
            </p>

          </div>
          </div>
        </section>
        <div class='container-fluid'>
    
          <div class='row'>

            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/cCrx5qm.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://lauglitch.itch.io/instracker'>InsTracker</a>
              </div>
            </div>
            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/zPOmBx0.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://lauglitch.itch.io/twitracker'>TwiTracker</a>
              </div>
            </div>
            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/dYV13M3.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://iviuriel.itch.io/if-i'>If I</a>
              </div>
            </div>

          </div>

          <div class='row'>

            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/9AFJqM6.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://rodillos-gaming.itch.io/desktop-tower-chess'>Desktop Tower Chess</a>
              </div>
            </div>
          
            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/sGqxp4O.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://rodillos-gaming.itch.io/triskel'>Triskel</a>
              </div>
            </div>

            <div class='col-lg-4 contenedor'>
              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/lCPmpak.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://diegodiaz.itch.io/wanted-point-and-shot'>Wanted: Point And Shot</a>
              </div>
            </div>

            <div class='col-lg-4 contenedor'>

              <div class='row mb-2 postImagen contenido'>
                <img class='tamanoImagen' src='https://imgur.com/peFNJO8.png'/>
              </div>
              <div class='row mb-2 contenido'>
                <a class='tamanoTituloJuego' href='https://castlesgames.github.io/'>Knights And Castles</a>
              </div>

            </div>

          </div>

        </div>
      </div>
      
      <!-- ES: Cuerpo Contacto -->
      <div id='bodyContacto'>
        <div class='container row bloqueContacto' id='container' style='margin-bottom:30px;'>
                <!-- Contenedor main para widgets -->
                <b:if cond='data:blog.pageType == &quot;index&quot;'>
                &lt;div class=&#39;col-xs-12 col-sm-12 col-md-12 col-lg-12&#39;&gt;
                <b:else/>
                &lt;div class=&#39;col-xs-12 col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2&#39;&gt;
                </b:if>
            
                <b:if cond='data:blog.pageType != &quot;index&quot;'>
                &lt;/div&gt;
                <b:else/>
                &lt;/div&gt;
                </b:if>

                <!-- Español -->
                <!-- <b:if cond='data:blog.pageType != &quot;static_page&quot;'> -->
                <h1 class='tituloContacto' style='text-align: left;'> Contacto </h1>

                <div class='row'>
                    <div class='col-lg-4 bloqueFormulario'>
                    <b:section class='main' id='main' showaddelement='yes'>
                      <b:widget id='ContactForm1' locked='false' title='Contacto' type='ContactForm' version='1'>
                        <b:includable id='main'>
                            <div class='contact-form-widget'>
                                <div class='form'>
                                <form name='contact-form' style='margin-top:-2%;'>
                                    <p>Nombre</p>
                                    <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' style='margin-bottom:15%;' type='text' value=''/>

                                    <p>Correo electrónico*</p> 
                                    <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' style='margin-bottom:15%;' type='text' value=''/>

                                    <p>Mensaje*</p> 
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
                      </b:widget>
                    </b:section>
                    </div>
                
                    <div class='col-lg-6 linksContactoResponsive'>
                    <div class='row' style='margin-bottom:5%;'>
                        <h1 class='margenLinksContacto' style='margin-left:-15px'>Encuéntrame en</h1>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.linkedin.com/in/laurarodriguezcorpas/' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/5Nm0KK7.png' style='margin-right:1%;' width='30'/>LinkedIn </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://lauglitch.itch.io/' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/NzPu5gC.png' style='margin-right:1%;' width='30'/>itch.io </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://github.com/lauglitch' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/avPePyZ.png' style='margin-right:1%;' width='30'/>Github </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://twitter.com/lauglitch' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/ASYtMct.png' style='margin-right:1%;' width='30'/>Twitter </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.instagram.com/lauglitch/' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/V76aIMg.png' style='margin-right:1%;' width='30'/>Instagram </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.twitch.tv/lauglitch/' style='font-size:20px !important;'><img height='30' src='https://imgur.com/6wBNFrp.png' style='margin-right:1%;' width='30'/>Twitch </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.youtube.com/channel/UCWAWDAv_8jiMMDcurpnYEMg' style='font-size:20px !important;'><img height='30' src='https://imgur.com/6kh73ZU.png' style='margin-right:1%;' width='30'/>YouTube </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.tiktok.com/@lauglitch' style='font-size:20px !important;'><img height='30' src='https://imgur.com/TR4A0fq.png' style='margin-right:1%;' width='30'/>TikTok </a>
                    </div>
                    </div>
                </div>

                <!-- END Content -->
        </div>
      </div>

      <!-- EN: Cuerpo Contact -->
      <div id='bodyContact'>
        <div class='container row bloqueContacto' id='container' style='margin-bottom:30px;'>
                <!-- Contenedor main para widgets -->
                <b:if cond='data:blog.pageType == &quot;index&quot;'>
                &lt;div class=&#39;col-xs-12 col-sm-12 col-md-12 col-lg-12&#39;&gt;
                <b:else/>
                &lt;div class=&#39;col-xs-12 col-sm-8 col-md-8 col-lg-8 col-sm-offset-2 col-md-offset-2 col-lg-offset-2&#39;&gt;
                </b:if>
            
                <b:if cond='data:blog.pageType != &quot;index&quot;'>
                &lt;/div&gt;
                <b:else/>
                &lt;/div&gt;
                </b:if>

                <!-- Español -->
                <!-- <b:if cond='data:blog.pageType != &quot;static_page&quot;'> -->
                <h1 class='tituloContacto' style='text-align: left;'> Contact </h1>

                <div class='row'>
                    <div class='col-lg-4 bloqueFormulario'>
                    <b:section class='main' id='main2' showaddelement='yes'>
                      <b:widget id='ContactForm2' locked='false' title='Contacto' type='ContactForm' version='1'>
                        <b:includable id='main'>
                            <div class='contact-form-widget'>
                                <div class='form'>
                                <form name='contact-form' style='margin-top:-2%;'>
                                    <p>Name</p>
                                    <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' style='margin-bottom:15%;' type='text' value=''/>

                                    <p>Mail*</p> 
                                    <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' style='margin-bottom:15%;' type='text' value=''/>

                                    <p>Message*</p> 
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
                      </b:widget>
                    </b:section>
                    </div>
                
                    <div class='col-lg-6 linksContactoResponsive'>
                    <div class='row' style='margin-bottom:5%;'>
                        <h1 class='margenLinksContacto' style='margin-left:-15px'>Find me on</h1>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.linkedin.com/in/laurarodriguezcorpas/' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/5Nm0KK7.png' style='margin-right:1%;' width='30'/>LinkedIn </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://lauglitch.itch.io/' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/NzPu5gC.png' style='margin-right:1%;' width='30'/>itch.io </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://github.com/lauglitch' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/avPePyZ.png' style='margin-right:1%;' width='30'/>Github </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://twitter.com/lauglitch' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/ASYtMct.png' style='margin-right:1%;' width='30'/>Twitter </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.instagram.com/lauglitch/' style='font-size:20px !important;'><img height='30' src='https://i.imgur.com/V76aIMg.png' style='margin-right:1%;' width='30'/>Instagram </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.twitch.tv/lauglitch/' style='font-size:20px !important;'><img height='30' src='https://imgur.com/6wBNFrp.png' style='margin-right:1%;' width='30'/>Twitch </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.youtube.com/channel/UCWAWDAv_8jiMMDcurpnYEMg' style='font-size:20px !important;'><img height='30' src='https://imgur.com/6kh73ZU.png' style='margin-right:1%;' width='30'/>YouTube </a>
                    </div>
                    <div class='row' style='margin-bottom:5%;'>
                        <a href='https://www.tiktok.com/@lauglitch' style='font-size:20px !important;'><img height='30' src='https://imgur.com/TR4A0fq.png' style='margin-right:1%;' width='30'/>TikTok </a>
                    </div>
                    </div>
                </div>
                <!-- END Content -->
        </div>
      </div>
    </div>
    <!-- END Cuerpo -->

    <!-- Footer-->
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
    <!-- END Footer --> 

  <!-- END Body --> 
  <script defer='defer' src='https://cdn.jsdelivr.net/gh/jquery/jquery@3/dist/jquery.min.js'/>

  <!-- JS Logic -->
   <script defer='defer' src='https://lauglitch.github.io/lauglitch.com/lauglitchLogic.js'></script> 
  <!-- END JS Logic --> 

 </body>
</html>
