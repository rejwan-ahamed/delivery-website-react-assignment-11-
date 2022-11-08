import React from "react";
import UseTitle from "./Title";
const Service = () => {
  UseTitle('Service')
  window.scroll(0, 0);
  return (
    <div>
      <div className="course-main-part px-4 mt-20 mb-20 block lg:px-20 xl:px-40 lg:flex justify-center items-start lg:gap-10 ">
        <div className="course-left w-full lg:w-[50%]">
          <img
            className="rounded-md mb-10 w-[100%] lg:w-[100%] lg:mb-0 "
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            srcset=""
          />
        </div>

        {/* course name */}
        <div className="course-right w-[100%] lg:w-[50%]">
          <h1 className="text-3xl font-general font-[600] mb-4">Test</h1>
          <p className="font-general font-medium mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            quidem rerum sapiente! Non eius iste doloremque similique libero
            sequi voluptate atque nesciunt velit fugit. Dolor cupiditate optio
            neque nostrum reprehenderit dolorem impedit. Accusamus enim tempore
            deleniti molestias voluptatibus, vero veniam.
          </p>
          <h1 className="font-general text-6xl font-[600] text-orange-500">
            $450
          </h1>
        </div>
      </div>
      {/* comment section start here */}
      <div className="main-comment-area lg:px-20 xl:px-40">
        <div className="upper-part-comment-section flex gap-4">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Rounded avatar"
          />
          <form className="w-full">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Retting</label>
            <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mb-4 w-[20rem]" placeholder="1 to 5" required/>
        </div>
            <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a comment..."
                  required=""
                ></textarea>
              </div>
              <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Post review
                </button>
                <div className="flex pl-0 space-x-1 sm:pl-2">
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* all reviews sections here */}
        <div className="all-reviews mb-20 mt-10">
          <div className="main-review border-b">
            {/* user details */}
            <div className="user-details mb-4">
              <div className="main-details flex items-start gap-2">
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Rounded avatar"
                />
                <div className="more-details font-general font-[500]">
                  <h1>examle@gmail.com</h1>
                  <p>20.03.2022</p>
                </div>
              </div>
              <div className="main-review pl-12 font-general font-[500] mt-2">
                <h1 className="font-general text-3xl font-[600] py-2 text-orange-500">5 <span className="text-gray-300 text-2xl">out of 5</span> </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur maxime repellat a omnis facilis minima
                  voluptatibus, necessitatibus cupiditate ullam odit eveniet
                  voluptas perferendis? Perspiciatis, explicabo veritatis. Quas
                  repudiandae ullam illum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
