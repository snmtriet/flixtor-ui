import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="foo-t">
          <div className="container">
            <div className="links">
              <div className="bl">
                <div className="heading">Links</div>
                <ul>
                  <li>
                    <a href="/#">Movies</a>
                  </li>
                  <li>
                    <a href="/#">TV-Shows</a>
                  </li>
                  <li>
                    <a href="/#">Most Watched</a>
                  </li>
                  <li>
                    <a href="/#">Top IMDb</a>
                  </li>
                </ul>
              </div>
              <div className="bl">
                <div className="heading">Genre</div>
                <ul>
                  <li>
                    <a href="/#">Action</a>
                  </li>
                  <li>
                    <a href="/#">Horrnor</a>
                  </li>
                  <li>
                    <a href="/#">Sci-fi</a>
                  </li>
                  <li>
                    <a href="/#">Thriller</a>
                  </li>
                </ul>
              </div>
              <div className="bl">
                <div className="heading">More</div>
                <ul>
                  <li>
                    <a href="/#">Contact</a>
                  </li>
                  <li>
                    <a href="/#">Request</a>
                  </li>
                  <li>
                    <a href="/#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="about">
              <div className="heading">About Us</div>
              <div className="desc">
                <p>
                  <a href="/#">
                    <strong>FlixTor </strong>
                  </a>
                  is a free movies streaming website with a big database, lots
                  of great features and beautifuly layout. With
                  <strong> FlixTor</strong>, you can easily find and
                  <strong> watch movies</strong>, tv shows htmlFor free in high
                  quality without registration.
                  <br />
                  <strong>FlixTor movies online</strong>, watch FlixTor free,
                  free movies FlixTor, FlixTor online
                </p>
                <p className="small font-italic">
                  This site does not store any files on our server, we only
                  linked to the media which is hosted on 3rd party services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="foo-b">
          <div className="container">
            <div className="links">
              <a href="/#">Sitemap</a>
              <a href="/#">Contact</a>
              <a href="/#">About Us</a>
              <a href="/#">DMCA</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
