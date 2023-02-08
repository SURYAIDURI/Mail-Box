import React from "react";

const Login = () => {
  return (
    <div>
      <center>
        <h4>SignUP</h4>
        <form>
          <input size={30} type="email" placeholder="Email" /> <br /> <br />
          <input  size={30} type="password" placeholder="Password" /> <br /> <br />
          <input size={30} type=" confirm password" placeholder="Confirm Password" />{" "}
          <br /> <br/>
          <button >Sign up</button> <br /> <br />
        </form>
        <button>Have an account? Login</button>
      </center>
    </div>
  );
};

export default Login;
