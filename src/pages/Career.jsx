import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

function Career() {
  return (
    <>
      <Header />
      <MantineProvider>
        {/* Step of career discovery */}
        <div class="mt-[7rem] bg-linear-to-r from-blue-400 to-cyan-200 text-center">
          <div class="p-[2rem]">
            <h1 class="text-[2.5rem]  font-bold p-[2rem]">
              Building your Career.
            </h1>
            <ul class="timeline timeline-vertical p-[1rem]">
              <li>
                <div class="timeline-start timeline-box text-xl">
                  Assess your currect level.
                </div>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="text-primary h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <hr class="bg-primary" />
              </li>
              <li>
                <hr class="bg-primary" />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="text-primary h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end timeline-box text-xl">
                  Personal aweareness. Identify your strong abilities
                </div>
                <hr class="bg-primary" />
              </li>
              <li>
                <hr class="bg-primary" />
                <div class="timeline-start timeline-box text-xl">
                  Find the career the suites you.
                </div>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="text-primary h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="timeline-end timeline-box text-xl">
                  Creat a career path chart and track you milestones.
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start timeline-box text-xl">
                  Apply for Work with a job-winning Resume.
                </div>
                <div class="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* news feed fed by backednnd*/}

        <div class="flex flex-wrap my-[2rem] w-[90%] ml-[5%] justify-center justify-items-center ">
          <div class="card bg-[#dc143c]/85 w-96 shadow-sm p-[2rem] mx-[1rem] my-[1rem] text-white ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-xl">Newsfeed title</h2>
              <p>News feed description.</p>
            </div>
            {/* set career cat=rtegory to link to for each newspost */}
            <Link to="/">
              <button className="btn btn-primary">Read More.</button>
            </Link>
          </div>

          <div class="card bg-[#dc143c]/85 w-96 shadow-sm p-[2rem] mx-[1rem] my-[1rem] text-white ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-xl">Newsfeed title</h2>
              <p>News feed description.</p>
            </div>
            {/* set career cat=rtegory to link to for each newspost */}
            <Link to="/">
              <button className="btn btn-primary">Read More.</button>
            </Link>
          </div>
          <div class="card bg-[#dc143c]/85 w-96 shadow-sm p-[2rem] mx-[1rem] my-[1rem] text-white ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-xl">Newsfeed title</h2>
              <p>News feed description.</p>
            </div>
            {/* set career cat=rtegory to link to for each newspost */}
            <Link to="/">
              <button className="btn btn-primary">Read More.</button>
            </Link>
          </div>
          <div class="card bg-[#dc143c]/85 w-96 shadow-sm p-[2rem] mx-[1rem] my-[1rem] text-white ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-xl">Newsfeed title</h2>
              <p>News feed description.</p>
            </div>
            {/* set career cat=rtegory to link to for each newspost */}
            <Link to="/">
              <button className="btn btn-primary">Read More.</button>
            </Link>
          </div>
        </div>

        {/* Skills */}

        <div>
          <div className="card  text-primary-content w-[70%] ml-[15%] my-[2rem] text-center p-[2rem]">
            <h1 className="card-title text-center justify-center  text-[2rem] ">
              In-demand Skills.
            </h1>
            <p class="text-xl">
              Upskill in business analytics, health care, graphic design,
              management and more
            </p>

            <div className="card-body">
              <div className="card bg-base-100 image-full shadow-sm justify-center ">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                {/* Skills buttons  */}
                <div className="card-body p-[3rem]">
                  <div class="flex flex wrap gap-[1rem] justify-center">
                    <Link to="/">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Computer
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Sales
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Caregiving
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Law
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="btn btn-ghost border-inherit text-xl">
                        Nutrition
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MantineProvider>
      <Footer />
    </>
  );
}

export default Career;
