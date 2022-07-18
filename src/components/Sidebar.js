const DomSeguir = [<Seguir/>,<Seguir/>,<Seguir/>,<Seguir/>,<Seguir/>];

function Props_Box_img(props){
  return(
      <img src={props.img} alt="" class={props.class}/> 
  )
}

export default function Side_bar(){
    return(
        <div class="side-bar">
            <Perfil_principal />
            <div class="sugestoes-seguir">
                <p>Sugestões para você</p>
                Ver tudo
            </div>
            <div class="todos-seguir">
            {DomSeguir.map((seg) => (seg))}
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
          <Props_Box_img img = "./img/mel e pingo.jpeg" class="img-perfil-principal"/>
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
                <Props_Box_img img = "./img/mel e pingo.jpeg" class="img-perfil-seguir"/>
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
