import Logo from "../composents/Logo";
import Nav from "../composents/Navbar"
import News from "../composents/News";
import Presentation from "../composents/Presentation";
import gestation from "../picture/gestation.png"


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
        </div>
    )

}

export default Home;