import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
function Home() {
  const [movies, setMovies] = useState([]);
  const [moviesTV, setMoviesTV] = useState([]);
  const [lastestMovie, setLastestMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataMovies = await axiosClient.get("/movies");
        const typeMovie = dataMovies.data.filter((item) => {
          return item.category.name === "Movie";
        });
        const typeTV = dataMovies.data.filter((item) => {
          return item.category.name === "TV";
        });
        setMovies(typeMovie);
        setMoviesTV(typeTV);
        setLastestMovie(typeMovie.reverse());
        setLoading(false);
      } catch (error) {
        console.log("🍕 ~ error", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="play"></div>
        <div className="heading-search">
          <div className="heading">Find Movies, TV shows and more</div>
          <form id="search" method="get" action="search">
            <i className="icon fa fa-search"></i>
            <div className="submit">
              <button type="submit">
                <i className="fa fa-arrow-right"></i>
              </button>
            </div>
            <div className="input">
              <input
                name="keyword"
                type="text"
                placeholder="Enter your keywords..."
              />
              <div className="suggestions"></div>
            </div>
          </form>
        </div>
        <div className="content-title">
          <div className="text-center">
            <div className="play"></div>
            <h1 className="text-primary">
              flixtor.video - Watch the Latest Movies and TV Shows for Free with
              No registration!
            </h1>
            <p>
              <span className="d-none d-lg-inline">
                flixtor.video - flixtors, flixtor, flixtor movies, flixtor
                online movies, movies flixtor
              </span>
              <br />
              Watch your movies, tv shows online free in flixtor.video - no
              tracking - no ads - no virus.
            </p>
          </div>
        </div>

        <section className="bl">
          <div className="heading">
            <h2>Recommended</h2>
          </div>
          <div className="tabs">
            <span data-name="movies" className="active">
              <i className="fas fa-play-circle"></i>
              Movies
            </span>
            <span data-name="series">
              <i className="fas fa-list"></i> TV Shows
            </span>
            <span data-name="trending">
              <i className="fas fa-chart-line"></i>
              Trending
            </span>
          </div>
          <br />
          <div className="content">
            {loading ? (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {[0, 1, 2, 3].map((item, index) => {
                  return (
                    <div key={index} className="card is-loading">
                      <div className="image"></div>
                      <div className="content">
                        <h2></h2>
                        <p></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="filmlist">
                {movies.length > 0 &&
                  movies.slice(0, -14).map((item) => {
                    return (
                      <div key={item._id} className="item">
                        <div className="icons">
                          <div className="quality">{item.quality}</div>
                        </div>
                        <a
                          href={item.image}
                          title={item.name}
                          className="poster"
                        >
                          <div className="play"></div>
                          <img src={item.image} />
                          <div className="overlay-poster"></div>
                        </a>
                        <h3>
                          <a
                            className="title"
                            title={item.name}
                            href={item.image}
                          >
                            {item.name}
                          </a>
                        </h3>
                        <div className="meta">
                          <span className="release">{2022}</span>
                          <i className="dot"></i>
                          {item.time === 0 ? "na min" : `${item.time} min`}
                          <i className="type">{item.category.name}</i>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </section>

        <section className="bl">
          <div className="heading simple">
            <h2>Latest Movies</h2>
            <a className="more" href="/movies">
              View all
              <i className="fa fa-chevron-circle-right"></i>
            </a>
          </div>
          <div className="content">
            {loading ? (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {[0, 1, 2, 3].map((item, index) => {
                  return (
                    <div key={index} className="card is-loading">
                      <div className="image"></div>
                      <div className="content">
                        <h2></h2>
                        <p></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="filmlist">
                {lastestMovie
                  .reverse()
                  .slice(0, 14)
                  .map((item) => {
                    return (
                      <div key={item._id} className="item">
                        <div className="icons">
                          <div className="quality">{item.quality}</div>
                        </div>
                        <a
                          href={item.image}
                          title={item.name}
                          className="poster"
                        >
                          <div className="play"></div>
                          <img src={item.image} />
                          <div className="overlay-poster"></div>
                        </a>
                        <h3>
                          <a
                            className="title"
                            title={item.name}
                            href={item.image}
                          >
                            {item.name}
                          </a>
                        </h3>
                        <div className="meta">
                          <span className="release">2022</span>
                          <i className="dot"></i>
                          {item.time === 0 ? "na min" : `${item.time} min`}
                          <i className="type">{item.category.name}</i>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </section>

        <section className="bl">
          <div className="heading simple">
            <h2>Latest TV-Series</h2>
            <a className="more" href="/#">
              View all
              <i className="fa fa-chevron-circle-right"></i>
            </a>
          </div>
          <div className="content">
            {loading ? (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {[0, 1, 2, 3].map((item, index) => {
                  return (
                    <div key={index} className="card is-loading">
                      <div className="image"></div>
                      <div className="content">
                        <h2></h2>
                        <p></p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="filmlist">
                {moviesTV.map((item) => {
                  return (
                    <div key={item._id} className="item">
                      <div className="icons">
                        <div className="quality">{item.quality}</div>
                      </div>
                      <a href={item.image} title={item.name} className="poster">
                        <div className="play"></div>
                        <img src={item.image} />
                        <div className="overlay-poster"></div>
                      </a>
                      <h3>
                        <a
                          className="title"
                          title={item.name}
                          href={item.image}
                        >
                          {item.name}
                        </a>
                      </h3>
                      <div className="meta">
                        SS 4<i className="dot"></i>
                        {item.time === 0 && "na min"}
                        <i className="type">{item.category.name}</i>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
