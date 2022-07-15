import ReactDOM from 'react-dom';

function Container(){
    console.log("foi")
    return(
        <div class='container'>
            <Top />
            <Top_935 />
            <Top_desktop />
            <div className="compensando-topo"></div>
            <FeedSidebar />
            

        </div>
    );
}



function Footer(){
    return(
        <div class="footer">
                
            <ion-icon name="home" class="icon-footer home"></ion-icon>
            <ion-icon name="search-outline" class="icon-footer"></ion-icon>
            <ion-icon name="add-circle-outline" class="icon-footer"></ion-icon>
            <ion-icon name="heart-outline" class="icon-footer outline"></ion-icon>
                    
        </div>
    )
}

function FeedSidebar(){

    return(
        <div class="feed-and-side-bar">
            <ConteudoFeed />
            <Side_bar />
        </div>);
}

function ConteudoFeed(){
    return(
        <div class='conteudo-feed'>
            <div class="every-stories">
                <div class="stories">
                    <Person_Stories/>
                    <Person_Stories/>
                    <Person_Stories/>
                    <Person_Stories/>
                    <Person_Stories/>
                    <Person_Stories/>
                    <Person_Stories/>
                    <Person_Stories/>
                </div>
            </div>
            <Box />
            <div class="space"></div>
            <Box />
            <div class="space"></div>
            <Box />
            <div class="space"></div>
            <Box />
            <Footer />
        </div>
    );
}

function Person_Stories(){
    return(
                    <div class="person-storie-complete">

                        <div class="person-storie">
                            <img src="./img/stories_background.jpg" class="background-storie"/>
                            <img src="./img/cruzeirao cabuloso.png" class="img-storie"/>
                        </div>

                        <div class="person-storie-name">
                            respondeai
                        </div>

                    </div>
    );
}

function Top(){
    return(
        <div class="top">
            <ion-icon name="logo-instagram" class="icone-camera"></ion-icon>
            <img src="./img/logo 1.png" alt="instagram" class="instagram"/>
            <ion-icon name="paper-plane-outline" class="icone-enviar"></ion-icon>
        </div>
    );
}

function Top_935(){
    return(
        <div class="top-935px">


      <div class="esquerda-top-935px">

        <ion-icon name="logo-instagram" class="icone-camera"></ion-icon>
        <div class="border-center-esq-top-935"></div>
        <img src="./img/logo 1.png" alt="instagram" class="instagram"/>

      </div>

      <input class="center-top-935px" type="text" placeholder="Pesquisar"/>


      <div class="direita-topo-935px">
        <ion-icon name="paper-plane-outline" class="icon-935"></ion-icon>
        <ion-icon name="compass-outline" class="icon-935"></ion-icon>
        <ion-icon name="heart-outline" class="icon-935"></ion-icon>
        <ion-icon name="person-outline" class="icon-935"></ion-icon>

      </div>


    </div>
    );
}

function Top_desktop(){
    return(
        <div class="top-desktop">
            <div class="top-desktop-align">


                <div class="esquerda-top-935px">

                    <ion-icon name="logo-instagram" class="icone-camera"></ion-icon>
                    <div class="border-center-esq-top-935"></div>
                    <img src="./img/logo 1.png" alt="instagram" class="instagram"/>
        
                </div>
        
        
                <input class="center-top-935px" type="text" placeholder="Pesquisar"/>
        
        
                <div class="direita-topo-935px">
                    <ion-icon name="paper-plane-outline" class="icon-935"></ion-icon>
                    <ion-icon name="compass-outline" class="icon-935"></ion-icon>
                    <ion-icon name="heart-outline" class="icon-935"></ion-icon>
                    <ion-icon name="person-outline" class="icon-935"></ion-icon>
        
                </div>


            </div>
        </div>
    )
}

function Box(){
    return(
        <div class="box-style">
            <div class="top-box"> 
                <div class="img-name">
                    <img src="./img/gato-telefone 1.png" alt=""/>
                    <p>meowed</p>
                </div>
                                   
                <div class="icone-top-box">
                    <ion-icon name="ellipsis-horizontal" ></ion-icon>
                            
                            
                </div>
            </div>

            <div class="imagem-box"><img src="./img/gato-telefone 1.png" alt=""/></div>

            <div class="footer-completo-box">

                <div class="footer-box">

                    <div class="esquerda-footer-box">
                        <ion-icon name="chatbubble-outline" class="icon-footer"></ion-icon>
                        <ion-icon name="paper-plane-outline" class="icon-footer"></ion-icon>
                        <ion-icon name="heart-outline" class="icon-footer"></ion-icon>
                    </div>

                    <div class="direita-footer-box">
                        <ion-icon name="bookmark-outline" class="icon-footer"></ion-icon>
                    </div>

                </div>

                <div class="bottom-footer-box">
                    <img src="./img/respondeai 2.png" class="img-footer-box"/>
                    <div class="texto-curtidas">Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong> </div>        
                </div>
                    
            </div>
        </div>
        
    );
}


function Side_bar(){
    return(
        <div class="side-bar">
            <Perfil_principal />
            <div class="sugestoes-seguir">
                <p>Sugestões para você</p>
                Ver tudo
            </div>
            <div class="todos-seguir">
                <Seguir />
                <Seguir />
                <Seguir />
                <Seguir />
                <Seguir />
            </div>
            <Menu_Footer_Sidebar />
            <Reference_footer_sidebar />
        </div>
    )
}

function Perfil_principal(){
    return(
        <div class="perfil-principal">
          <div class="perfilprincipal-imagem">
            <img src="./img/mel e pingo.jpeg" class="img-perfil-principal"/>
          </div>
          <div class="perfil-principal-nome">
            <p>Pingo e Mel</p>
            pingmel
          </div>
        </div>
    )
}

function Seguir(){
    return(
        <div class="seguir">
            <div class="perfil-seguir">
              <div class="perfil-seguir-imagem">
                <img src="./img/mel e pingo.jpeg" class="img-perfil-seguir"/>
              </div>
              <div class="perfil-seguir-nome">
                <p>Pingo e Mel</p>
                pingmel
              </div>
            </div>
            <p class="seguir-azul">Seguir</p>
        </div>
    )
}

function Menu_Footer_Sidebar(){
    return(
        <div class="menu-footer-sidebar">
          <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Termos • Localizações • Contas mais relevantes • Hashtags •
            Idioma
          </p>
        </div>
    )
}

function Reference_footer_sidebar(){
    return(
        <div class="reference-footer-sidebar">
          <p>© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    )
}
ReactDOM.render(<Container />, document.querySelector(".root"));