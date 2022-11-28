import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pData from '../../assets/Data/Personalinfo'
import Items from '../../assets/Data/Items';

const Achievements=()=>{
    return(
        <section id="achievements" className="education my-2">
            <div className="container-fluid">
            <div className="row mx-lg-2 mx-sm-1">
                <h3 className="education-title mt-2">Achievements</h3>
                {/* <OwlCarousel className="owl-theme" responsive={Items}>  */}
                    {pData[0].awards.map((awards)=>{
                        return(
                            <div className="col-lg-4 col-md-6 col-sm-12 my-2" data-aos="fade-up" key={awards.name}>
                                <div className="card h-100  bg-dark mx-2" >
                                    <h5 className="card-header">
                                        <div className="d-flex flex-row">
                                            <div><span className="ed_icon py-4"><i className="fa-solid fa-award fa-1x p-2" id="ed_icons"></i></span></div>
                                            <div className='px-2 c_title'>{awards.name}</div>
                                        </div>
                                    </h5>
                                    <div className="card-body" key={awards.name+"_ach"}>
                                        <div className="education-item h-100 text-white px-2" key={'ach_'+awards.name}>
                                            <p className='px-2 text-white'><strong>{awards.description}</strong></p>
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

export default Achievements;