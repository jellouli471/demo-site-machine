import './footer.css'
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";













export default function Footer() {
  return (
    <div className='Footer'>
        <div className="footer-items">


            <div className="footer-item-1">
                <span>all copyrights reserved ©</span>
            </div>


            <div className="footer-item-2">
                <div className="facebook">
                    <a href="#"><CiFacebook  id='icons' /></a>
                </div>
                <div className="instagram">
                    <a href="#"><FaInstagram  id='icons' /></a>
                </div>
                <div className="tiktok">
                    <a href="#"><FaTiktok id='icons' /></a>
                </div>
            </div>


            <div className="footer-item-3">
                <span>Number : 060000000000</span>
            </div>



        </div>
    </div>
  )
}
