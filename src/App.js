import Home from "./Views/Home";
import NavBar from "./Views/NavBar";
import "./App.css";
import "./bootstrap-grid.css";
import React, { useEffect, useState } from "react";
import $ from "jquery";
function App() {
  const [webStartd, setwebStartd] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      $(".welcome").addClass(".scale")
      $("#welcome-title").animate(
        {
          opacity: 1,
        },
        2000,
        () => {
          $("#welcome-subtext").animate(
            {
              opacity: 1,
            },
            2000,
            () => {
              $(".welcome").animate(
                {
                  opacity: 0,
                },
                1500,
                () => {
                  $(".welcome").removeClass("d-flex");
                  $(".welcome").addClass("d-none");
                  $(".body").removeClass("d-none");
                  $(".body").animate(
                    {
                      opacity: 1,
                    },
                    1500,
                    () => {
                      setwebStartd(true);
                    }
                  );
                }
              );
            }
          );
        }
      );
    }, 500);
  }, []);
  return (
    <>
      <div className="welcome vh-100 d-flex justify-content-center align-items-center">
        <div className="txt-center">
          <div className="txt-l op-0" id="welcome-title">
            Wellcome to
            <div className="txt-xxl">WickyLK</div>
          </div>
          <div className="txt-sm op-0" id="welcome-subtext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            sequi.
          </div>
        </div>
      </div>
      <div className="body d-none op-0">
        <NavBar></NavBar>
        <main>
          <Home isStarted={webStartd}></Home>
        </main>
      </div>
    </>
  );
}

export default App;
