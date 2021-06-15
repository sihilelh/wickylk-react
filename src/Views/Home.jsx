import React, { useEffect } from "react";
import webimage from "../Images/webbuilder.svg";
import socail from "../Images/socail.svg"
import appimg from "../Images/appimg.svg"
import cloud from "../Images/cloud.svg"
import $ from "jquery";
export default function Home(props) {
  useEffect(() => {
    if (props.isStarted === true) {
      setTimeout(() => {
        $("#home-card-1").animate(
          {
            opacity: 1,
          },
          1000,
          () => {
            $("#home-card-2").animate(
              {
                opacity: 1,
              },
              1000,
              () => {
                $("#home-card-3").animate(
                  {
                    opacity: 1,
                  },
                  1000,
                  () => {
                    $("#home-card-4").animate(
                      {
                        opacity: 1,
                      },
                      1000,
                      () => {}
                    );
                  }
                );
              }
            );
          }
        );
      }, 1000);
    }
    console.log(props);
  }, [props.isStarted]);
  return (
    <>
      <div className="txt-center txt-xl m-5">
        All your needs in one place
        <div className="txt-m">Choose what you want..</div>
      </div>
      <div className="row p-0 m-0">
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div className="card op-0" id="home-card-1">
            <div className="card-img">
              <img src={webimage} alt="Web Site Builder Vector" />
            </div>
            <div className="card-head">Web Development</div>
            <div className="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam delectus voluptatibus quisquam exercitationem asperiores
              culpa provident saepe dicta. Molestiae aperiam at quam enim, non
              rem.
              <div className="mt-3">
                <button className="button">Continue {">"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div className="card op-0" id="home-card-2">
            <div className="card-img">
              <img src={socail} alt="Web Site Builder Vector" />
            </div>
            <div className="card-head">Socail Media Marketing</div>
            <div className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam earum ad repudiandae eaque possimus, dignissimos ducimus at culpa dolore asperiores sed dolorem consectetur eius quod expedita blanditiis aliquid odio atque.
              <div className="mt-3">
                <button className="button">Continue {">"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div className="card op-0" id="home-card-3">
            <div className="card-img">
              <img src={appimg} alt="Web Site Builder Vector" />
            </div>
            <div className="card-head">Application Development</div>
            <div className="card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum ut molestiae provident labore similique, rerum atque ipsum? Blanditiis, velit architecto? Quasi laborum temporibus dicta praesentium, iusto sint laudantium? Aperiam!
              <div className="mt-3">
                <button className="button">Continue {">"}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 d-flex justify-content-center">
          <div className="card op-0" id="home-card-4">
            <div className="card-img">
              <img src={cloud} alt="Web Site Builder Vector" />
            </div>
            <div className="card-head">Cloud Hosting</div>
            <div className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolor est aspernatur voluptatibus accusantium, provident architecto earum. Tenetur, quidem animi.
              <div className="mt-3">
                <button className="button">Continue {">"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
