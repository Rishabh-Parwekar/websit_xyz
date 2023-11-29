function Contact(){
    return <>
    
<div className="container my-4 bg-light bg-secondary">
        <h2>Contact Us</h2>
        <form action="">
            <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <br/>
            <div className="form-group">
                <label for="exampleFormControlInput1">Select your Query</label>
                <select className="form-control" id="exampleFormControlInput1">
                    <option>Runing Shoes</option>
                    <option>Badminton Shoes</option>
                    <option>Spike</option>
                    <option>other</option>  
                </select>
            </div>
            <br/>
            <div className="form-group row">
                <div className="col-sm-2">Are you a Member</div>
                <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="gridCheck1"/>
                    <label className="form-check-label" for="gridCheck1">Yes</label>
                </div>
            </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-2">Are you a Student?</div>
                <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="gridCheck2"/>
                    <label clasNames="form-check-label" for="gridCheck2">Yes</label>
                </div>
            </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-2">Are you a Player?</div>
                <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="gridCheck3"/>
                    <label className="form-check-label" for="gridCheck3">Yes</label>
                </div>
            </div>
            </div>
            <br/>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Tell us about yourself</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <br/>
            <div className="form-group">
                <label for="exampleFormControlTextarea2">Elaborate Your Concern</label>
                <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
            </div>
            <br/>
            <button className="btn btn-primary">Submit</button>
        </form>

    </div>

    </>
}
export default Contact;