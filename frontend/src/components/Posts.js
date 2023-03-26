import "../index.css";

export const Posts = () => {
  return (
    <>
      <section className="p-2.5 flex gap-2">
        <div className="p-4 w-5/6  flex-initial">
          <section>
            <img
              src="https://images.pexels.com/photos/11260104/pexels-photo-11260104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="post-1"
              className="w-full h-36 object-fill object-center"
            />
            <div className="mt-2 mb-11">
              <h5 className="font-bold text-xl mb-2">
                Lorem ipsum dolor sit amet.
              </h5>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
                fugiat debitis corporis asperiores voluptatem error recusandae
                aperiam odio numquam vitae consequatur officia molestias
                cupiditate? Totam nobis corrupti reiciendis consectetur natus?
                <span className="font-bold">
                  <a href="#">READ MORE...</a>
                </span>
              </p>
            </div>
          </section>
          <section className="flex mb-10">
            <img
              src="https://images.pexels.com/photos/801885/pexels-photo-801885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="post-2"
              className="w-[50%] h-[13.90rem] mr-8 object-cover object-center"
            />
            <div>
              <h5 className="font-bold mb-5">Lorem ipsum dolor sit amet.</h5>
              <p className="mb-11 leading-tight text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quibusdam impedit sunt fugiat consequuntur, dolore et sequi
                esse, explicabo eveniet quis, in nam sint nisi cumque rem! Iste,
                laudantium! Laboriosam neque consequatur magnam eos, voluptates
                asperiores aperiam et perferendis alias ex.
              </p>

              <a
                href="#"
                className="bg-black text-white px-6 py-1 rounded-sm font-semibold"
              >
                Read More...
              </a>
            </div>
          </section>
          <section className="flex mb-10">
            <img
              src="https://images.pexels.com/photos/769525/pexels-photo-769525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="post-3"
              className="w-[30%] h-54 mr-8 object-cover object-center"
            />
            <div>
              <h5 className="font-bold mb-5">Lorem ipsum dolor sit amet.</h5>
              <p className="mb-6 leading-tight text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                quas aliquid consequuntur cupiditate est laborum ab autem
                aliquam? Blanditiis ducimus perspiciatis soluta natus quam
                corporis. Et blanditiis maiores ex dolores ducimus excepturi
                nulla sint, quo sunt, molestiae, minima impedit mollitia?
              </p>
              <a
                href="#"
                className="bg-black text-white px-6 py-1 rounded-sm font-semibold"
              >
                Read More...
              </a>
            </div>
          </section>
        </div>
        <aside className="flex flex-col h-1/2 ml-5 w-[40%] text-sm mr-2 p-6 bg-orange-200">
          <h3 className="mb-4 text-base text-center font-bold">RECENT POSTS</h3>
          <p className="mb-3 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
            modi!
          </p>
          <hr className="border-t border-black" />
          <p className="mt-3 mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
            quo.
          </p>
          <hr className="border-t border-black" />
          <p className="mt-3 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            assumenda!
          </p>
          <hr className="border-t border-black" />
          <p className="mt-3 mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            at.
          </p>
          <hr className="border-t border-black" />
          <p className="mt-3 mb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
            culpa.
          </p>
        </aside>
      </section>
      <div className="text-center pb-12 mb-6 shadow-xl shadow-black/50">
        <a
          href="#"
          className="bg-black text-white py-3 px-32 w-full rounded-sm font-semibold"
        >
          LOAD MORE
        </a>
      </div>
    </>
  );
};
