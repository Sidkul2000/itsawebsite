import './App.css';
import "bootstrap/dist/css/bootstrap.css";


function Appteam() {
  return (
    <div className="bkcolor">

    <div className="row">
    	<div className="col-sm-6 mixedcolor circle1" style={{padding:"4%"}}>
         
      	</div>

      	<div className="col-sm-6 text-center" style={{padding:"1%"}}>
        	<h1 className="highertext bkcolor" style={{padding:"5%"}}>Our Team</h1>
        		<h6 className="lowertext" style={{padding:"4%"}}>
        			To achieve the motive ITSA has committee formed for 
        			every academic year for the smooth conduction of various activities. 
        			Students from First to Final year of Computer Engineering and 
        			Information Technology are involved in these activities.
        		</h6>

        	<div className="bkcolor" style={{padding:"4%"}}>
        		<button className="btn btn-primary"><h5>Join ITSA</h5></button>
        	</div>
      	</div>
    </div>


    </div>

  );
}



export default Appteam;