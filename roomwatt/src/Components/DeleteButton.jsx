import React from "react";

function DeleteButton({ onDelete }) {
return (
<button
onClick={onDelete}
className="bg-red-600 hover:bg-red-700 hover:ring-2 hover:ring-red-400 text-white font-bold px-3 py-1 rounded-lg shadow-md transition duration-200"
>
Delete
</button>
);
}

export default DeleteButton;