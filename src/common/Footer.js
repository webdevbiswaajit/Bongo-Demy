import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <>
      <div className=" bg-light-green py-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-5">
            <div className=" col-span-2">
              <h2 className=" text-3xl font-medium  font-rubic text-white mb-2">
                BongoDemy
              </h2>
              <div className=" w-11/12">
                <p className="text-base font-rubic  text-dark-blue font-medium   ">
                  BongoDemy is working to prevent cyber-bullying and cyber-crime
                  in Bangladesh. Provide free training and cyber awareness
                  programs for students. We also provide cyber security training
                  and services to build skilled manpower in cyber security
                  field.
                </p>
              </div>
            </div>
            <div className="">
              <h2 className=" text-2xl font-medium  font-rubic text-white mb-2">
                Partner Programs
              </h2>
              <p className="text-base font-rubic  text-dark-blue font-medium">
                <Link to="/">Partners</Link>
              </p>
              <p className="text-base font-rubic  text-dark-blue font-medium">
                <Link to="/">Affiliate</Link>
              </p>
              <p className="text-base font-rubic  text-dark-blue font-medium">
                <Link to="/">Campus Ambassador</Link>
              </p>
            </div>
            <div className="">
              <h2 className=" text-2xl font-medium  font-rubic text-white mb-2">
                Company
              </h2>
              <p className="text-base font-rubic  text-dark-blue font-medium">
                <Link to="/about">About</Link>
              </p>
              <p className="text-base font-rubic  text-dark-blue font-medium">
                <Link to="/achievement">Achievement</Link>
              </p>
              <p className="text-base font-rubic  text-dark-blue font-medium">
                <Link to="/mission-vision">Mission & Vision</Link>
              </p>
            </div>
            <div className="">
              <h2 className=" text-2xl font-medium  font-rubic text-white mb-2">
                Products
              </h2>
              <p className="text-base font-rubic  text-dark-blue font-medium">
                <Link to="/cybersecurity-training">Cybersecurity Training</Link>
              </p>
              <p className="text-base font-rubic  text-dark-blue font-medium">
                <Link to="/cybersecurity-services">Cybersecurity Services</Link>
              </p>
              <p className="text-base font-rubic  text-dark-blue font-medium">
                <Link to="/cyber-awareness">Cyber Awareness</Link>
              </p>
            </div>
          </div>
          <div className=" mt-14">
            <div className="grid grid-cols-2 items-center">
              <div className="">
                <h2 className=" text-base text-white font-rubic font-medium">
                  Follow Us
                </h2>
                <div className=" mt-7 flex">
                  <p className=" text-3xl text-dark-blue mr-7">
                    <ExternalLink href="https://www.facebook.com/">
                      <Icon icon="mdi:facebook" />
                    </ExternalLink>
                  </p>
                  <p className=" text-3xl text-dark-blue mr-7">
                    <ExternalLink href="https://twitter.com/BISWAJI50403190">
                      <Icon icon="mdi:twitter" />
                    </ExternalLink>
                  </p>
                  <p className=" text-3xl text-dark-blue mr-7">
                    <ExternalLink href="https://www.instagram.com/biswajit_sikdar51/">
                      <Icon icon="bi:instagram" />
                    </ExternalLink>
                  </p>
                  <p className=" text-3xl text-dark-blue mr-7">
                    <ExternalLink href="https://www.linkedin.com/in/biswajit-sikdar-9452881b5/">
                      <Icon icon="mdi:linkedin" />
                    </ExternalLink>
                  </p>
                  <p className=" text-3xl text-dark-blue mr-7">
                    <ExternalLink href="https://www.youtube.com/">
                      <Icon icon="mdi:youtube" />
                    </ExternalLink>
                  </p>
                </div>
              </div>
              <div className="">
                <p className=" text-base text-white font-rubic font-medium text-right">
                  Get the latest security & insights straight to your inbox
                </p>
                <div className=" flex justify-end">
                  <div className="">
                    <form action="">
                      <div className="w-full flex items-center justify-between border-2 border-dark-blue rounded-full mt-4">
                        <input
                          className="  bg-transparent pl-8 py-2 border-none placeholder:text-dark-blue focus:outline-none text-white focus:text-white   w-4/6"
                          type="email"
                          placeholder="Enter business email "
                        />
                        <div
                          className="  bg-dark-blue  px-6 py-2 rounded-full"
                          style={{ "margin-right": "-2px" }}
                        >
                          <button
                            type="submite"
                            className=" bg-transparent text-base font-medium text-light-green"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-dark-blue py-6">
        <p className=" text-sm font-rubic  text-white font-medium text-center">
          Copyright © 2022, All Right Reserved by BongoDemy
        </p>
      </div>
    </>
  );
}

export default Footer;
