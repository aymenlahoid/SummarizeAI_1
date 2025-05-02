import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faRobot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Register_Login(){
  
    return(
        <div class="form-container1">
            <p class="title">SummarizeAI</p>
            <form class="form">
              <span><input type="text" class="input1" placeholder="First Name" name="name" required="" id="First-Name"/><input type="text" class="input1" placeholder="Last Name" name="name" required="" id="Last-Name"/></span>
              <input type="email" class="input" placeholder="Email" name="email" required=""/>
              <input type="password" class="input" placeholder="Password" name="password" required=""/>
              <input type="password" class="input" placeholder="Confirm Password" name="password" required=""/>
              <p class="page-link">
              </p>
              <button class="form-btn">Sign up</button>
            </form>
            <p class="sign-up-label">
              Already have an account? <a href="Login_Register1.html"><span class="sign-up-link">Login</span></a>
            </p>
           
                <button class="form-btn1" id="Facebook-btn"><i class="fa-brands fa-facebook"></i>Sign up with Facebook</button>
              
                <button class="form-btn2" id="Google-btn"><i class="fa-brands fa-google"></i>Sign up with Google</button>
            
        </div>

    );
}

export default Register_Login