export default function ShortUrlSection({ shortUrl }) {
  return (
    <div className="mt-4 md:mt-5">
      <h1 className="mb-3 text-2xl font-normal tracking-tighter text-black">
        Shortened Url
      </h1>

      <div className="flex w-full bg-gray-100 px-5 py-1 rounded-full">
        <a
          href={shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm md:text-base hover:underline"
        >
          {shortUrl}
        </a>
      </div>
    </div>
  );
}
