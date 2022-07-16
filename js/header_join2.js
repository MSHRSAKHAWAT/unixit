// console.log("connect");
const HeaderNavbar = document.getElementById("header_part");
const texts = ["About", "Admission", "Courses", "Others", "Contact"];
function abc(x) {
  console.log("connect");
  HeaderNavbar.innerHTML = `
  <section id="top_contact_line">
  <div class="container">
    <div class="row py-2">
      <div class="col-lg-6 col-md-6 col-sm-12 line_cntr">
        <div class="contact_info d-flex">
          <div class="contact_info_phn"><i class="fa fa-phone">&nbsp; 01822663583</i>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
          <div class="contact_info_sms">
            <i class="fa fa-envelope">&nbsp; unixit21@gmail.com</i>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 line_cntr">
        <div class="d-flex justify-content-end">
          <div class="contact_info_social">
            <ul class="d-flex">
              <li>
                <a href="#" class="text-white"><i class="fa fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#" class="text-white"><i class="fa fa-instagram"></i></a>
              </li>
              <li>
                <a class="text-white" href="#"><i class="fa fa-linkedin"></i></a>
              </li>
              <li>
                <a class="text-white" href="#"><i class="fa fa-twitter"></i></a>
              </li>
            </ul>
          </div>
          <div class="user_form">
            <a class="text-white" href="#" class=""><b>Sign In</b></a> |
            <a class="text-white" href="#" class=""><b>Join</b></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>

        <!-- ===================navbar=================== -->
        <nav class="navbar">
          <div class="max-width m-0">
            <div class="logo">
              <img width="100" src="../images/unixitlogo1tealnew.png" alt="" />
            </div>
            <ul class="menu">
              <li><a href="#home" class="menu-btn">Home</a></li>
              <li><a href="others_html/about.html" class="menu-btn">About</a></li>
              <li><a href="#services" class="menu-btn">Admission</a></li>
              <li><a href="#skills" class="menu-btn">Courses</a></li>
              <li><a href="#teams" class="menu-btn">Others</a></li>
              <li><a href="#contact" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn">
              <i class="fas fa-bars"></i>
            </div>
          </div>
        </nav>
  `;
}

abc();
