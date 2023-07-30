import React, {useState} from 'react';
import './signup.css';

const Signup = () => {

    const [isHide, setIsHide] = useState('login');

  return (
    <>
        <section className="main-container">
            <div className="container">
                {
                    isHide === 'login' || isHide === 'signup' ?
                    <div id="top-btns" className="btn-grp">
                        <button className={`top-btn ${isHide === 'login' ? 'selected':""}`} id="login-btn" onClick={() => {setIsHide('login')}}>
                            Login
                        </button>
                        <button className={`top-btn ${isHide === 'signup' ? 'selected':""}`} id="sign-up" onClick={() => {setIsHide('signup')}}>
                            Sign Up
                        </button>
                    </div>
                    :
                    ""
                }
                {
                    isHide === 'forget' ? 

                    <div id="reset-btns" className="btn-grp">
                        <button className="top-btn selected" id="reset-btn">
                            Reset Password
                        </button>
                        <button className="top-btn" id="back-btn" onClick={() => {setIsHide('login')}}>
                            Back
                        </button>
                    </div>
                    :
                    ""
                }

                <form>
                    {
                        isHide === 'signup' ?

                        <div className="inputContainer" id="name">
                            <input type="text" name='name' required autoComplete='off' />
                            <label>fullname</label>
                        </div>
                        :
                        ""
                    }
                    
                    <div className="inputContainer">
                        <input type="email" name='email' required autoComplete='off' />
                        <label>email</label>
                    </div>

                    {
                        isHide === 'login' || isHide === 'signup' ?

                        <div className="inputContainer" id="passwd">
                        <input type="password" name="password" required autocomplete="off" />
                        <label>password</label>
                        </div>
                        :
                        ""
                    }
                    {
                        isHide === 'signup' ?
                        <div className="inputContainer" id="re-pass">
                            <input type="password" name="password" required autocomplete="off" />
                            <label>confirm password</label>
                        </div>
                        :
                        ""
                    }
                    
                    <div className="btn">
                        <input type="submit" name="submit"/>
                    </div>
                    {
                        isHide === 'login' ?

                        <div className="forget-pass">
                            <p id="forget-pass" onClick={() => {setIsHide('forget')}}>FORGET YOUR PASSWORD?</p>
                        </div>
                        :
                        ""
                    }
                </form>
            </div>
        </section>
    </>
  )
}

export default Signup