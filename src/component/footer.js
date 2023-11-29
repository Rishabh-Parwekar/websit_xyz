import { Link } from 'react-router-dom'

function Footer(){
    return<>
   <footer className="px-4 text-white py-4 bg-dark">
    <p className="float-end"><Link to="/">Back to top</Link></p>
    <p>© 2017-2023 Company, Inc.  <Link to="#">Privacy</Link> & <Link to="#">Terms</Link></p>
  </footer>
    </>
}
export default Footer;