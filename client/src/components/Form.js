import { useState } from "react";
import axios from "axios";

export default function Form({ setShortUrl }) {
  const [url, setUrl] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!url) return alert("Please enter a valid url!");

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/create", { url }, config);
    setShortUrl(data?.shortUrl);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full gap-3 md:justify-start md:flex-row"
    >
      <input
        type="url"
        name="url"
        id="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter or Paste URL here"
        className="flex-grow w-full px-4 py-2 mb-1 sm:mb-0 text-sm md:text-base text-black transition ease-in-out transform rounded-none rounded-tl-2xl rounded-br-2xl duration-500 lg:w-auto bg-gray-100 focus:outline-none border-transparent border-2 focus:border-red-500 focus:bg-white"
      />

      <button className="flex items-center justify-center w-6/12 md:w-auto px-6 py-2 md:py-3 mt-auto font-medium text-white transition duration-300 ease-in-out transform bg-red-600 rounded-none rounded-tl-2xl rounded-br-2xl hover:bg-red-700 focus:shadow-outline focus:outline-none">
        Shorten
      </button>
    </form>
  );
}
