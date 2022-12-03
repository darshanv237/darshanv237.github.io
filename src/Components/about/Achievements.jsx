import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pData from "../../assets/Data/Personalinfo";
import Items from "../../assets/Data/Items";

const Achievements = () => {
  return (
    <section id="achievements" className="education">
      <div className="container-fluid">
        <div className="row mx-lg-2 mx-sm-1">
          <h3 className="education-title mt-2">Achievements</h3>
          {/* <OwlCarousel className="owl-theme" responsive={Items}>  */}
          {pData[0].awards.map((awards) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 my-2"
                data-aos="fade-up"
                key={awards.name}
              >
                <div className="card h-100  bg-dark mx-2">
                  <h5 className="card-header">
                    <div className="d-flex flex-row">
                      <div className="my-auto">
                        <span className="ed_icon py-4">
                          <i
                            className="fa-solid fa-award fa-1x p-2"
                            id="ed_icons"
                          ></i>
                        </span>
                      </div>
                      <div className="px-2 c_title">{awards.name}</div>
                    </div>
                  </h5>
                  <div className="card-body" key={awards.name + "_ach"}>
                    <div className="card-img-top text-center img-fluid m-2">
                    {(awards.id!=0)?
                    (<div
                        data-iframe-width="200"
                        data-iframe-height="240"
                        data-share-badge-id={awards.id}
                        data-share-badge-host="https://www.credly.com"
                        
                    ></div>):(
                        <>
                        <img src={awards.image} alt="" type='button' id="cert_image" className="img-fluid m-2" data-bs-toggle='modal' data-bs-target='#img_modal' />
                        <div className="modal fade " tabIndex="-1" id="img_modal">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                          <div className="modal-content">
                          <div className="modal-header bg-dark">
                          <h5 className="modal-title text-white">National Level C Quiz</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <div className="modal-body bg-dark text-center">
                            <img src={awards.image} alt="" className="img-fluid " data-bs-toggle='modal' data-bs-target='#img_modal' />
                            </div>
                          </div>
                        </div>
                      </div>
                      </>
                    )
                    }
                    </div>
                    <div
                      className="education-item h-100 text-white my-2 px-2"
                      key={"ach_" + awards.name}
                    >
                    <p id="click_text" className="text-center">*Click above image to view Achievement</p>
                      <p className="px-2 text-white" id="generic_desc">
                        <strong>{awards.description}</strong>
                      </p>
                      {/* <h5 className='px-2 mx-2 text-black'>{awards.de}</h5> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* </OwlCarousel> */}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
