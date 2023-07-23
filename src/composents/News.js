import "../assets/home.css"

function News(props) {

    const { newsImg, newsText, newsAlt, newsTitle } = props;
    return (
        <div>

            <h1 className="title__chatons">Actualité : Mariage Sisi et Torreto  </h1>
            <section className="news">
                <div className="news__image">
                    <img src={newsImg} alt={newsAlt}></img>
                </div>
                <div className="news__text">
                    <h1>{newsTitle}</h1>
                    <p>{newsText}</p>
                </div>
            </section>
        </div>
    )
}

export default News