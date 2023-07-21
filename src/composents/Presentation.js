import opium from "../picture/opium.png"

function Presentation() {
    return (
        <section className="presentation">
            <div className="presentation__image">

                <img src={opium} alt="photos d'opium" className="presentation__image--opium"></img>
            </div>
            <div className="presentation__text">
                <div className="presentation__text--"></div>
                <p>
                    Je me présente, je suis Justine alias "Nany", ma passion pour le Maine Coon à débuté en 2018,
                    quand j'ai fait l'acquisition de ma Demoiselle "Opium", un petit morceau blue silver blotched tabby.
                    <br />Et la, est arrivée en moi une volonté de rendre
                    heureux mes adoptants, de voir le sourire sur eux, me remplie de joie .<br />
                    <br /> Nos valeurs :
                    <br />
                </p>
                <ul><br />
                    <li> Une sélection pointilleuse de nos reproducteurs;</li>
                    <li> Travailler uniquement les couleurs qu'on aime : le silver et smoke;</li>
                    <li> Le dépistage des maladies de la race et infectieuses; </li>
                    <li> Ambiance familiale, ma priorité est le bien-être animal;</li>
                    <li> Nos coons vivent avec nous, enfants, chien ;</li>
                </ul>
            </div>
        </section>
    )
}
export default Presentation