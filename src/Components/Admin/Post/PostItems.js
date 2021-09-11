import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";


const PostItems = ({handlePostEdit, post, handlePostDelete, id}) => {
    console.log(post);
  return (
    <tr>
      <td class="id">{id}</td>
      <td>{post.title}</td>
      <td>{post.category}</td>
      <td>{post.date}</td>
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
