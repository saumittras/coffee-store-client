import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handaleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // video 5 send data to server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "A Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#f4f3f0] p-24">
      <h1> update coffee Name: {name}</h1>
      <form onSubmit={handaleUpdateCoffee} className="gap-y-2">
        <div className="flex gap-4 pb-2">
          <div className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow "
                placeholder="Enter Coffee Name"
                name="name"
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
              />
            </label>
          </div>
        </div>
        <div className="w-full">
          <button type="submit" className="btn w-full">
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
