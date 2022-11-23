import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const TableData = ({datas,deleteComment}) => {
   const {serviceName,retting,comment,_id} = datas
   const [users, setUsers] = useState([]);
   console.warn(users)

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
                <button onClick={() => deleteComment(datas._id)}>X</button>
                </td>
              </tr>
        
    );
};

export default TableData;