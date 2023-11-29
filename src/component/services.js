import { Link } from 'react-router-dom'
function Services(){
    return <>
    <main className="px-4 pt-5 my-0 text-center border-bottom bg-light">

    <section className="jumbotron text-center my-5 ">
        <div className="container">
          <h1 className="jumbotron-heading">Services in Nike Brand</h1>
          <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <Link to="#" className="btn btn-primary my-2 mx-2">Main call to action</Link>
            <Link to="#" className="btn btn-success my-2">Secondary action</Link>
          </p>
        </div>
      </section>
      

      <div className="container my-5">
        
        <div className="row ">
          <div className="col-md-4">
            <h2 className='text-decoration-underline text-info'>Designing</h2>
            <p style={{textAlign:'justify'}}>Designing at Nike isn't simply being at the forefront of footwear or reimagining apparel. For our teams, design is a vehicle to communicate and commit to the core tenets of what we stand for: performance, expression, collaboration, sustainability. </p>
            <p><Link className="btn btn-secondary" to="#" role="button">View details »</Link></p>
          </div>
          <div class="col-md-4">
            <h2 className='text-decoration-underline text-info'>Shoes</h2>
            <p style={{textAlign:'justify'}}>Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their elasticity,and keep shoe snug & lightweight. </p>
            <p><Link className="btn btn-secondary" to="#" role="button">View details »</Link></p>
          </div>
          <div class="col-md-4">
            <h2 className='text-decoration-underline text-info'>Jerseys</h2>
            <p style={{textAlign:'justify'}}>Elite jerseys have just about everything that players benefit from on the field: durable performance materials, strategic ventilation, elastic sleeve bands, sewn-on twill letters and numbers, and the authentic details of the official jersey.</p>
            <p><Link className="btn btn-secondary" to="#" role="button">View details »</Link></p>
          </div>
          <div className="col-md-4 ">
            <h2 className='text-decoration-underline text-info'>shorts</h2>
            <p style={{textAlign:'justify'}}>Nike shorts will be a great. These shorts are designed to provide the utmost level of comfort while you move your legs to and fro to get those muscles out. Nike shorts made of polyester material are designed for the fitness enthusiasts.</p>
            <p><Link className="btn btn-secondary" to="#" role="button">View details »</Link></p>
          </div>
          <div className="col-md-4">
            <h2 className='text-decoration-underline text-info'>Cleats</h2>
            <p style={{textAlign:'justify'}}>Cleats or studs are protrusions on the sole of a shoe or on an external attachment to a shoe that provide additional traction on a soft or slippery surface. They can be conical or blade-like in shape and can be made of plastic, rubber or metal.</p>
            <p><Link className="btn btn-secondary" to="#" role="button">View details »</Link></p>
          </div>
          <div class="col-md-4 ">
            <h2 className='text-decoration-underline text-info'>Baselayers</h2>
            <p style={{textAlign:'justify'}}>Base layers by Nike offer compression, warmth, sweat-wicking technology and support for any workout. Layering is often essential to stay comfortable during a workout. As you warm up, layers can be pulled off.</p>
            <p><Link className="btn btn-secondary" to="#" role="button">View details »</Link></p>
          </div>
        </div>


      </div>

    </main>

  

    </>
}
export default Services;