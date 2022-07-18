import ReactDOM from 'react-dom';
import Topo from "./components/Topo"
import Top_935 from "./components/Topo935"
import Top_desktop from "./components/TopoDesktop"
import Feed from "./components/Feed"

function Container(){
    console.log("foi")
    return(
        <div class='container'>
            <Topo />
            <Top_935 />
            <Top_desktop />
            <div className="compensando-topo"></div>
            <Feed />
            

        </div>
    );
}
ReactDOM.render(<Container />, document.querySelector(".root"));