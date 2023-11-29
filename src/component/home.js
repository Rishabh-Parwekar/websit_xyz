
function Home(){
    return <>
    <div className="px-4 pt-5 my-0 text-center border-bottom bg-light">
    <h1 className="display-5 fw-bold text-body-emphasis">YOU DESERVE THE BEST PRODUCT</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Nike is the best sports company because they have great technology and equipment to boost performance. In basketball shoes, Nike provides cushion and lightweight materials to accommodate the sport. Also, Nike attracts customers by placing athletes in their commercials. What is Nike best known for.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Shop Now</button>
        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Category</button>
      </div>
    </div>
    <div className="overflow-hidden" >
      <div className="container px-5">
      <img src='./images/shoesimg.png' alt='shoesbrand'  className="img-fluid border rounded-3 shadow-lg mb-4 bg-secondary" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>

    </>
}
export default Home;