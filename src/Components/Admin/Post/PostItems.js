import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const PostItems = ({handlePostEdit, post, handlePostDelete, id}) => {
    console.log(post);
  return (
    <tr>
      <td class="id">{id}</td>
      <td>{post.title}</td>
      <td>{post.category}</td>
      <td>08 Sep, 2021</td>
      <td>Admin</td>
      <td class="edit">
        <button
          className="btn-class"
          onClick={(e) => handlePostEdit(post._id)}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </td>
      <td class="delete">
        <button
          className="btn-class"
          onClick={(e) => handlePostDelete(post._id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default PostItems;
