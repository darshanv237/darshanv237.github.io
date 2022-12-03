import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pData from '../../assets/Data/Personalinfo'


const Projects=()=>{
    return(
        <section id="projects" className="education my-2">
            <div className="container-fluid">
            <div className="row mx-lg-2 mx-sm-1">
                <h3 className="education-title mt-2">Projects</h3>
                {/* <OwlCarousel className="owl-theme" responsive={Items}>  */}
                    {pData[0].projects.map((projects)=>{
                        return(
                            <div className="col-lg-4 col-sm-6 my-2" data-aos="fade-up" key={projects.name}>
                                <div className="card h-100  bg-dark mx-2" >
                                    <img src={"../../assets/"+projects.image} alt="" className="card-img-top" />
                                    <h5 className="card-header p-2">
                                        <span className="ed_icon p-2"><i className="fa-solid fa-lightbulb fa-1x p-2" id="ed_icons"></i></span>
                                        {projects.name}
                                    </h5>
                                    <div className="card-body" key={projects.name+"_pro"}>
                                        <div className="education-item h-100 text-white px-2" key={'ach_'+projects.name}>
                                        {projects.description.map((desc)=>{
                                                    let count=1
                                                    return(
                                                    <p className='px-2 text-white' id='generic_desc' key={"card_para"+Math.random()}><strong>{desc}</strong></p>
                                                    )
                                                })}
                                            {/* <h5 className='px-2 mx-2 text-black'>{awards.de}</h5> */}
                                        </div>                                        
                                    </div>
                                </div>
                            </div>   
                        )
                    })}
                {/* </OwlCarousel> */}
                </div>
            </div>
        </section>
    )
}

export default Projects;