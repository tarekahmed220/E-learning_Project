
import ButtonComponent from "./Components/buttonComponent";
import "./home.css";

export default function Home() {
  const items = Array.from({ length: 6 });

  return (
    <div className="h-screen">
      <div className="">
        {/* header */}
        <header className="layout py-16">
          <div className="w-1/3 text-center m-auto">
            <h2 className="text-4xl font-bold text-[--colorOrange]">
              Find Your Perfect Learn Platform
            </h2>
            <p className="my-7">
              Our mission is to help people to find the best course online and
              learn with export anytime, anywhere.
            </p>
            <div className="flex justify-center gap-5">
              <ButtonComponent
                nameBtn="Join for free"
                bg="--colorOrange"
                colorText="#ffffff"
              ></ButtonComponent>
              <ButtonComponent nameBtn="Learn more"></ButtonComponent>
            </div>
          </div>
        </header>

        {/* section details */}
        <section className="py-7 bg-[--colorBgNumbers]">
          <div className="parent w-3/4 m-auto px-10 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[--colorOrange] font-bold text-2xl">
                10K+
              </span>
              <span>TOTAL COURSES</span>
            </div>
            <span className="w-px h-14 bg-[--colorOrange]"></span>
            <div className="flex flex-col">
              <span className="text-[--colorOrange] font-bold text-2xl">
                500k+
              </span>
              <span>EXPERT MENTORS</span>
            </div>
            <span className="w-px h-14 bg-[--colorOrange]"></span>
            <div className="flex flex-col">
              <span className="text-[--colorOrange] font-bold text-2xl">
                300K+
              </span>
              <span>STUDENTS GLOBALLY</span>
            </div>
            <span className="w-px h-14 bg-[--colorOrange]"></span>
            <div className="flex flex-col">
              <span className="text-[--colorOrange] font-bold text-2xl">
                10 Min
              </span>
              <span>AVEREGE PER CLASS</span>
            </div>
          </div>
        </section>

        {/* section courses details */}
        <section className="pt-10 pb-8 bg-[#FAFAFC]">
          <div className="text-center m-auto px-[80px]">
            <p>Courses Details</p>
            <h3 className="text-3xl font-bold py-4">Explore Our Categories</h3>
            <p className="w-1/2 m-auto pb-10">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem is taht it has a more-or-less normal
              distribution of letters, as opposed to using{" "}
              <q>Content here, content here</q>, making it look like readable
              English.
            </p>
            <div className="grid grid-cols-3 gap-3 m-auto">
              {items.map((_, index) => (
                <div
                  key={index}
                  className="w-[90%] bg-white p-3 flex gap-3 items-center"
                >
                  <img
                    className="w-14"
                    src="../../../public/team-03.jpg"
                    alt=""
                  />
                  <div className="w-2/3 text-start">
                    <p className="font-bold">Design & Development</p>
                    <span className="text-[#C0C0C0] text-[14px]">
                      250+ course availble
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* section all categories */}
        <section className="pt-10 pb-8 bg-[#FAFAFC]">
          <div className="text-center m-auto px-[80px]">
            <ButtonComponent nameBtn="All categories"></ButtonComponent>
            <div className="text mt-16 mb-12">
              <p>Trusted by 56000+ Companies</p>
              <h3 className="text-3xl my-5 font-bold">Our Trusted Companies</h3>
            </div>
            <div className="flex justify-between">
              <img className="w-16" src="../../../public/team-03.jpg" alt="" />
              <img className="w-16" src="../../../public/team-03.jpg" alt="" />
              <img className="w-16" src="../../../public/team-03.jpg" alt="" />
              <img className="w-16" src="../../../public/team-03.jpg" alt="" />
              <img className="w-16" src="../../../public/team-03.jpg" alt="" />
            </div>
          </div>
        </section>

        {/* section special courses */}
        <section className="pt-10 pb-8 bg-[#FAFAFC]">
          <div className="text-center m-auto px-[80px]">
            <div className="text">
              <h2 className="text-3xl mb-5 font-bold">
                Special Course For You
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered aiteration in some form, by
                injected humor, or randomized words which dont look even
                slightly believable. if you are going to use a pasage of Lorem
                Ipsum, you nneed to be sure there isnt anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
            <div className="courses my-16 grid grid-cols-4 gap-6">
              {items.map((_, index) => (
                <div
                  key={index}
                  className="course text-left bg-white p-3 mb-5 rounded"
                >
                  <figure className="relative">
                    <img
                      className="rounded"
                      src="../../../public/team-03.jpg"
                      alt=""
                    />
                    <figcaption className="absolute bottom-[-14px] left-1/2 translate-x-[-50%] w-[fit-content] bg-white font-bold px-2 rounded border-2 border-[--colorOrange]">
                      Graphic Design
                    </figcaption>
                  </figure>
                  <div>
                    <h4 className="font-bold text-2xl mt-4 mb-2">
                      Fundamentals of Graphic Design
                    </h4>
                    <p className="text-[#767676]">By Alex Justin Batler</p>
                    <span className="text-[#C0C0C0]">
                      - Oxford Unviersity Of Florida
                    </span>
                    <div className="flex justify-between mt-3">
                      <div className="flex gap-2">
                        <span className="block w-[25px] h-[25px] bg-[#E8F7FE] rounded-full"></span>
                        <span>500K+</span>
                      </div>

                      <div className="flex gap-2">
                        <span className="block w-[25px] h-[25px] bg-[#FDF2D6] rounded-full"></span>
                        <span>4.8</span>
                      </div>

                      <div className="flex gap-2">
                        <span className="block w-[25px] h-[25px] bg-[#DFF2F0] rounded-full"></span>
                        <span>$101.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ButtonComponent
              fontText="bold"
              colorText="--colorOrange"
              nameBtn="All Courses"
            ></ButtonComponent>
          </div>
        </section>

        {/* section about us */}
        <section className="pt-10 pb-8 bg-[#FAFAFC]">
          <div className="px-[80px] flex justify-between items-center gap-16">
            <figure className="relative w-[50%] h-[100%]">
              <img
                className="rounded w-[60%]"
                src="../../../public/about.jpg"
                alt=""
              />
              <img
                className="absolute rounded w-[30%] top-1/2 translate-y-[-50%] right-[130px]"
                src="../../../public/services.jpg"
                alt=""
              />
            </figure>
            <div className="w-1/2 py-10">
              <p>About us</p>
              <h3 className="text-3xl font-bold my-5">
                We Are Maximize Your Learning Growth
              </h3>
              <p className="text-[#7B7A7F] my-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atuqe corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <div className="grid grid-cols-2">
                <div className="flex gap-4">
                  <span></span>
                  <span>Training Services</span>
                </div>
                <div className="flex gap-4">
                  <span></span>
                  <span>Big Experience</span>
                </div>
                <div className="flex gap-4">
                  <span></span>
                  <span>Expert Trainer</span>
                </div>
                <div className="flex gap-4 mb-8">
                  <span></span>
                  <span>Lifetime Access</span>
                </div>
              </div>
              <ButtonComponent
                bg="--colorOrange"
                colorText="--colorWhite"
                nameBtn="Explore More"
              ></ButtonComponent>
            </div>
          </div>
        </section>

        {/* section feedback */}
        <section className="pt-10 pb-10 bg-[#FAF7F2]">
          <div className="px-[80px]">
            <div className="text-center my-10">
              <p className="my-4">Feedback</p>
              <h3 className="text-3xl font-bold">Loved by Our Students</h3>
            </div>
            <div className="grid grid-cols-2 gap-8 justify-center items-center">
              <div>
                <p className="text-2xl">Brooklyn Simmons</p>
                <span className="text-[#C0C0C0]">Graphic Designer</span>
                <ul></ul>
                <p>
                  On the other hand, we denounce with righteous and dislike men
                  who are so beguild and demoralized by the charms of pleasure
                  of the moment, so blinded by desire, that they cannot foresee
                  the pain and trouble that are bound to ensue; and equal blame
                  belongs to those who
                </p>
              </div>
              <div>
                <video
                  controls
                  className=""
                  src="../../../public/awesome-video.mp4"
                ></video>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 my-8">
              <div className="w-[90%] bg-white p-3 flex gap-3 items-center rounded">
                <img
                  className="w-14 rounded"
                  src="../../../public/me.jpg"
                  alt=""
                />
                <div className="w-2/3 text-start">
                  <p className="font-bold">Ahmed Tarek</p>
                  <span className="text-[#C0C0C0] text-[14px]">Full Stack</span>
                </div>
              </div>
              <div className="w-[90%] bg-white p-3 flex gap-3 items-center">
                <img
                  className="w-14 rounded"
                  src="../../../public/me.jpg"
                  alt=""
                />
                <div className="w-2/3 text-start">
                  <p className="font-bold">Tarek Ahmed</p>
                  <span className="text-[#C0C0C0] text-[14px]">Full Stack</span>
                </div>
              </div>
              <div className="w-[90%] bg-white p-3 flex gap-3 items-center">
                <img
                  className="w-14 rounded"
                  src="../../../public/me.jpg"
                  alt=""
                />
                <div className="w-2/3 text-start">
                  <p className="font-bold">Mohamed Tarek</p>
                  <span className="text-[#C0C0C0] text-[14px]">Full Stack</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section Trainers */}
        <section className="pt-10 pb-8 bg-[#FAFAFC]">
          <div className="px-[80px] text-center">
            <p>Trainers</p>
            <h2 className="text-3xl font-bold">
              Our Professional Export Mentor
            </h2>
            <p className="text-[#7B7A7F] my-5 m-auto w-1/2">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atuqe corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
            <div className="grid grid-cols-4 justify-items-center gap-7 my-12">
              <img className="rounded-2xl" src="../../../public/me.jpg" alt="" />
              <img className="rounded-2xl" src="../../../public/me.jpg" alt="" />
              <img className="rounded-2xl" src="../../../public/me.jpg" alt="" />
            </div>
            <div className="my-8">
              <ButtonComponent
                nameBtn="All Expert Mentor"
                bg="--colorOrange"
                colorText="--colorWhite"
              ></ButtonComponent>
            </div>
          </div>
        </section>

        {/* section subscribe */}
        <section className="pt-10 pb-8 bg-[#FAFAFC]">
          <div className="px-[80px] text-center">
            <p>Subscribe for free</p>
            <h2 className="text-3xl font-bold my-8">Subscribe Newsletter</h2>
            <p className="my-10 w-1/2 m-auto">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that has a more-or-less normal
              distribution of letters, as oppposed to using Content here, making
              it look like readable English.
            </p>
            <div className="flex items-center justify-center my-14">
              <input type="email" className="rounded p-2" placeholder="Enter email address" />
              <ButtonComponent nameBtn="Subscribe" bg="--colorOrange"></ButtonComponent>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
