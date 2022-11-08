import React from "react";
import { Link } from "react-router-dom";
import UseTitle from "./Title";

const Myreviews = () => {
  UseTitle('Your Review')
  return (
    <div>
      <div className="user-all-reviews lg:px-20 xl:px-40 py-20">
        <div class="overflow-x-auto relative border sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 font-general">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Service name
                </th>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Main review
                </th>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Retting
                </th>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Edit
                </th>
                <th scope="col" class="py-3 px-6 font-[600]">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6 font-[600] text-orange-500">Laptop</td>
                <td class="py-4 px-6 text-blue-600  font-[600]">
                  <Link to='/edit'>Edit</Link>
                </td>
                <td class="py-4 px-6 text-red-600 font-[600]">
                  <Link>Delete</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Myreviews;
