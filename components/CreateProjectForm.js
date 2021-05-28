import axios from 'axios';
import { parseCookies } from 'nookies';
import { useState } from 'react';

export default function ContactForm() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [branding, setBranding] = useState('');
  const [category, setCategory] = useState('design');
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const { jwt } = parseCookies();

  // console.log(title, slug, branding, category, thumbnailImage, image, description);

  const createProject = async (e) => {
    e.preventDefault();
    const payload = {
      title: title,
      slug: slug,
      branding: branding,
      category: category,
      thumbnailImage: `files.${thumbnailImage}`,
      image: `files.${image}`,
      description: description,
    };

    const formdata = await new FormData();
    await formdata.append('files', image);
    console.log(formdata);
    const data = await axios
      .post('http://localhost:1337/project-pages', payload, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then(function (res) {
        console.log('success!');
        console.log(res);
      })
      .catch(function (err) {
        console.log('Error', err.message);
        console.log('Error', err.response);
      });
    console.log(data);
  };
  return (
    <form onSubmit={(e) => createProject(e)} id="form">
      {/* Title / Slug */}
      <div className="mb-4 flex justify-start">
        <div className="w-full">
          <label className="block text-gray text-sm mb-2 md:text-lg" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border border-gray w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
            id="title"
            type="text"
            placeholder="Project Title 1"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label className="block text-gray text-sm mb-2 md:text-lg" htmlFor="slug">
            Slug
          </label>
          <input
            className="shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
            id="slug"
            type="text"
            placeholder="project-title-1"
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>
      </div>
      {/* Branding / Category */}
      <div className="mb-4 flex justify-start">
        <div className="w-full">
          <label className="block text-gray text-sm mb-2 md:text-lg" htmlFor="branding">
            Branding
          </label>
          <input
            className="shadow appearance-none border border-gray w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
            id="branding"
            type="text"
            placeholder="Branding"
            onChange={(e) => setBranding(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label className="block text-gray text-sm mb-2 md:text-lg">Category</label>
          <select
            className="text-xl form-select shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Design</option>
            <option>Illustration</option>
            <option>Animation</option>
          </select>
        </div>
        {/* Images */}
      </div>
      <div className="mb-4 flex justify-start">
        <div className="w-full">
          <label
            className="block text-gray text-sm mb-2 md:text-lg"
            htmlFor="thumbnailImage"
          >
            Thumbnail Image
          </label>
          <input
            className="shadow appearance-none border border-gray w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
            id="thumbnailImage"
            type="file"
            onChange={(e) => setThumbnailImage(e.target.files[0])}
          />
        </div>
        <div className="w-full">
          <label className="block text-gray text-sm mb-2 md:text-lg" htmlFor="image">
            Image
          </label>
          <input
            className="shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
            id="image"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray text-sm mb-2 md:text-lg" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline xl:border-2 xl:focus:bg-pink xl:focus:text-white"
          id="message"
          rows="4"
          placeholder="Describe the project here"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        className="border border-gray hover:bg-pink hover:text-white text-gray w-full py-2 px-4 focus:outline-none focus:shadow-outline xl:border-2"
        type="submit"
      >
        Create This Project
      </button>
    </form>
  );
}
