import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="row bkcolor">
      <div className="col-sm-4 mixedcolor" style={{padding:"4%"}}>
        Our leaders<br/>
        and inspiration 
      </div>

      <div className="col-sm-2 bkcolor text-center" style={{padding:"1%"}}>
        <img src="https://joeschmoe.io/api/v1/sushant" className="imgsize"/>
        <h5 className="highertext" style={{padding:"5%"}}>Name <br/> Lastname</h5>
        <h6 className="lowertext">Head of IT Department</h6>
      </div>

      <div className="col-sm-2 text-center" style={{padding:"1%"}}>
        <img src="https://joeschmoe.io/api/v1/nikhil" className="imgsize"/>
        <h5 className="highertext" style={{padding:"5%"}}>Name <br/> Lastname</h5>
        <h6 className="lowertext">Stuff Coordinator</h6>
      </div>

      <div className="col-sm-2 text-center" style={{padding:"1%"}}>
        <img src="https://joeschmoe.io/api/v1/prithviraj" className="imgsize"/>
        <h5 className="highertext" style={{padding:"5%"}}>Name <br/> Lastname</h5>
        <h6 className="lowertext">General Secretary</h6>
      </div>

      <div className="col-sm-2 text-center" style={{padding:"1%"}}>
        <img src="https://joeschmoe.io/api/v1/sushant" className="imgsize"/>
        <h5 className="highertext bkcolor" style={{padding:"5%"}}>Name <br/> Lastname</h5>
        <h6 className="lowertext">General Secretary</h6>
      </div>

    </div>
  );
}

export default App;
