import Title from "./Title"
import { services } from "../../data"
import Service from "./Service"

const Services = () => {
  return (
     <section className="section services" id="services">
        <Title title="our" subTitle="services" />
        <div className="section-center services-center">
            {services.map((s) => {
                    return (
                      <Service key={s.id} icon={s.icon} title={s.title} info={s.info}/>
                    )
                  })}
            {/* <!-- first services --> */}
            {/* <article className="service">
                <span className="service-icon">
                    <i className="fa-solid fa-wallet"></i>
                </span>
                <div className="service-info">
                    <h4>saving money</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo.</p>
                </div>
            </article> */}
            {/* <!-- second icon --> */}
            {/* <article className="service">
                <span className="service-icon">
                    <i className="fa-solid fa-tree"></i>
                </span>
                <div className="service-info">
                    <h4>Endless Hiking</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo.</p>
                </div>
            </article> */}
            {/* <!-- third icon --> */}
            {/* <article className="service">
                <span className="service-icon">
                    <i className="fa-solid fa-socks"></i>
                </span>
                <div className="service-info">
                    <h4>amazing comfort</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo.</p>
                </div>
            </article> */}
        </div>
    </section>
  )
}

export default Services