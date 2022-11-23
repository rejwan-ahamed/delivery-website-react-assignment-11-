import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/MainContext";
import TableData from "./TableData";
import UseTitle from "./Title";

const Myreviews = () => {
  // const [commentId,setCommentID] = useState()
  
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  UseTitle("Your Review");

  const { data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:5000/userComment/${user.email}`, {
        headers: {
          authorization: localStorage.getItem("token"),
          test: "Test token",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setReview(result);
          console.warn(result);
        }),
  });

  const userCommentDelete = (id) => {
    fetch(`http://localhost:5000/user/comment/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.error("Data deleted");
          refetch()
        }
      });
  };
  console.log(review);
  return (
    <div>
      {review.length > 0 ? (
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
                  <TableData
                    key={data._id}
                    datas={data}
                    deleteComment={userCommentDelete}
                  ></TableData>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1 className="font-general text-center flex w-screen h-screen justify-center items-center font-[600] text-2xl">
          You have no review
        </h1>
      )}
    </div>
  );
};

export default Myreviews;
