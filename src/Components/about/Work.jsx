import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pData from '../../assets/Data/Personalinfo'
import Items from '../../assets/Data/Items';

const Work=()=>{
    return(
        <section id="experience" className="education my-2">
            <div className="container-fluid">
            <div className="row mx-lg-2 mx-sm-1">
                <h3 className="education-title mt-2">Work Experience</h3>
                {/* <OwlCarousel className="owl-theme" responsive={Items}>  */}
                    {pData[0].work.map((work)=>{
                        return(
                            <div className="col-lg-6 col-md-6 col-sm-12 my-2" data-aos="fade-up" key={work.role}>
                                <div className="card h-100  bg-dark mx-2 my-sm-2" >
                                    <h5 className="card-header py-2" key={"card_header"+work.role}>
                                        <div className="d-flex flex-row" key={"card_flex"+work.role}>
                                            <div className='my-auto'><span className="ed_icon py-4"><i className="fa-solid fa-briefcase fa-1x p-2" id="ed_icons"></i></span></div>
                                            <div className='px-2 c_title'>{work.role}</div>
                                        </div>
                                    </h5>
                                    <div className="card-body" key={work+"role"}>
                                        <div className="education-item h-100 text-white px-2" key={'exp_'+work}>
                                            <p className='px-2 text-white'><strong>{work.Company}</strong></p>
                                            <h5 className='px-2 mx-2 text-black' style={{fontFamily:'Poppins'}}>{work.experience}</h5>
                                                {work.description.map((desc)=>{
                                                    let count=1
                                                    return(
                                                    <p className='px-2 text-white' key={"card_para"+Math.random()}><strong>{desc}</strong></p>
                                                    )
                                                })}
                                       
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

export default Work;