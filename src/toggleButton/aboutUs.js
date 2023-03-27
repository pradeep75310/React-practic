 function AboutUs(props){
    const {title} = props

    return(
        <section className="aboutUs">
            <main >
                <p>{title}</p>
                <div className="img">
                <img src="https://media.istockphoto.com/id/1148091792/photo/technology-abstract.jpg?s=2048x2048&w=is&k=20&c=oyHVbNHempbd1vXtz2xyur5VyrXV-ZSzEMRtafxzgDw=" alt="aboutus"></img>
                </div>
            </main>
        </section>
    )
 }

 export default AboutUs ;