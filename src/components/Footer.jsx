import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="px-16 py-14 mt-20 bg-[#f0ffe5]">
        <div id="SubscribeSection" className="flex justify-between">
          <div id="subscribe" className="flex-row">
            <p className="text-[#000000] font-medium text-xl">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <p className="text-[#838383] font-normal text-sm pt-4">
              Lorem ipsum dolor sit amet. Aut <br />
              ipsam illum et nostrum quidem aut <br />
              necesbus enim
            </p>
            <input
              type="email"
              placeholder="Enter you email address"
              className="p-3 my-4 pr-14 border-2"
            />
            <br />
            <span>
              <button className="bg-[#247822] rounded-full text-white p-3 px-8  font-medium text-xl border-r-2 mt-4">
                SUBSCRIBE
              </button>
            </span>
          </div>
          <div id="About Us">
            <p className="text-[#000000] font-medium text-xl">ABOUT US</p>
            <ul className="flex-row justify-evenly text-[#838383] font-medium text-sm pt-5">
              <li className="py-1 ">Our Strory</li>
              <li className="py-1 ">Blogs</li>
              <li className="py-1 ">Careers Plants</li>
              <li className="py-1 ">Contact Us</li>
              <li className="py-1 ">Help & Support</li>
            </ul>
          </div>
          <div id="Our Services">
            <p className="text-[#000000] font-medium text-xl">OUR SERVICES</p>
            <ul className="flex-row justify-evenly text-[#838383] font-medium text-sm pt-5">
              <li className="py-2">Book Maali</li>
              <li className="py-2">Plant Day Care</li>
              <li className="py-2">Rent Plants</li>
              <li className="py-2">Plants & Pots</li>
              <li className="py-2">Gardening Tools</li>
            </ul>
          </div>
          <div id="Useful Links">
            <p className="text-[#000000] font-medium text-xl">USEFUL LINKS</p>
            <ul className="flex-row justify-evenly text-[#838383] font-medium text-sm pt-5">
              <li className="py-2">My Account</li>
              <li className="py-2">Orders and Returns</li>
              <li className="py-2">Track Order</li>
              <li className="py-2">Terms & Conditions</li>
              <li className="py-2">Privacy Policy</li>
              <li className="py-2">
                Return, Refund
                <br />
                and Replacement Policy
              </li>
            </ul>
          </div>
          <div id="GetinTouch">
            <p className="text-[#000000] font-medium text-xl">GET IN TOUCH</p>
            <ul className="flex-row justify-evenly text-[#838383] font-medium text-sm pt-5">
              <li className="py-2">
                Address: F-262, First Floor, <br />
                Sushant Lok Phase-III, Sector-57,
                <br /> Gurgaon, Haryana, India 122003
              </li>
              <li className="py-2">Call+919958287272</li>
              <li className="py-2">Email:care@chaperoneplants.com</li>
            </ul>
          </div>
        </div>
        <div id="Chaperone" className="py-6">
          <p className="text-[#000000] font-medium text-xl">CHAPERONE</p>
          <p className="text-[#838383] font-normal text-sm my-4">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis.
            <br /> Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. <br />
            Et architecto nihil id labore omnis hic iste deleniti et porro
            aspernatur.
          </p>
        </div>
        <div id="FollowUs Section">
          <p className="text-[#000000] font-medium text-xl pb-6 py-4">
            FOLLOW US ON
          </p>
          <ul className="flex space-x-4 mb-4">
            <li>
              <FontAwesomeIcon icon={faFacebookF} size="2x"  className="px-2"/>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="2x" className="px-2" />
            </li>
            <li>
              <FontAwesomeIcon icon={faThreads} size="2x" className="px-2"/>
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} size="2x" className="px-2"/>
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="px-2"/>
            </li>
          </ul>
        </div>
        <hr />
        <span className=" p-4 text-[#838383]">
          <p>© 2023, chaperone.com All rights reserved.</p>
        </span>
      </div>
    </>
  );
};

export default Footer;
