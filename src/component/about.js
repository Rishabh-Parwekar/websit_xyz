import { Link } from 'react-router-dom'

function About(){
    return <>
    <main className="px-4 pt-5 my-0 text-center border-bottom bg-light">

      <section className="jumbotron text-center my-5  ">
        <div className="container">
          <h1 className="jumbotron-heading">About Nike Brand</h1>
          <p className="lead text-muted">Nike, Inc. is an American multinational association that is involved in the design, development, manufacturing and worldwide marketing and sales of apparel.</p>
          <p>
            <Link to="#" class="btn btn-primary my-2 mx-2">Main call to action</Link>
            <Link to="#" class="btn btn-success my-2">Secondary action</Link>
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: "225px", width: "100%", display: "block"}} src="./images/racing.jfif" data-holder-rendered="true"/>
                <div className="card-body">
                  <p className="card-text" style={{textAlign:'justify'}}>Nike releases its ReactX technology, aiming to optimise energy return and lower its carbon footprint · Nike debuts its Vaporfly 3 racing shoe.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-dark">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="./images/traning.jpg" data-holder-rendered="true" style={{height: "225px", width: "100%", display: "block"}}/>
                <div className="card-body">
                  <p className="card-text" style={{textAlign:'justify'}}>training shoes support different types of movement, and knowing the distinction is essential to getting the best results from every workout.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-dark">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="./images/basketball.jfif" data-holder-rendered="true" style={{height: "225px", width: "100%", display: "block"}}/>
                <div className="card-body">
                  <p className="card-text" style={{textAlign:'justify'}}>Basketball shoes are heavy and flat and usually have a high ankle collar to protect your feet and ankles from the stresses of basketball.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-dark">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="./images/football.jfif" data-holder-rendered="true" style={{height: "225px", width: "100%", display: "block"}}/>
                <div className="card-body">
                  <p className="card-text" style={{textAlign:'justify'}}>Hard ground football shoes are designed for hard surfaces and a pair of hard ground football boots has studs that are fixed and rubber soles designed for durability and agility.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-dark">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="./images/tennis.jfif" data-holder-rendered="true" style={{height: "225px", width: "100%", display: "block"}}/>
                <div className="card-body">
                  <p className="card-text " style={{textAlign:'justify'}}>The sole and tread pattern on tennis shoes are specifically designed to provide excellent traction on the court, which is essential for quick lateral movements and sudden stops.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-dark">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" src="./images/other.jfif" data-holder-rendered="true" style={{height: "225px", width: "100%", display: "block"}}/>
                <div class="card-body">
                  <p class="card-text" style={{textAlign:'justify'}}> Nike owns a multitude of world-famous brands such as Nike Pro, Nike Golf, Nike+, Air Force 1, Air Jordan, Air Max, Nike Blazers, Nike Dunk, Nike Skateboarding and Nike CR7. </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-dark">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>

  
    </>
}
export default About;