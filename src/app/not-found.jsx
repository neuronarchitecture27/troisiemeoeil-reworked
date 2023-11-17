
import "./notfound.css"
import Header from '../components/Header';


export default function NotFound() {
 
  return (
    <div className="body">
         <Header />
        <div className="page-container">
        <div className="page-not-found">
            <span>PAGE</span>
            <span>
                <div className="span404">404</div>
                NOT
            </span>
            <span>FOUND</span>
        </div>
    </div>

    </div>
  )
}
