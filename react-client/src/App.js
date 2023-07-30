import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import './App.css'
import Controller from "./component/Controller/Controller";


function App() {
    return (
        <div className="container-fluid back-ground">
            <div className="row">
                <div className="col-sm-12 col-lg-10 col-xl-7 mx-auto">
                    <Controller />
                </div>
            </div>
        </div>
    );
}

export default App;
