import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar/Navbar';
// import Button from '../components/Button/Button';
// import FooterTwo from '../components/FooterTwo';
import '../LandingPage.css'

function LandingPage() {
//   const navigate = useNavigate();
  return (
    <div>
      {/* <Navbar /> */}
      <section className="section-one md:flex md:flex-row p-8 md:h-screen md:text-start md:mx-auto  md:justify-between">
        <div className="hero-content p-10 flex flex-col justify-center text-center items-center  mx-auto gap-5   md:mt-14">
          <h1 className="text-3xl font-mt-20 md:mt-0  text-main-7 leading-10 md:text-6xl">
            Send that special one, all your ❤️
          </h1>
          <p className="leading-5  text-2xl md:text-3xl">
            Instantly share your deepest feelings with our AI generated letters
          </p>
          {/* <div className="button__container md:block">
            <Button
              height="40px"
              width="120px"
              name="Try it for free"
              onClick={() => {
                navigate('/signup');
              }}
            />
          </div> */}
        </div>
        <div className=" animated-video  md:block mt-16 ">
          <video
            src="/loveanimationvideo.mp4"
            autoPlay
            loop
            muted
            width=""
            height=""
            controls
          ></video>
        </div>
      </section>

      <section className=" section-two flex flex-col justify-center items-center text-center p-8 gap-10 md:p-20 md:mx-auto  h-screen">
        <h1 className="font-bold text-3xl leading-8 md:text-6xl">
          Generate a love note in seconds
        </h1>
        <p className="md:text-3xl md:w-3/4">
          Experience the full power of an AI love note generator that delivers
          <span className="text-main-1"> premium</span> and
          <span className="text-main-1">romantic</span> results in seconds.
        </p>
        <div>
          <p className="text-7xl text-main-1 font-bold mb-2">2,000,000 +</p>
          <span>People choose loveMe</span>
        </div>
        <img
          src="/loveVector.png"
          alt=""
          className="hidden md:block absolute bottom-1 left-3"
        />
      </section>

      <section className=" section-three flex flex-col justify-center items-center text-center p-8 md:gap-10 md:p-20 md:h-screen md:mx-auto">
        <h1 className="font-bold text-4xl leading-6 md:text-6xl md:mt-20">
          Yes! It’s that easy
        </h1>
        <p className="text-2xl leading-7  md:text-3xl md:w-3/4">
          We take the stress out of your love life using our proprietary AI
          technology
        </p>
        <div className="text-xs flex flex-col justify-center items-center gap-4 p-5">
          <div className="flex items-center justify-center  gap-3 md:gap-8">
            <div className="bg-main-1 text-white px-4 py-1 rounded-2xl md:p-3  md:text-xl md:rounded-full">
              Sweetheart
            </div>
            <div className="bg-white text-main-1 px-4 py-1 rounded-2xl border-2 border-red-400 md:p-3  md:text-xl md:rounded-full">
              Darling
            </div>
            <div className="bg-main-1 text-white rounded-2xl px-2 py-1 md:p-3  md:text-xl md:rounded-full">
              Honeypie
            </div>
            <div className="bg-white text-main-1 rounded-2xl px-3 py-1 border-2 border-red-400 md:p-3  md:text-xl md:rounded-full">
              Queen
            </div>
            <div className="hidden lg:block bg-main-1 text-white px-3 py-1 rounded-2xl md:p-3  md:text-xl md:rounded-full">
              Forever Love
            </div>
            <div className=" hidden lg:block bg-white text-main-1 px-4 py-1 rounded-2xl border-1 border-2 border-red-400 md:p-3  md:text-xl md:rounded-full">
              Sugar Plum
            </div>
          </div>

          <div className="flex content-center items-center justify-center gap-2 md:gap-8">
            <div className="bg-white text-main-1 px-2 py-1 rounded-2xl md:p-3 md:px-4  md:text-xl md:rounded-full">
              Slime
            </div>
            <div className="bg-main-1 text-white px-2 py-1 rounded-2xl md:px-5 md:p-3  md:text-xl md:rounded-full">
              loml
            </div>

            <div className="text-main-1 bg-white border-2 rounded-2xl px-2 py-1 md:p-3 md:px-4  md:text-xl md:rounded-full">
              Moonshot
            </div>
            <div className="bg-main-1 text-white rounded-2xl px-2 py-1 md:p-3  md:text-xl md:px-4 md:rounded-full">
              Cupcake
            </div>
            <div className="bg-white text-main-1 rounded-2xl border-2 border-red-400 px-2 py-1 md:p-3 md:px-4  md:text-xl md:rounded-full">
              Bird nest
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 md:gap-8">
            <div className="bg-white text-main-1 px-2 py-1 rounded-2xl border-red-400 md:p-3 md:px-4  md:text-xl md:rounded-full">
              Cherry
            </div>
            <div className="bg-main-1 text-white px-2 py-1 rounded-2xl md:p-3  md:text-xl md:px-4 md:rounded-full">
              Firefly
            </div>
            <div className="bg-white text-main-1 rounded-2xl px-2 py-1 border-2 border-red-400 md:p-3 md:px-4 md:text-xl md:rounded-full">
              Divine
            </div>
            <div className="bg-main-1 text-white rounded-2xl px-3 py-1 md:p-3  md:text-xl md:px-4 md:rounded-full">
              Ride or die
            </div>
          </div>

          <div className="flex justify-around gap-2">
            <div className="bg-main-1 text-white px-4 py-1 rounded-2xl md:hidden md:p-3  md:text-xl md:rounded-full">
              Forever Love
            </div>
            <div className="bg-white text-main-1 px-4 py-1 rounded-2xl border-1 border-2 border-red-400 md:hidden md:p-3  md:text-xl md:rounded-full">
              Sugar Plum
            </div>
          </div>
        </div>
      </section>

      <section className="section-four">
        <div className="flex flex-col justify-center items-center text-center p-8 md:p-10  md:mx-auto">
          <h2 className="leading-8 text-6xl mb-4">How it works</h2>
          <p className="text-center text-lg leading-6 md:text-3xl">
            Here is how to use LoveMe to generate your Love letter
          </p>
        </div>

        <div className="generating-steps relative">
          <div className="keyword--section">
            <img src="/keyword image.svg" alt="" />
            <div className="generating--content flex gap-2">
              <div>
                <img src="/one copy.png" alt="" />
              </div>
              <div className="flex flex-col">
                <span className="mt-3">Keyword</span>
                <span>select your keyword</span>
              </div>
            </div>
          </div>

          <div className="generate--letter">
            <div className="flex align-center justify-center gap-3">
              <div>
                <img src="/two.png" alt="" />
              </div>
              <div className="flex flex-col">
                <span className="mt-3">Generate Letter</span>
                <span>Fill the survey form </span>
              </div>
            </div>
            <img src="/generate letter.svg" alt="" />
          </div>
          <div className="payment--section mb-10">
            <img src="/payment.svg" alt="" />
            <div className="generating--content flex gap-2 ">
              <div>
                <img src="/three copy.png" alt="" />
              </div>
              <div className="flex flex-col">
                <span className="mt-3">Make Payment</span>
                <span>Pay and send letter to your loved one</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-five">
        <h1 className="font-bold leading-8 text-5xl text-center mx-auto mt-20">
          What People Say
        </h1>
        <div className="testimonials">
          <div className=" testimonial-content">
            <img src="/mainquote.png" alt="" />
            <p className="">
              “LoveMe has been the defining moment for my relationship. I always
              like to share with my partener how much they mean to me. With
              loveMe it’s now easier”.
            </p>
            <span className="font-bold">- Favour M.</span>
          </div>
          <div className="testimonial-content mb-6">
            <img src="/mainquote.png" alt="" />
            <p>
              “With LoveMe creating a romantic love is super fast. I could never
              have asked for somthing better”
            </p>
            <span className="font-bold">- Patrick A.</span>
          </div>
          <div className="testimonial-content mb-6">
            <img src="/mainquote.png" alt="" />
            <p>
              “Creating a love letter has always been a hassel to me. Writing
              one isn’t a chore anymore. It is so easy that it only takes three
              steps “
            </p>
            <span className="font-bold">- Josh K.</span>
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center gap-9 text-center p-36 relative">
        <h2 className=" text-3xl md:text-6xl text-main-7 mt-10 w-screen">
          Join our waitlist
        </h2>
        <p className="font-medium  w-screen p-3 text-3xl ">
          Be the first to know when we launch & also get exclusive offers
        </p>
        <div className=" flex flex-col gap-2 md:flex md:flex-row md:items-center md:justify-center md:gap-2 relative">
          <label
            htmlFor="email"
            className="flex justify-center items-center relative rounded-lg"
          >
            <input
              className="border-2 border-black p-3 w-72 rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="eg.johndoe@gmail.com"
            />
            <BsArrowRight className="absolute right-3" />
          </label>
          {/* <Link
            to="/signup"
            className="w-40 mx-auto p-2 bg-main-1 no-underline
         rounded-lg text-white text-xl"
          >
            Sign-up
          </Link> */}
        </div>
      </section>
      {/* <FooterTwo /> */}
    </div>
 );
}
export default LandingPage;
