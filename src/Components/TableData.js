import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const TableData = ({datas}) => {
   const {serviceName,retting,comment,_id} = datas
   const [users, setUsers] = useState([]);
   console.warn(users)


   const deleteUser = (id) => {
    fetch(`https://assignment-11-backend-rejwan-ahamed.vercel.app/user/comment/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.error("Data deleted");
        }
      });
    const remaining = users.filter((user) => user._id !== id);
    setUsers(remaining);
  };
    return (
      
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {serviceName}
                </th>
                <td class="py-4 px-6">{comment?.length>20? comment.slice(0,20)+'...': comment}</td>
                <td class="py-4 px-6 font-[600] text-orange-500">{retting}</td>
                <td class="py-4 px-6 text-blue-600  font-[600]">
                  <Link to={`/edit/${_id}`}>Edit</Link>
                </td>
                <td class="py-4 px-6 text-red-600 font-[600]">
                <button onClick={() => deleteUser(datas._id)}>X</button>
                </td>
              </tr>
        
    );
};

export default TableData;