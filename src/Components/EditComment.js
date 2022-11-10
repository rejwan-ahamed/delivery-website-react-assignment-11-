import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/MainContext";
import UseTitle from "./Title";


const EditComment = () => {
  UseTitle('edit comment')
  const userData = useLoaderData();
  const {user } = useContext(AuthContext);
  const [users, setUser] = useState(userData);
  console.log(user)
  const fromSubmit = (e) => {

    e.preventDefault();
    console.log(user)
    fetch(`https://assignment-11-backend-rejwan-ahamed.vercel.app/UserCommentUpdate/${userData[0]._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("data updated successfully");
          e.target.reset();
        }
      });
  };

  const afterBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newUser = { ...users };
    newUser[name] = value;
    setUser(newUser);
  };

  return (
    <div className="main-comment-area px-6 lg:px-20 xl:px-40 my-20">
      <div className="upper-part-comment-section block sm:flex gap-4">
        <img
          class="w-10 h-10 rounded-full"
          src={user.photoURL}
          alt="Rounded avatar"
        />
        <form className="w-full" onSubmit={fromSubmit}>
          <div>
            <label
              for="first_name"
              class="mt-6 sm:mt-0 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Retting
            </label>
            <input
              onBlur={afterBlur}
              defaultValue={userData[0].retting}
              name='retting'
              type="number"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2.5 mb-4 w-full sm:w-[20rem]"
              placeholder="1 to 5"
              required
            />
          </div>
          <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
              <label for="comment" className="sr-only">
                Your comment
              </label>
              <textarea
              name="comment"
                onBlur={afterBlur}
                defaultValue={userData[0].comment}
                id="comment"
                rows="4"
                className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-orange-500 rounded-lg focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-900 hover:bg-orange-800"
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
    </div>
  );
};

export default EditComment;
