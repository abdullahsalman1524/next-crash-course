"use client";

import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const submitButton = () => {
    router.push("/auth/login");
  };

  return (
    <div>
      <p>Register Module</p>
      <button onClick={submitButton}>Submit</button>
    </div>
  );
};

export default Register;
