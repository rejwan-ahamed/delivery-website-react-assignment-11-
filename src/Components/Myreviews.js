import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/MainContext";
import TableData from "./TableData";
import UseTitle from "./Title";

const Myreviews = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  UseTitle("Your Review");
  useEffect(() => {
    fetch(`https://assignment-11-backend-rejwan-ahamed.vercel.app/userComment/${user.email}`)
      .then((res) => res.json())
      .then((result) => setReview(result));
  }, []);
  console.log(review);
  return (
    <div>
      {review.length >0 ? (
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
                {review.map((data) => (
                  <TableData key={data._id} datas={data}></TableData>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1 className="font-general text-center flex w-screen h-screen justify-center items-center font-[600] text-2xl">You have no review</h1>
      )}
    </div>
  );
};

export default Myreviews;
