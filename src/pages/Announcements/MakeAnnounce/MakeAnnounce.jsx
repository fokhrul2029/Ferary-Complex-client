import { useState } from "react";

function MakeAnnounce() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const announce = { title, description };
    console.log(announce);
  };
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="card w-full md:w-[450px] bg-white shadow-xl p-8">
        <h1 className="text-center font-semibold text-2xl">
          Make an Announcement
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter the title"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Enter the description"
              className="textarea textarea-bordered w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MakeAnnounce;
