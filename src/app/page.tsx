import Link from "next/link";

export default function LandingPage() {

  return (
    <div>
      <h1>Welcome to the Lynk</h1>
      <Link href="/login">
        <p> Login </p>
      </Link>
    </div>
  );
}