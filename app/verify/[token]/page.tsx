"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "@assets/login.css";
const VerifyPage = () => {
  const { token } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      verifyEmail(token as string);
    }
  }, [token]);

  const verifyEmail = async (token: string) => {
    try {
      const res = await fetch(`http://localhost:4000/api/v1/verify/${token}`, {
        method: "GET",
      });

      if (res.ok) {
        Swal.fire({
          title: "Verified!",
          text: "Your email has been successfully verified.",
          icon: "success",
          confirmButtonText: "Login",
          background: "#1C1D1F",
          color: "#FFFFFF",
          confirmButtonColor: "#7DDD7D",
        }).then(() => {
          router.push("/login");
        });
      } else {
        Swal.fire({
          title: "Verification Failed",
          text: "Invalid or expired verification link.",
          icon: "error",
          confirmButtonText: "OK",
          background: "#1C1D1F",
          color: "#FFFFFF",
          confirmButtonColor: "#7DDD7D",
        });
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        background: "#1C1D1F",
        color: "#FFFFFF",
        confirmButtonColor: "#7DDD7D",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{ textAlign: "center", marginTop: "50px", color: "#7DDD7D" }}
        className="hero"
      >
        {/* Verifying your email... */}
      </div>
    );
  }

  return null;
};

export default VerifyPage;
