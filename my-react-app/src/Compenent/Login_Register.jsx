import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faRobot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Login_Register(){
  
    return(
        <div class="form-container">
            <p class="title">SummarizeAI</p>
            <form class="form">
              <input type="email" class="input" placeholder="Email" name="email" required=""/>
              <input type="password" class="input" placeholder="Password" name="password" required=""/>
              <p class="page-link">
              </p>
              <button class="form-btn">Login</button>
            </form>
            <p class="sign-up-label">
              I dont have any account? <a href="Register_Login1.html"><span class="sign-up-link">Sign up</span></a>
            </p>

                <button class="form-btn1" id="Facebook-btn"><i class="fa-brands fa-facebook"></i>Login with Facebook</button>

                <button class="form-btn2" id="Google-btn"><i class="fa-brands fa-google"></i>Login with Google</button>
        </div>
    );
}

export default Login_Register
