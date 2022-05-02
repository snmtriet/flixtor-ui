import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";

function Header() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [genres, setGenres] = useState([]);
  const [countries, setCountries] = useState([]);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [showCountries, setshowCountries] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataGenres = await axiosClient.get("/genres");
        setGenres(dataGenres.data);
        const dataCountries = await axiosClient.get("/countries");
        setCountries(dataCountries.data);
      } catch (error) {
        console.log("🍕 ~ error", error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <header>
        <div
          className="menu-toggle"
          onClick={() => {
            setShowMenuMobile(!showMenuMobile);
          }}
        >
          {showMenuMobile ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa fa-list-ul"></i>
          )}
        </div>
        {showMenuMobile && (
          <ul className="menu">
            <li>
              <a href="/#">Home</a>
            </li>
            <li
              onClick={() => {
                setShowGenres(!showGenres);
                setshowCountries(false);
              }}
            >
              <a>
                Genre <i className="fa fa-plus"></i>
              </a>
              {showGenres && (
                <ul className="genre">
                  {genres.length > 0 &&
                    genres.map((item) => {
                      return (
                        <li key={item._id}>
                          <a title={item.name} href="/#">
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              )}
            </li>
            <li
              onClick={() => {
                setshowCountries(!showCountries);
                setShowGenres(false);
              }}
            >
              <a>
                Country <i className="fa fa-plus"></i>
              </a>
              {showCountries && (
                <ul className="country">
                  {countries.length > 0 &&
                    countries.map((item) => {
                      return (
                        <li key={item._id}>
                          <a title={item.name} href="/#">
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              )}
            </li>
            <li>
              <a href="/#" title="Movies">
                Movies
              </a>
            </li>
            <li>
              <a href="/#" title="TV Shows">
                TV Shows
              </a>
            </li>
            <li>
              <a href="/#" title="Top IMDb">
                Top IMDb
              </a>
            </li>
          </ul>
        )}

        <div className="head_l">
          <div className="head_l-logo">
            <a href="/#">
              <img src="logo.png" alt="flixtor-logo" width="30px" />
              <h2>FlixTor.Video</h2>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="/#">HOME</a>
            </li>
            <li className="li-genre">
              <a>GENRE</a>
              <ul className="genre">
                {genres.map((item) => {
                  return (
                    <li key={item._id}>
                      <a title={item.name} href="/#">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="li-country">
              <a>COUNTRY</a>
              <ul className="country">
                {countries.map((item) => {
                  return (
                    <li key={item._id}>
                      <a title={item.name} href="/#">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <a href="/#">MOVIES</a>
            </li>
            <li>
              <a href="/#">TV SHOWS</a>
            </li>
            <li>
              <a href="/#">TOP IMDB</a>
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
