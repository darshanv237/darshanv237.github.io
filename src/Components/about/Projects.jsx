import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pData from '../../assets/Data/Personalinfo'
import Items from '../../assets/Data/Items';

const Projects=()=>{
    return(
        <section id="projects" className="education my-2">
            <div className="container-fluid">
            <div className="row mx-2">
                <h3 className="education-title mt-2">Projects</h3>
                <OwlCarousel className="owl-theme" responsive={Items}> 
                    {pData[0].projects.map((projects)=>{
                        return(
                            <div className="cols-12" data-aos="fade-up">
                                <div className="card h-100  bg-dark mx-2" >
                                    <img src={"../../assets/"+projects.image} alt="" className="card-img-top" />
                                    <h5 className="card-header p-2">
                                        <span className="ed_icon p-2"><i className="fa-solid fa-lightbulb fa-1x p-2" id="ed_icons"></i></span>
                                        {projects.name}
                                    </h5>
                                    <div className="card-body" key={projects.name+"_ach"}>
                                        <div className="education-item h-100 text-white px-2" key={'ach_'+projects.name}>
                                            <p className='px-2 text-white'><strong>{projects.description}</strong></p>
                                            {/* <h5 className='px-2 mx-2 text-black'>{awards.de}</h5> */}
                                        </div>                                        
                                    </div>
                                </div>
                            </div>   
                        )
                    })}
                </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Projects;