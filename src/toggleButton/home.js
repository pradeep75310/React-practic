function Home(props){
    const {title} = props

    return(
        <section>
            <main className="aboutUs">
                <p>{title}</p>
                <div className="img">
                <img src="https://media.istockphoto.com/id/1148091793/photo/technology-abstract.jpg?s=2048x2048&w=is&k=20&c=YOwK9T0qMskR1w7surFGHVHjd7USEUPWi9gTQKg1qy8="alt="home" ></img>
                </div>
            </main>
        </section>
    )
 }

 export default Home ;