import React from "react";
import { Link } from "react-router-dom";


const Card = () => {
  return (
    <div>
      <div class=" bg-white rounded-lg border w-[20rem] h-[33rem]">
        <Link href="#">
          <img
            class="rounded-t-lg w-full"
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </Link>
        <div class="p-5">
          <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </Link>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          {/* pricing */}
          <h2 className="font-general font-[600] text-black text-6xl mb-4 mt-4">
            $450
          </h2>
          <Link
            to='/service'
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
