export default function Person_Stories() {
    return (
        <Props_Box img="./img/stories_background.jpg" img2="./img/cruzeirao cabuloso.png" name="respondeai" />
    );
}

function Props_Box(props) {
    return (
        <div class="person-storie-complete">

            <div class="person-storie">
                <img src={props.img} class="background-storie" />
                <img src={props.img2} class="img-storie" />
            </div>

            <div class="person-storie-name">
                {props.name}
            </div>

        </div>
    )
}
