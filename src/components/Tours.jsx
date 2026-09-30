import Title from "./Title"
import Tour from "./Tour"
import { tours } from "../../data"

const Tours = () => {
    // tour = tours.filter(item => item.id<3) 
  return (
        <section className="section tours" id="tours">
        <Title title="featured" subTitle="tours" />
        <div className="section-center tours-center">
            {/* <!-- first tour --> */}
            {tours.map((tour) => {
                return <Tour key={tour.id} {...tour} />
                    // <Tour key={tour.id} image={tour.image} date={tour.date} title={tour.title} info={tour.info} location={tour.location} duration={tour.duration} price={tour.price} />
                // )
            })}
            {/* <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/Copilot_20260918_104022.png" alt="tour photo" className="tour-img"/>
                    <p className="tour-date">september 26th, 2026</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title"><h4>mount everest</h4></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ipsum?</p>
                    <div className="tour-footer">
                        <p><span><i className="fa-solid fa-map"></i>china</span></p>
                        <p>6 days</p>
                        <p>from $2100</p>
                    </div>
                </div>
            </article> */}
            {/* <!-- second tour --> */}
            {/* <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/Copilot_20260918_104024.png" alt="tour photo" className="tour-img"/>
                    <p className="tour-date">september 26th, 2026</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title"><h4>mount everest</h4></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ipsum?</p>
                    <div className="tour-footer">
                        <p><span><i className="fa-solid fa-map"></i>china</span></p>
                        <p>6 days</p>
                        <p>from $2100</p>
                    </div>
                </div>
            </article> */}
            {/* <!-- third tour --> */}
            {/* <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/Copilot_20260918_104026.png" alt="tour photo" className="tour-img"/>
                    <p className="tour-date">september 26th, 2026</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title"><h4>mount everest</h4></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ipsum?</p>
                    <div className="tour-footer">
                        <p><span><i className="fa-solid fa-map"></i>china</span></p>
                        <p>6 days</p>
                        <p>from $2100</p>
                    </div>
                </div>
            </article> */}
            {/* <!-- fourth tour --> */}
            {/* <article className="tour-card">
                <div className="tour-img-container">
                    <img src="./images/Copilot_20260918_104027.png" alt="tour photo" className="tour-img"/>
                    <p className="tour-date">september 26th, 2026</p>
                </div>
                <div className="tour-info">
                    <div className="tour-title"><h4>mount everest</h4></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ipsum?</p>
                    <div className="tour-footer">
                        <p><span><i className="fa-solid fa-map"></i>china</span></p>
                        <p>6 days</p>
                        <p>from $2100</p>
                    </div>
                </div>
            </article> */}
        </div>
    </section>
  )
}

export default Tours