import pdata from "../../assets/Data/Personalinfo";

const About=()=>{
    return(
        <section id="about" className="education my-4">
            <div className="container-fluid ">
            <h3 className="education-title mx-lg-4 mx-sm-2 mt-2">About</h3>
                <div className="row justify-content-center mx-lg-2 mx-sm-2"> 
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center mb-sm-2">
                        <img src={pdata[0].about_image} alt="" id="about_image" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 education-item m-auto my-sm-2 p-sm-2">
                        <h3 className="header text-capitalize text-white  p-1">Myself {pdata[0].name}</h3>
                        <h3 className=" text-white  p-1">I'm a <strong className="text-capitalize">Computer Science Engineer</strong></h3>
                        <p className="text-white text-justify p-1">
                            <strong>{pdata[0].quote}</strong>
                        </p>
                        <div className="d-flex">
                            <div className="p-2">
                                <button className="btn btn-lg form-inline text-capitalize btn-success"id='cv_button'>View CV<i className="fa-solid p-2 fa-arrow-up-right-from-square"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;