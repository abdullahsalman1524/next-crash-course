import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <p>Login</p>

      <Link href="/auth/register">Register</Link>
    </div>
  );
};

export default Login;
