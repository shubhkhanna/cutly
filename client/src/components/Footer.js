export default function Footer() {
  return (
    <div className="container md:-mt-10 mb-3 flex flex-row justify-center">
      <h5 className="text-base text-black text-center tracking-normal">
        Made with <span className="text-red-600 text-xl">♥</span> by{" "}
        <a
          href="https://shubhkhanna.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium cursor-pointer hover:text-blue-600"
        >
          Shubh Khanna
        </a>
      </h5>
    </div>
  );
}
