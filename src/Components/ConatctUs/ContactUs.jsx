export default function ContactUs() {

    return (
        <div className="layout pb-32">
            <section className="mb-32">
                <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%" height="480" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="container px-6 md:px-12">
                    <div
                        className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                <form>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="text"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                            id="exampleInput90" />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                            htmlFor="exampleInput90">Name
                                        </label>
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input
                                            type="email"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                            id="exampleInput91" />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                                            htmlFor="exampleInput91">Email address
                                        </label>
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <textarea
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                                            id="exampleFormControlTextarea1" rows="3"></textarea>
                                        <label htmlFor="exampleFormControlTextarea1"
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none">Message</label>
                                    </div>
                                    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                        <input
                                            className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                                            type="checkbox" value="" id="exampleCheck96" checked />
                                        <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck96">I
                                            agree to the terms and conditions.</label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.3)] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_15px_-5px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_15px_-5px_rgba(0,0,0,0.3)]">
                                        Send
                                    </button>
                                </form>
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto md:px-3 lg:w-7/12 lg:px-6">
                                <div className="flex flex-col md:flex-row lg:mb-12">
                                    <div className="relative mb-6 mr-12 flex flex-row items-start md:mb-0">
                                        <div className="absolute mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-white">
                                            <svg
                                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="w-3.5"
                                                role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"><path fill="currentColor"
                                                    d="M504 233.5l-8.5-8.6-216-216c-6.2-6.2-16.4-6.2-22.6 0l-216 216-8.5 8.6c-4.7 4.7-4.9 12.2-0.5 16.9 4.8 4.8 12.3 4.8 17.2 0l10.5-10.5V464c0 13.3 10.7 24 24 24h320c13.3 0 24-10.7 24-24V239.4l10.5 10.5c4.8 4.8 12.3 4.8 17.2 0 4.4-4.7 4.2-12.2-0.5-16.9z"></path></svg>
                                        </div>
                                        <div className="ml-12 pt-2">
                                            <p className="mb-4 text-lg font-semibold">Our Office</p>
                                            <p className="text-neutral-500">3979 8th St NW, Washington, D.C. 20011, USA</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-6 mr-12 flex flex-row items-start md:mb-0">
                                        <div className="absolute mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-white">
                                            <svg
                                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="w-3.5"
                                                role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"><path fill="currentColor"
                                                    d="M493.3 374.5l-90.7-33.4c-9.6-3.7-20.1 1.1-23.9 11.5l-33.1 85.6c-3.7 9.6 1.1 20.1 11.5 23.9l90.7 33.4c9.6 3.7 20.1-1.1 23.9-11.5l33.1-85.6c3.7-9.6-1.1-20.1-11.5-23.9zM132.7 55.1l-90.7 33.4c-9.6 3.7-15.2 14.3-11.5 23.9l33.1 85.6c3.7 9.6 14.3 15.2 23.9 11.5l90.7-33.4c9.6-3.7 15.2-14.3 11.5-23.9l-33.1-85.6c-3.7-9.6-14.3-15.2-23.9-11.5z"></path></svg>
                                        </div>
                                        <div className="ml-12 pt-2">
                                            <p className="mb-4 text-lg font-semibold">Phone</p>
                                            <p className="text-neutral-500">+1 234 567 890</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-6 mr-12 flex flex-row items-start md:mb-0">
                                        <div className="absolute mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-white">
                                            <svg
                                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="w-3.5"
                                                role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"><path fill="currentColor"
                                                    d="M502.3 190.8l-196.4 196.4c-6.2 6.2-16.4 6.2-22.6 0L108.3 190.8C102.1 184.6 102.1 174.4 108.3 168.2l196.4-196.4c6.2-6.2 16.4-6.2 22.6 0l196.4 196.4c6.2 6.2 6.2 16.4 0 22.6z"></path></svg>
                                        </div>
                                        <div className="ml-12 pt-2">
                                            <p className="mb-4 text-lg font-semibold">Email</p>
                                            <p className="text-neutral-500">info@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
