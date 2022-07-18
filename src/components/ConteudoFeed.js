import Storie from "./Storie"
import Box from "./Box"
import Footer from "./Footer"

export default function ConteudoFeed(){
    return(
        <div class='conteudo-feed'>
            <div class="every-stories">
                <div class="stories">
                    <Storie/>
                    <Storie/>
                    <Storie/>
                    <Storie/>
                    <Storie/>
                    <Storie/>
                    <Storie/>
                    <Storie/>
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