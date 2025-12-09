import './css/Films.css'
function Films({ film }) {
    const { id, FilmName, FilmGenre, imdb, image } = film;
    return (
        <div className='film'>
            <img src={image} alt={FilmName} width={150} height={150} />
            <h4 className="course-title">{FilmName}</h4>
            <p className="Film-Genre">{FilmGenre}</p>
            <h4 className="course-price">{imdb}</h4>
        </div>
    );
}

export default Films
