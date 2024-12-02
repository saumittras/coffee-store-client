import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // video 5 send data to server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "A Coffee added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-center text-5xl pb-4">Add a coffee</h2>
      <p className="text-center w-10/12 mx-auto pb-4">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee} className="gap-y-2">
        <div className="flex gap-4 pb-2">
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow "
                placeholder="Enter Coffee Name"
                name="name"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Available Quantity
              <input
                type="text"
                className="grow"
                placeholder="Available Quantity"
                name="quantity"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-4 pb-2">
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Supplier
              <input
                type="text"
                className="grow "
                placeholder="Enter Coffee Supplier"
                name="supplier"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Taste
              <input
                type="text"
                className="grow"
                placeholder="Enter Coffee taste"
                name="taste"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-4 pb-2">
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Category
              <input
                type="text"
                className="grow "
                placeholder="Enter Coffee Category"
                name="category"
              />
            </label>
          </div>

          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Details
              <input
                type="text"
                className="grow"
                placeholder="Enter Coffee Details"
                name="details"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-4 pb-2">
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Photo
              <input
                type="text"
                className="grow "
                placeholder="Enter Coffee URL"
                name="photo"
              />
            </label>
          </div>
        </div>
        <div className="w-full">
          <button type="submit" className="btn w-full">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
