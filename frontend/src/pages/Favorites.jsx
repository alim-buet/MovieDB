import "../css/Favorites.css";

function Favorites() {
    return (
        <div className="favorites">
            <div className="favorites-empty">
                <h2>No favourite movies yet</h2>
                <p>Start adding movies to your favourites and they will appear here</p>
            </div>
        </div>
    );
}

export default Favorites;