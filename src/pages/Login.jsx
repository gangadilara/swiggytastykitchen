import React, { useState } from "react"

function Login() {
  const [phone, setPhone] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10 digit mobile number.")
      return;
    }

    alert("OTP sent successfully!")
  };

  return (
    <main className="login-page">
      <div className="login-box">
        <h1>Login</h1>

        <p>
          Enter your mobile number to continue
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={phone}
            maxLength="10"
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
          />

          <button type="submit">
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login