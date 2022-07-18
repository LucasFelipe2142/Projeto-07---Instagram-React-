import Storie from "./Storie"
import Box from "./Box"
import Footer from "./Footer"

const DomStories = [<Storie/>,<Storie/>,<Storie/>,<Storie/>,<Storie/>,<Storie/>,<Storie/>,<Storie/>];
const DomBox = [<Box/>,<Space/>,<Box/>,<Space/>,<Box/>,<Space/>,<Box/>,<Space/>,,<Box/>,<Space/>];

export default function ConteudoFeed(){
    return(
        <div class='conteudo-feed'>
            <div class="every-stories">
                <div class="stories">
                {DomStories.map((Stories) => (Stories))}
                </div>
            </div>
            {DomBox.map((Boxs) => (Boxs))}
            <Footer />
        </div>
    );
}

function Space(){
    return(
        <div class="space"></div>  
    )
}