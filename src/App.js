import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Announcement from './components/Announcement';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
            
      <nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://www.greenspringsschool.com"><img class="img-fluid" id="gslLogo" src='../images/logo.png' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white fs-5 fw-semibold" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white fs-5 fw-semibold" href="#">Departments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white fs-5 fw-semibold" href="#" >News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white fs-5 fw-semibold" href="#">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white fs-5 fw-semibold" href="#" >Support</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
<section className='cta bg-success bg-gradient p-5'>
  <div className="cta-text container">
  <h2 class="text-white fs-2 ff-georgia">Welcome to your Staff Portal</h2>
  <p class="text-white fs-5 pb-3" style={{textAlign:"center", paddingTop:"10px" }}
  >One place to connect, access resources, and stay informed. This platform is designed to support you,
  from keeping up with the latest news and announcements to exploring departments and finding the tools you need to succeed</p>
  </div>
  <a href="https://www.greenspringsschool.com" class="btn btn-danger fw-semi-bold">Main Site</a>
  {/* <button class="bg-danger text-white p-1">Main Site</button> */}
</section>
<section class="">
  <section id="About" class="container text-white">
        <div class="bg-success bg-gradient">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid rounded" id="ceo" alt="CEO" src="./images/Mrs-Koiki3.jpg"/>
            </div>
            <div class="col-sm-6">
              <h2>Message from the CEO to staff Members</h2>
              <p class="fs-5">Dear Team,<br/>
Welcome to our staff portal — a space designed to keep you connected, informed, and supported. Your wellbeing and growth are central to our success as a company, and I want you to know that the effort you bring each day is deeply valued.
Here, you’ll find resources, updates, and support to make your work easier and more fulfilling. Together, let’s continue building not only a stronger organization, but also a community where everyone can thrive.<br/>
With appreciation,<br/><b>Mrs. Lai Koiki,<br/>Director</b></p>              
            </div>
          </div>
        </div>
      </section>
  {/* <h2>Message from the CEO to Staff Members </h2>
  <div class="d-flex justify-content-around">
    <img class="img-fluid" src="../images/Mrs-Koiki.jpg" />
    <p>Dear Team,<br/>
Welcome to our staff portal — a space designed to keep you connected, informed, and supported. Your wellbeing and growth are central to our success as a company, and I want you to know that the effort you bring each day is deeply valued.
Here, you’ll find resources, updates, and support to make your work easier and more fulfilling. Together, let’s continue building not only a stronger organization, but also a community where everyone can thrive.<br/>
With appreciation,<br/>
[Mrs. Lai Koiki]</p>
  </div> */}
</section>

<Carousel />
<section className='bg- bg-gradient '>
<section class="container mb-5">
  <h2 className="text-danger">Quick Links</h2>
  <hr class="border-2"/>
  <div className="row p-auto">
    <div className="col-sm-3">
      <div class="card" style={{width: "18rem"}}>
  <img src="../images/edves.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">EDVES Portal</h5>
    <p class="card-text">Welcome to EDVES — our new Management Information System (MIS), now replacing VIDYALAYA</p>
    <a href="https://www.greenspringsschool.com" class="btn btn-primary">Goto EDVES</a>
  </div>
</div>
    </div>

    <div className="col-sm-3">
      <div class="card" style={{width: "18rem"}}>
  <img src="../images/gmail.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Staff Mail</h5>
    <p class="card-text"><br/>Go to your staff mail from here.<br/><br/></p>
    <a href="http://m.greenspringsschool.com" class="btn btn-danger">Goto Inbox</a>
  </div>
</div>
    </div>

    <div className="col-sm-3">
      <div class="card" style={{width: "18rem"}}>
  <img src="../images/edves.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">EDVES Portal</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="https://www.greenspringsschool.com" class="btn btn-secondary">Goto EDVES</a>
  </div>
</div>
    </div>


    <div className="col-sm-3">
      <div class="card" style={{width: "18rem"}}>
  <img src="../images/supportlogo.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Support Platform</h5>
    <p class="card-text">Having an issue or a question? Submit a support ticket and our team will assist you promptly.</p>
    <a href="https://support.greenspringsschool.com" class="btn btn-success">Goto Support</a>
  </div>
</div>
    </div>
  </div>
</section>

<section class="container">
  <h2 className="text-danger">Latest News</h2>
  <hr class="border-2"/>
  <div className="row p-auto">
    <div className="col-sm-3">
      <div class="card" style={{width: "18rem"}}>
  <img src="../images/football.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Inter-Campus Match</h5>
    <p class="card-text">To Foster Camaraderie, Teamwork, and the Spirit of Friendly Competition among the staff...</p>
    <a href="https://www.greenspringsschool.com" class="btn btn-primary">Read More...</a>
    <p class="card-text"><small class="text-body-secondary">Posted on August 25, 2025 </small></p>
  </div>
</div>
    </div>

    <div className="col-sm-3">
      <div class="card" style={{width: "18rem"}}>
  <img src="../images/mrs-bankole.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">INSET 2025/2026</h5>
    <p class="card-text">INSET Training for the 2025/2026 Academic Session to Hold from 1st to 4th of September...<br/></p>
    <a href="http://m.greenspringsschool.com" class="btn btn-primary">Read More...</a>
    <p class="card-text"><small class="text-body-secondary">Posted on August 23, 2025 </small></p>
  </div>
</div>
    </div>

    <div className="col-sm-3">
      <div class="card" style={{width: "18rem"}}>
  <img src="../images/hrlogo1.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Change of HMO</h5>
    <p class="card-text">This is to notify the general staff of GSL that the window to change the HMO is yet opened...</p>
    <a href="https://www.greenspringsschool.com" class="btn btn-primary">Read More...</a>
    <p class="card-text"><small class="text-body-secondary">Posted on July 26, 2025 </small></p>
  </div>
</div>
    </div>


    <div className="col-sm-3">
      <div class="card" style={{width: "18rem"}}>
  <img src="../images/hrlogo1.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Another News</h5>
    <p class="card-text">A brief synopsis of the news to futher explain the headline will be written here by the HR...</p>
    <a href="https://support.greenspringsschool.com" class="btn btn-primary">Read More...</a>
    <p class="card-text"><small class="text-body-secondary">Posted on August 26, 2025 </small></p>
  </div>
</div>
    </div>
  </div>
</section>
</section>
<Announcement />
{/* <Header /> */}
<Footer/>
    </div>
  );
}

export default App;
