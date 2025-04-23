import MovieCard from "../components/movieCard"
import { useState } from "react";
import "../css/Home.css";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");


    const movies = [{ id: 1, title: "John Wick", release_Date: "2020" },
    { id: 2, title: "Terminator", release_Date: "1999" },
    { id: 3, title: "The matrix", release_Date: "1998" }
    ]
    const handleSearch = (e) => {
        e.preventDefault();
        // alert(`I am ${searchQuery}`);
        // setSearchQuery("------"); 


    }

    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>

            </form>


            <div className="movies-grid">
                {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
            </div>
        </div>
    )

}
export default Home;