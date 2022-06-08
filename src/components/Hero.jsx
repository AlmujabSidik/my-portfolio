import React from "react"
import BgGradient from "../assets/gradient.webp"
import {ArrowDownIcon} from '@heroicons/react/outline'

const Hero = () => {
  return (
    <div className="inner-hero px-5 mt-40 relative w-full">
      <div className="content-hero relative z-10">
        <div className="inner-greeting flex items-center">
          <div className="line-greeting bg-white w-20 h-[2px] rounded-full mr-3 lg:mr-4"></div>
          <div className="flex items-center">
            <h3 className="font-menu font-normal text-2xl lg:text-4xl leading-10 text-white tracking-wider mr-2">
              Hi There
            </h3>
            <div className="inner-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.54 18.5063L18.9525 19.1625L21.7525 4.76878C21.9275 3.80628 21.315 2.84378 20.3963 2.66878C19.4338 2.49378 18.515 3.15003 18.34 4.11253L15.54 18.5063Z"
                  fill="#FFDD67"
                />
                <path
                  d="M20.44 2.66875C20.3088 2.625 20.2213 2.625 20.09 2.625C20.8775 2.93125 21.315 3.7625 21.14 4.6375L18.34 19.0313L18.9525 19.1625L21.7525 4.76875C21.9713 3.7625 21.3588 2.84375 20.44 2.66875Z"
                  fill="#EBA352"
                />
                <path
                  d="M12.04 18.9438H16.1525V3.0625C16.1525 1.88125 15.2338 0.875 14.0963 0.875C13.0025 0.875 12.04 1.8375 12.04 3.0625V18.9438Z"
                  fill="#FFDD67"
                />
                <path
                  d="M14.1401 0.875C14.0526 0.875 13.9213 0.875 13.8338 0.91875C14.8401 1.09375 15.5838 1.96875 15.5838 3.0625V18.9875H16.1963V3.0625C16.1963 1.8375 15.2776 0.875 14.1401 0.875Z"
                  fill="#EBA352"
                />
                <path
                  d="M9.85253 18.9L13.3525 17.9813L9.54628 3.50001C9.28378 2.49376 8.27753 1.88126 7.31503 2.10001C6.35253 2.36251 5.78378 3.36876 6.04628 4.37501L9.85253 18.9Z"
                  fill="#FFDD67"
                />
                <path
                  d="M7.31505 2.10001L7.05255 2.23126C7.92755 2.18751 8.71505 2.75626 8.97755 3.67501L12.7838 18.1563L13.3963 17.9813L9.5463 3.50001C9.2838 2.49376 8.27755 1.88126 7.31505 2.10001Z"
                  fill="#EBA352"
                />
                <path
                  d="M2.41505 5.86256C1.5838 6.25631 1.3213 7.30631 1.7588 8.18131L7.5338 19.6876L10.4651 18.2001L4.69005 6.69381C4.25255 5.81881 3.2463 5.46881 2.41505 5.86256Z"
                  fill="#FFDD67"
                />
                <path
                  d="M2.41503 5.86256C2.32753 5.90631 2.24003 5.95006 2.15253 6.03756C2.89628 5.81881 3.72753 6.21256 4.12128 7.00006L9.89628 18.5063L10.465 18.2438L4.69003 6.69381C4.25253 5.81881 3.24628 5.46881 2.41503 5.86256Z"
                  fill="#EBA352"
                />
                <path
                  d="M27.6588 12.8188C26.9588 11.4626 24.7713 11.5501 22.54 14.0001C20.965 15.7063 20.6588 16.2751 19.0838 16.2313V14.4376C19.0838 14.4376 15.715 11.9438 9.02128 13.0813C9.02128 13.0813 5.21503 13.6063 5.21503 15.6188C5.21503 15.6188 4.55878 20.4751 5.91503 23.5376C7.92753 28.0876 18.2525 29.2688 21.49 21.5251C22.1463 19.9938 23.4588 18.8563 24.64 17.4126C25.9963 15.6626 28.4025 14.2626 27.6588 12.8188Z"
                  fill="#FFDD67"
                />
                <path
                  d="M27.6588 12.8188C27.5276 12.5563 27.3526 12.3813 27.1338 12.2063C27.1776 12.25 27.2213 12.2938 27.2213 12.3813C27.9651 13.8688 25.5588 15.225 24.1151 16.975C22.9338 18.4188 21.6213 19.5563 20.9651 21.0875C18.1651 27.7813 10.0276 27.7813 6.61505 24.7188C9.7213 28.2188 18.4713 28.5688 21.4026 21.525C22.0588 19.9938 23.3713 18.8563 24.5526 17.4125C25.9963 15.6625 28.4026 14.2625 27.6588 12.8188ZM19.5213 16.2313C16.6776 15.1813 11.6026 17.1063 12.3026 22.225C12.3026 17.4563 16.6338 16.275 18.9963 16.275C19.3463 16.2313 19.5213 16.2313 19.5213 16.2313Z"
                  fill="#EBA352"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-heading-1">
          <h1 className="text-white font-medium font-primary text-4xl lg:text-6xl leading-[40px] lg:leading-[68px]">
            I’m Almujab Sidik, a front end
          </h1>
        </div>
        <div className="content-heading-2">
          <h1 className="text-white font-medium font-primary text-4xl lg:text-6xl leading-[40px] lg:leading-[68px]">
            developer and wordpress
          </h1>
        </div>
        <div className="content-heading-3">
          <h1 className="text-white font-medium font-primary text-4xl lg:text-6xl leading-[40px] lg:leading-[68px]">
            developer.
          </h1>
        </div>
      </div>

      <div className="gradient ">
        <img
          src={BgGradient}
          className="w-full overflow-hidden absolute -top-[60px] -left-[115px] rotate-[40deg]  opacity-70"
          alt="Background Gradient"
        />
      </div>

      <div className="content-about mt-6 relative z-10">
        <div className="content-about-1">
          <p className="font-menu text-lg text-white font-normal leading-[32px] ">
            I'm currently a front-end and WordPress
          </p>
        </div>
        <div className="content-about-2">
          <p className="font-menu text-lg text-white font-normal leading-[32px]">
            developer with 1+ years of experience, now I
          </p>
        </div>
        <div className="content-about-3">
          <p className="font-menu text-lg text-white font-normal leading-[32px]">
            work as a freelancer in Indonesia.
          </p>
        </div>
      </div>

      <div className="btn-explore flex items-center cursor-pointer mt-6">
              <div className="font-primary font-medium mr-3 text-[26px] text-white leading-[70px] tracking-[10px]">EXPLORE</div>
                <ArrowDownIcon className="text-white w-9 h-8   -rotate-45 hover:-rotate-0 transition-all duration-300 ease-out"/>
      </div>
    </div>
  );
};

export default Hero;


