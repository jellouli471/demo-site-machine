import './Main.css'

export default function Main() {
  return (
    <div className='main'>
        <div className="side-text">
            <div className="big-text">
            <h1>We make machine <br/> to create <br/> another machine</h1>
            </div>
            <div className="smail-paragraph">
                <p>Lorem ipsum dolor sit amet  consectetur adipisicing elit. Beatae, quos! Nisi alias vitae </p>
            </div>
            <div className="btn-side-text">
                <button>Read more</button>
            </div>
        </div>
        <div className="background-this-side">
            <img src="./imgs/mhd.jpg" alt="" />
        </div>
        <div className="test-side-bar">
        <div className="side-bar-service">
            <div className="item-Service">
                <span>Service</span>
            </div>
            <div className="item-Quality">
                <span>Quality</span>
            </div>
            <div className="item-Production">
                <span>Production</span>
            </div>
            <div className="item-Delivery">
                <span>Delivery</span>
            </div>
        </div>
        </div>
    </div>
  )
}
