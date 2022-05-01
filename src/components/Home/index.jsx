import React from "react";
function Home() {
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
            <div className="filmlist">
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a
                  href="https://static.bunnycdn.ru/i/cache/images/f/ff/ffbea2fbb35853c25918894e205100f0.jpg-w380"
                  title="dsad"
                  className="poster"
                >
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/9/92/928098f2b5f5acb8c13eea55be96cda9.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/movie/the-ice-age-adventures-of-buck-wild-zk5w3"
                  >
                    dsadsaa
                  </a>
                </h3>
                <div className="meta">
                  <span className="release">3232</span>
                  <i className="dot"></i>
                  87432 min
                  <i className="type">Movie</i>
                </div>
              </div>
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a
                  href="https://static.bunnycdn.ru/i/cache/images/f/ff/ffbea2fbb35853c25918894e205100f0.jpg-w380"
                  title="dsad"
                  className="poster"
                >
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/9/92/928098f2b5f5acb8c13eea55be96cda9.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/movie/the-ice-age-adventures-of-buck-wild-zk5w3"
                  >
                    dsadsaa
                  </a>
                </h3>
                <div className="meta">
                  <span className="release">3232</span>
                  <i className="dot"></i>
                  87432 min
                  <i className="type">Movie</i>
                </div>
              </div>
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a
                  href="https://static.bunnycdn.ru/i/cache/images/f/ff/ffbea2fbb35853c25918894e205100f0.jpg-w380"
                  title="dsad"
                  className="poster"
                >
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/9/92/928098f2b5f5acb8c13eea55be96cda9.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/movie/the-ice-age-adventures-of-buck-wild-zk5w3"
                  >
                    dsadsaa
                  </a>
                </h3>
                <div className="meta">
                  <span className="release">3232</span>
                  <i className="dot"></i>
                  87432 min
                  <i className="type">Movie</i>
                </div>
              </div>
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a
                  href="https://static.bunnycdn.ru/i/cache/images/f/ff/ffbea2fbb35853c25918894e205100f0.jpg-w380"
                  title="dsad"
                  className="poster"
                >
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/9/92/928098f2b5f5acb8c13eea55be96cda9.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/movie/the-ice-age-adventures-of-buck-wild-zk5w3"
                  >
                    dsadsaa
                  </a>
                </h3>
                <div className="meta">
                  <span className="release">3232</span>
                  <i className="dot"></i>
                  87432 min
                  <i className="type">Movie</i>
                </div>
              </div>
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a
                  href="https://static.bunnycdn.ru/i/cache/images/f/ff/ffbea2fbb35853c25918894e205100f0.jpg-w380"
                  title="dsad"
                  className="poster"
                >
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/9/92/928098f2b5f5acb8c13eea55be96cda9.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/movie/the-ice-age-adventures-of-buck-wild-zk5w3"
                  >
                    dsadsaa
                  </a>
                </h3>
                <div className="meta">
                  <span className="release">3232</span>
                  <i className="dot"></i>
                  87432 min
                  <i className="type">Movie</i>
                </div>
              </div>
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a
                  href="https://static.bunnycdn.ru/i/cache/images/f/ff/ffbea2fbb35853c25918894e205100f0.jpg-w380"
                  title="dsad"
                  className="poster"
                >
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/9/92/928098f2b5f5acb8c13eea55be96cda9.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/movie/the-ice-age-adventures-of-buck-wild-zk5w3"
                  >
                    dsadsaa
                  </a>
                </h3>
                <div className="meta">
                  <span className="release">3232</span>
                  <i className="dot"></i>
                  87432 min
                  <i className="type">Movie</i>
                </div>
              </div>
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a
                  href="https://static.bunnycdn.ru/i/cache/images/f/ff/ffbea2fbb35853c25918894e205100f0.jpg-w380"
                  title="dsad"
                  className="poster"
                >
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/9/92/928098f2b5f5acb8c13eea55be96cda9.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/movie/the-ice-age-adventures-of-buck-wild-zk5w3"
                  >
                    dsadsaa
                  </a>
                </h3>
                <div className="meta">
                  <span className="release">3232</span>
                  <i className="dot"></i>
                  87432 min
                  <i className="type">Movie</i>
                </div>
              </div>
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a
                  href="https://static.bunnycdn.ru/i/cache/images/f/ff/ffbea2fbb35853c25918894e205100f0.jpg-w380"
                  title="dsad"
                  className="poster"
                >
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/9/92/928098f2b5f5acb8c13eea55be96cda9.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/movie/the-ice-age-adventures-of-buck-wild-zk5w3"
                  >
                    dsadsaa
                  </a>
                </h3>
                <div className="meta">
                  <span className="release">3232</span>
                  <i className="dot"></i>
                  87432 min
                  <i className="type">Movie</i>
                </div>
              </div>
            </div>
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
            <div className="filmlist">
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a
                  href="/series/`${{this.name}}-${{this.url}}`"
                  title="{{this.name}}"
                  className="poster"
                >
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/1/1e/1effd30150640f6f0ea1ad5a43c9d57e.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/series/`${{this.name}}-${{this.url}}`"
                  >
                    dsadsad
                  </a>
                </h3>
                <div className="meta">
                  <span className="release">3232</span>
                  <i className="dot"></i>
                  na min min
                  <i className="type">Movie</i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bl">
          <div className="heading simple">
            <h2>Latest TV-Series</h2>
            <a className="more" href="/tv-series">
              View all
              <i className="fa fa-chevron-circle-right"></i>
            </a>
          </div>
          <div className="content">
            <div className="filmlist">
              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a href="#" title="32" className="poster">
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/1/1e/1effd30150640f6f0ea1ad5a43c9d57e.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/series/`${{this.name}}-${{this.url}}`"
                  >
                    dsadas
                  </a>
                </h3>
                <div className="meta">
                  SS 4<i className="dot"></i>
                  EP 13
                  <i className="type">TV</i>
                </div>
              </div>

              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a href="#" title="32" className="poster">
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/1/1e/1effd30150640f6f0ea1ad5a43c9d57e.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/series/`${{this.name}}-${{this.url}}`"
                  >
                    dsadas
                  </a>
                </h3>
                <div className="meta">
                  SS 4<i className="dot"></i>
                  EP 13
                  <i className="type">TV</i>
                </div>
              </div>

              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a href="#" title="32" className="poster">
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/1/1e/1effd30150640f6f0ea1ad5a43c9d57e.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/series/`${{this.name}}-${{this.url}}`"
                  >
                    dsadas
                  </a>
                </h3>
                <div className="meta">
                  SS 4<i className="dot"></i>
                  EP 13
                  <i className="type">TV</i>
                </div>
              </div>

              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a href="#" title="32" className="poster">
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/1/1e/1effd30150640f6f0ea1ad5a43c9d57e.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/series/`${{this.name}}-${{this.url}}`"
                  >
                    dsadas
                  </a>
                </h3>
                <div className="meta">
                  SS 4<i className="dot"></i>
                  EP 13
                  <i className="type">TV</i>
                </div>
              </div>

              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a href="#" title="32" className="poster">
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/1/1e/1effd30150640f6f0ea1ad5a43c9d57e.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/series/`${{this.name}}-${{this.url}}`"
                  >
                    dsadas
                  </a>
                </h3>
                <div className="meta">
                  SS 4<i className="dot"></i>
                  EP 13
                  <i className="type">TV</i>
                </div>
              </div>

              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a href="#" title="32" className="poster">
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/1/1e/1effd30150640f6f0ea1ad5a43c9d57e.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/series/`${{this.name}}-${{this.url}}`"
                  >
                    dsadas
                  </a>
                </h3>
                <div className="meta">
                  SS 4<i className="dot"></i>
                  EP 13
                  <i className="type">TV</i>
                </div>
              </div>

              <div className="item">
                <div className="icons">
                  <div className="quality">HD</div>
                </div>
                <a href="#" title="32" className="poster">
                  <div className="play"></div>
                  <img src="https://static.bunnycdn.ru/i/cache/images/1/1e/1effd30150640f6f0ea1ad5a43c9d57e.jpg-w380" />
                  <div className="overlay-poster"></div>
                </a>
                <h3>
                  <a
                    className="title"
                    title="{{this.name}}"
                    href="/series/`${{this.name}}-${{this.url}}`"
                  >
                    dsadas
                  </a>
                </h3>
                <div className="meta">
                  SS 4<i className="dot"></i>
                  EP 13
                  <i className="type">TV</i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
