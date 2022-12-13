import { useState } from "react";
import main from "../assets/img/main.jpg";
import Form from "../components/Form";
import IntroSection from "../components/IntroSection";
import ShortUrlSection from "../components/ShortUrlSection";

export default function HomePage() {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <section>
      <div className="container flex flex-col items-center px-5 pt-5 md:py-16 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start w-full px-2 md:px-0 pt-5 md:pt-0 mb-5 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
          <IntroSection />

          {/* Form */}
          <Form setShortUrl={setShortUrl} />

          {/* Shortened url */}
          {shortUrl && <ShortUrlSection shortUrl={shortUrl} />}
        </div>

        {/* Image */}
        <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2 order-first md:order-last">
          <img className="object-cover object-center" alt="hero" src={main} />
        </div>
      </div>
    </section>
  );
}
