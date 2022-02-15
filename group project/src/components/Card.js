import react from 'react';

const Card=(movie)=>{
    console.log(movie.info);
    let img_path="https://image.tmdb.org/t/p/w500"
    return(
        <>
            <div className='movie'>
                <img src={img_path+movie.info.poster_path} className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">Movie Title</h4>
                        <p className="rating">9.7</p>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        Lorem fdsafsdfsadfasdfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfsadfasdf                   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
