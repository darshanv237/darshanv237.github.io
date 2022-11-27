import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pData from '../../assets/Data/Personalinfo'
import Items from '../../assets/Data/Items';

const Work=()=>{
    return(
        <section id="experience" className="education my-2">
            <div className="container-fluid">
            <div className="row mx-2">
                <h3 className="education-title mt-2">Work Experience</h3>
                <OwlCarousel className="owl-theme" responsive={Items}> 
                    {pData[0].work.map((work)=>{
                        return(
                            <div className="cols-12" data-aos="fade-up">
                                <div className="card h-100  bg-dark mx-2" >
                                    <h5 className="card-header p-2">
                                        <span className="ed_icon p-2"><i className="fa-solid fa-briefcase fa-1x p-2" id="ed_icons"></i></span>
                                        {work.role}
                                    </h5>
                                    <div className="card-body" key={work+"role"}>
                                        <div className="education-item h-100 text-white px-2" key={'exp_'+work}>
                                            <p className='px-2 text-white'><strong>{work.Company}</strong></p>
                                            <h5 className='px-2 mx-2 text-black'>{work.experience}</h5>
                                       
                                                {work.description.map((desc)=>{
                                                    return(
                                                    <p className='px-2 text-white'><strong>{desc}</strong></p>
                                                    )
                                                })}
                                       
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

export default Work;