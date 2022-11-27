import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import pData from '../../assets/Data/Personalinfo'
import Items from '../../assets/Data/Items';



const Skills=()=>{
    return(
        <section id='skills' className='education'>
        <div className="row mx-4" >
        <h3 className="education-title my-2">Skills</h3>
            <OwlCarousel className="owl-theme" loop responsive={Items}>
                {pData[0].skills.map((skills)=>{
                    return(
                    <div className="col">
                    <div className="card h-100 mx-2 bg-dark" style={{borderRadius: 1+'rem'}} id="card"  key={skills.name+skills.key}>
                        <div className="card-body" key={skills.name+skills.key}>
                            <h5 className="ctitle text-center " key={skills.name+skills.key}>{skills.name}</h5>
                            <div className="d-flex flex-row justify-content-center bd-highlight mb-3 " id="icons" >
                                <div className="d-flex bd-highlight">
                            {skills.icons.map((images)=>{
                                return(
                                        <div className="px-2 bd-highlight"key={images}>
                                            <img src={images} alt="" className="img-fluid rounded-circle" id="proimg" style={{borderRadius: 1+'rem'}}  />
                                        </div>    
                                )
                            })}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    )
                })}
                

                            {/* <h5 className="ctitle text-center">Other Skills</h5>
                            <div className="d-flex flex-row justify-content-center bd-highlight mb-3 " id="sapicons">
                            </div> */}
            </OwlCarousel>
            </div>

        </section>
    )
}

export default Skills;