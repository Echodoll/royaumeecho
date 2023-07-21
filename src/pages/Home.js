import Logo from "../composents/Logo";
import Nav from "../composents/Navbar"
import News from "../composents/News";
import Chatons from "../composents/Noschaton";
import Presentation from "../composents/Presentation";
import gestation from "../picture/gestation.png"
import tao from '../picture/Capture d’écran 2023-07-21 à 16.06.00.png'
import tango from '../picture/Capture d’écran 2023-07-21 à 16.06.27.png'
import thales from '../picture/Capture d’écran 2023-07-21 à 16.07.16.png'
import volcansushi from '../picture/Capture d’écran 2023-07-21 à 16.08.21.png'
import logochatterie from '../picture/image-09-02-23-06-32.png'
function Home() {
    return (
        <div>
            <Nav />
            <Logo />
            <Presentation />
            <News newsImg={gestation}
                newsAlt="Gestation sisi et torreto"
                newsTitle="PT*Torreto TinysilverCat & Sisi"
                newsText={<ul>
                    <li>Tests</li>
                    <li>HCM : normal; </li>
                    <li>SMA : normal; </li>
                    <li>Pkdef : normal;</li>
                    <li>Groupe sanguin : nonb/nonb</li>
                    <li>Calicivirus : Négatif</li>
                    <li>HerpesVirose: Négatif</li>
                    <li>Tritrichomonas Foetus : Négatif</li>
                    <li>Giardiose : Négatif</li>
                    <li>Mychoplama felis: Négatif</li>
                </ul>}
            />
            <div>
                <h1 className="title__chatons">Nos chaton, comment vivent-ils ? </h1>
                <Chatons
                    picture={tao}
                    altPicture="Photos de Tao"
                    title="La naissance : "
                    text="À leurs naissances, Nanny est toujours présente. Pour que la future maman soit le plus détendu possible .
                Les premiers jours sont très importants, le suivi du poids deux fois par jour est fait afin de réagir rapidement 
                si le chaton a besoin d'un supplément de lait maternisé. Au cours de leurs premières semaines, 
                ils sont à côté du lit de Nanny, pour être très réactifs, et s'assurer que tout le monde va bien ."
                    className=""
                />
                <Chatons
                    picture={tango}
                    altPicture="Photos de Tao"
                    title="La nourriture : "
                    text="Jusqu’à leurs 4 semaines, les chatons sont exclusivement au lait maternel. Le sevrage est un processus très lent, 
                    nous collaborons uniquement avec la marque Royal Canin. La découverte des croquettes, le mimétisme,
                     peut durer quelques semaines."
                    className="flex__reverse"
                />
                <Chatons
                    picture={thales}
                    altPicture="Photos de Tao"
                    title="La sociabilisation : "
                    text="Dès leur plus jeune âge, nos loulous sont manipulés, accoutumés aux bruits quotidiens,
                     au séance de jeu quotidiennes avec moi-même ou les enfants.
                      Ils sont également habitués aux chiens. Et bien sûr,
                       ils sont souvent avec Nanny qui adore les embrasser."
                    className=""
                />
                <Chatons
                    picture={volcansushi}
                    altPicture="Photos de Tao"
                    title="Le depart : "
                    text="C'est le jour le plus triste pour Nanny, et le plus heureux pour leurs familles. 
                    Les bébés repartent avec un kit de démarrage croquettes, pâtée, jouets...
                    Ils partent vaccinés pour la première fois et reçoivent un rappel. 
                    Stérilisé dès l'âge de 3 mois. 
                    Et parés pour leur nouvelle vie."
                    className="flex__reverse"
                />

            </div>
            <div className="groupir">
                <img src={logochatterie} alt="logo "></img>
            </div>
        </div>
    )

}

export default Home;