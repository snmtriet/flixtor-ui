import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <>
      <header>
        <div className="menu-toggle">
          <i className="fa fa-list-ul"></i>
        </div>
        <div className="head_l">
          <div className="head_l-logo">
            <a href="/">
              <img src="logo.png" alt="flixtor-logo" width="30px" />
              <h2>FlixTor.Video</h2>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="/">HOME</a>
            </li>
            <li className="li-genre">
              <a>GENRE</a>
              <ul className="genre">
                <li>
                  {" "}
                  <a title="Action movies" href="/">
                    Action
                  </a>{" "}
                </li>
                <li>
                  <a title="Adventure movies" href="/">
                    Adventure
                  </a>
                </li>
                <li>
                  <a title="Animation movies" href="/">
                    Animation
                  </a>
                </li>
                <li>
                  <a title="Biography movies" href="/">
                    Biography
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Costume movies" href="/">
                    Costume
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Comedy movies" href="/">
                    Comedy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Crime movies" href="/">
                    Crime
                  </a>{" "}
                </li>
                <li>
                  <a title="Documentary movies" href="/">
                    Documentary
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Drama movies" href="/">
                    Drama
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Family movies" href="/">
                    Family
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Fantasy movies" href="/">
                    Fantasy
                  </a>{" "}
                </li>
                <li>
                  <a title="Game-Show movies" href="/">
                    Game-Show
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="History movies" href="/">
                    History
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Horror movies" href="/">
                    Horror
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Kungfu movies" href="/">
                    Kungfu
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Music movies" href="/">
                    Music
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Mystery movies" href="/">
                    Mystery
                  </a>{" "}
                </li>
                <li>
                  <a title="Reality-TV movies" href="/">
                    Reality-TV
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Romance movies" href="/">
                    Romance
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Sci-Fi movies" href="/">
                    Sci-Fi
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Sport movies" href="/">
                    Sport
                  </a>{" "}
                </li>
                <li>
                  <a title="Thriller movies" href="/">
                    Thriller
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="TV Show movies" href="/">
                    TV Show
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="War movies" href="/">
                    War
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Western movies" href="/">
                    Western
                  </a>{" "}
                </li>
              </ul>
            </li>
            <li className="li-country">
              <a>COUNTRY</a>
              <ul className="country">
                <li>
                  <a title="Argentina movies" href="/">
                    Argentina
                  </a>
                </li>
                <li>
                  <a title="Australia movies" href="/">
                    Australia
                  </a>
                </li>
                <li>
                  <a title="Austria movies" href="/">
                    Austria
                  </a>
                </li>
                <li>
                  <a title="Belgium movies" href="/">
                    Belgium
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Brazil movies" href="/">
                    Brazil
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Canada movies" href="/">
                    Canada
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="China movies" href="/">
                    China
                  </a>{" "}
                </li>
                <li>
                  <a title="Czech Republic movies" href="/">
                    Czech Republic
                  </a>
                </li>
                <li>
                  <a title="Denmark movies" href="/">
                    Denmark
                  </a>
                </li>
                <li>
                  <a title="Finland movies" href="/">
                    Finland
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="France movies" href="/">
                    France
                  </a>{" "}
                </li>
                <li>
                  <a title="Germany movies" href="/">
                    Germany
                  </a>
                </li>
                <li>
                  <a title="Hong Kong movies" href="/">
                    Hong Kong
                  </a>
                </li>
                <li>
                  <a title="Hungary movies" href="/">
                    Hungary
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="India movies" href="/">
                    India
                  </a>{" "}
                </li>
                <li>
                  <a title="International movies" href="/">
                    International
                  </a>
                </li>
                <li>
                  <a title="Ireland movies" href="/">
                    Ireland
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Israel movies" href="/">
                    Israel
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Italy movies" href="/">
                    Italy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Japan movies" href="/">
                    Japan
                  </a>{" "}
                </li>
                <li>
                  <a title="Luxembourg movies" href="/">
                    Luxembourg
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Mexico movies" href="/">
                    Mexico
                  </a>{" "}
                </li>
                <li>
                  <a title="Netherlands movies" href="/">
                    Netherlands
                  </a>
                </li>
                <li>
                  <a title="New Zealand movies" href="/zealand">
                    New Zealand
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Norway movies" href="/">
                    Norway
                  </a>{" "}
                </li>
                <li>
                  <a title="Philippines movies" href="/">
                    Philippines
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Poland movies" href="/">
                    Poland
                  </a>{" "}
                </li>
                <li>
                  <a title="Romania movies" href="/">
                    Romania
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Russia movies" href="/">
                    Russia
                  </a>{" "}
                </li>
                <li>
                  <a title="South Africa movies" href="/africa">
                    South Africa
                  </a>
                </li>
                <li>
                  <a title="South Korea movies" href="/korea">
                    South Korea
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Spain movies" href="/">
                    Spain
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a title="Sweden movies" href="/">
                    Sweden
                  </a>{" "}
                </li>
                <li>
                  <a title="Switzerland movies" href="/">
                    Switzerland
                  </a>
                </li>
                <li>
                  {" "}
                  <a title="Taiwan movies" href="/">
                    Taiwan
                  </a>{" "}
                </li>
                <li>
                  <a title="Thailand movies" href="/">
                    Thailand
                  </a>
                </li>
                <li>
                  <a title="United Kingdom movies" href="/">
                    United Kingdom
                  </a>
                </li>
                <li>
                  <a title="United States movies" href="/">
                    United States
                  </a>
                </li>
                <li>
                  <a title="West Germany movies" href="/">
                    West Germany
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/movies">MOVIES</a>
            </li>
            <li>
              <a href="/tv-series">TV SHOWS</a>
            </li>
            <li>
              <a href="/top-imdb">TOP IMDB</a>
            </li>
          </ul>
        </div>
        <div className="head_r">
          <div className="head_r-auth">
            <i
              onClick={() => {
                setOpen(!open);
                document.body.style.height = "100%";
                document.body.style.overflow = "hidden";
              }}
              className="fa-solid fa-user"
            ></i>
            <img className="img-auth" src="user.png" alt="img" />
            <p
              onClick={() => {
                setOpen(!open);
                document.body.style.height = "100%";
                document.body.style.overflow = "hidden";
              }}
            >
              Login
            </p>
          </div>
        </div>
      </header>
      <div className="search-mobile">
        <form action="search">
          <input
            className="input-search"
            type="text"
            name="keyword"
            placeholder="Enter your keywords..."
          />
          <button>
            <img src="search_icon.png" alt="search.png" />
          </button>
        </form>
      </div>
      <div
        onClick={() => {
          setOpen(false);
          setOpen2(false);
          document.body.style.height = "auto";
          document.body.style.overflow = "scroll";
        }}
        className={open || open2 ? "overlay active" : "overlay"}
      ></div>
      <div className="modal">
        {/* modal login  */}

        <div className={open ? "modal-login show" : "modal-login"}>
          <div
            className="close-modal"
            onClick={() => {
              setOpen(false);
              document.body.style.height = "auto";
              document.body.style.overflow = "scroll";
            }}
          >
            &times;
          </div>
          <h2>Sign In</h2>
          <div className="login-field">
            <label htmlFor="username">Your account</label>
            <input
              type="text"
              name="username"
              placeholder="Your username or email"
            />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="btn-login">Login</button>
          <p>
            Don't have an account?
            <a
              className="toggle-modalRegister"
              onClick={() => {
                setOpen(false);
                setOpen2(!open2);
              }}
            >
              Register
            </a>
          </p>
        </div>

        {/* modal register */}

        <div
          className={
            open2 ? "modal-register center show" : "modal-register center"
          }
        >
          <div
            className="close-modal"
            onClick={() => {
              setOpen2(false);
              document.body.style.height = "auto";
              document.body.style.overflow = "scroll";
            }}
          >
            &times;
          </div>
          <h2>Create Account</h2>
          <span>Create an account to enjoy more features</span>
          <div className="res-field">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Your username" />
            <label htmlFor="username">Email address</label>
            <input type="text" name="username" placeholder="Your email" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
            />
            <label htmlFor="password">Password confirmation</label>
            <input
              type="password"
              name="password"
              placeholder="Repeat your password"
            />
          </div>
          <button className="btn-login">Register</button>
          <p>
            Already have an account?
            <a className="toggle-modalLogin">Sign in</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
