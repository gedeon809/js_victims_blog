import "../index.css";

export const MidBanner = () => {
  return (
    // WHATS YOUR MIND CONTAINER
    <section className="mb-6">
      <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-800 h-[22rem] w-full">
        <img
          src="https://images.pexels.com/photos/1591362/pexels-photo-1591362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="nice-image"
          className="w-full h-[22rem] object-cover absolute mix-blend-overlay"
        />

        <div className="p-36">
          <h1 className="text-white text-5xl font-bold text-center leading-snug">
            What's your story?
          </h1>
          <h2 className="text-white text-2xl font-light text-center">
            We will like to hear it, tell it to us
          </h2>
        </div>
      </div>
    </section>
  );
};
