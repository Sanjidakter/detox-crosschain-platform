import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="subscribe flex justify-center  text-white">
        <div className="text-center ml-8 mt-24  ">
          <span className="footer-title font-bold text-3xl">
            Subscribe To Our Newsletter
          </span>
          <p className="mt-3">Join our email list for exclusive offers and the latest news.</p>
          <div className="form-control ml-20 mt-3 w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered w-full bg-white p-3 pr-16"
              />
              <button className="btn bg-orange-500 absolute top-0 right-0 rounded-l-none p-3 -ml-14">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer p-24 ml-4  text-white">
        <div>
          <span className="footer-title">ECOSYSTEM</span>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Treasury</a>
          <a className="link link-hover">Telemetry</a>
          <a className="link link-hover">Brand Hub</a>
          <a className="link link-hover">Jobs</a>
        </div>
        <div>
          <span className="footer-title">FEATURES</span>
          <a className="link link-hover">Technology</a>
          <a className="link link-hover">Token</a>
          <a className="link link-hover"> Para chains</a>
          <a className="link link-hover">Staking</a>
          <a className="link link-hover">XCM</a>
        </div>
        <div>
          <span className="footer-title">DEVELOPMENT</span>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Grants</a>
          <a className="link link-hover">Bounties</a>
          <a className="link link-hover">Academy</a>
          <a className="link link-hover">Build</a>
        </div>
        <div>
          <span className="footer-title">ABOUT</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Roadmap</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Subscribe to the newsletter to hear about Lybell updates and
                events.
              </span>
            </label>
            <div className="relative">
              <button className="btn  bg-orange-500 absolute top-0 left-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <hr class="custom-hr" />

      <div className="footer items-center p-4  text-white">
        <div className="items-center grid-flow-col">
          <h2 className="text-3xl ml-24 font-bold">Lybell</h2>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p> © 2022 CreativePeoples. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
