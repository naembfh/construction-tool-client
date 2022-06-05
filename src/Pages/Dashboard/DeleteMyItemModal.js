import React from 'react';

const DeleteMyItemModal = ({myItem,deleteOrder}) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

    <h3 class="font-bold text-lg">{myItem.name}</h3>
    <p class="py-4">Are You sure you want to delete??</p>
    <div class="modal-action">
    {/* <button onClick={() => deleteOrder(myItem._id, myItem)} className='btn btn-sm btn-primary'>Delete</button> */}
      <label for="my-modal-6" onClick={() => deleteOrder(myItem._id, myItem)} className='btn btn-sm btn-primary'>Delete</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteMyItemModal;