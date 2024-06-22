import './header.css'

export default function Header() {
  return (
    <header>
        <div className="logo">
            <h1>
                Machin
                {/* M<span>&</span>R  */}
            </h1>
            </div>
        <div className="links">
            <a href="#">Home</a>
            <a href="#">Price</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        <div className="login-register">
            <div className="login">
                <a href="#">Log in</a>
            </div>
            <div className="register">
                <a href="#">Sign up</a>
            </div>
        </div>
    </header>
  )
}
