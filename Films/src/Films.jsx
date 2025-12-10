import './css/Films.css'

function Films({ film }) {
    const { FilmName, image } = film;

    return (
        <div className='film'>
            <img src={image} alt={FilmName} />
            <h4 className="course-title">{FilmName}</h4>
        </div>
    );
}

export default Films;
