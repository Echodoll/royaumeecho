import "../assets/home.css"

function Nav() {
    return (
        <header className="nav">
            <div className="nav__title">
                <h1>Chatterie Le Royaume d'Echo</h1>
            </div>
            <div className="nav__route">
                <ul>
                    <li>Nos reproducteurs</li>
                    <li>Nos chatons</li>
                    <li>Mariages</li>
                    <li>Condition d'adoption</li>
                </ul>
            </div>
        </header>
    )
}
export default Nav  