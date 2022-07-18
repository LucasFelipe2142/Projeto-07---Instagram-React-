function Props_Box(props){
    return(
        <div class="img-name">
                    <img src={props.img} alt=""/>
                    <p>{props.name}</p>
                </div>
    )
}

export default function Box(){
    return(
        <div class="box-style">
            <div class="top-box"> 
                <Props_Box img ="./img/gato-telefone 1.png" name ="Meowed" />
                                   
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
