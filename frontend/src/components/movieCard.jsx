import "../css/MovieCard.css";

function MovieCard({ movie }) {
    function onFavoriteClick() {
        alert("Button clicked");
    }
    //the props is a movie object that we will get from some api maybe
    return (
        <div className="movie-card" style={{ width: '200px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
            <div className="movie-poster" style={{ position: 'relative' }}>
                <img
                    src={movie.url}
                    alt={movie.title}
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover'
                    }}
                />
                <div className="movie-overlay" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ♡
                    </button>
                </div>
            </div>
            <div className="movie-info" style={{ padding: '10px' }}>
                <h3 style={{ fontSize: '1rem', margin: '0 0 5px' }}>{movie.title}</h3>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>{movie.release_Date}</p>
            </div>
        </div>
    );


}
export default MovieCard;