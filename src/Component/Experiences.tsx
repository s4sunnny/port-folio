export function Experiences() {
  return (
    <>
      {/* <div className="h-full mx-auto py-5">
        <div className="flex mx-auto text-white justify-between w-5/6 ">
          <section className="rounded-md p-1 flex justify-center max-w-3xl bg-white text-center shadow-lg md:p-12 md:text-left">
            <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
              <div className="bg-white md:flex md:flex-row">
                <div className="bg-white mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                    className="rounded-full shadow-md dark:shadow-black/30"
                    alt="woman avatar"
                  />
                </div>
                <div className="bg-white md:ml-6">
                  <p className="mb-6 bg-white font-light text-black">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                    quam sapiente molestiae numquam quas, voluptates omnis nulla
                    ea odio quia similique corrupti magnam.
                  </p>
                  <p className="bg-white mb-2 text-xl font-semibold text-black">
                    Anna Smith
                  </p>
                  <p className="bg-white mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                    Product manager
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}
      <div className="h-full mx-auto">
        <div className="before:absolute md:before:mx-auto md:before:translate-x-0 before:h-0.5 before:w-full before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <h1 className="flex items-center justify-center text-xl text-white shadow ">
            Experience
          </h1>
        </div>
        <br />
        <div className="flex mx-auto text-white justify-between w-5/6 ">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="group-[.is-active]:bg-emerald-500 text-slate-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    className="text-black"
                    fill-rule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white rounded border border-slate-200 shadow">
                {/* <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-slate-900">Order Placed</div>
                  <time className="font-caveat font-medium text-indigo-500">
                    08/06/2023
                  </time>
                </div>
                <div className="text-slate-500">
                  Pretium lectus quam id leo. Urna et pharetra aliquam
                  vestibulum morbi blandit cursus risus.
                </div> */}
                {/* <section className="rounded-md p-1 flex justify-center max-w-3xl bg-white text-center shadow-lg md:p-12 md:text-left"> */}
                <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                  <div className="bg-white md:flex md:flex-row">
                    <div className="bg-white mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                      <img
                        src="src\assets\aplhaspecLogo.png"
                        className="shadow-md dark:shadow-black/30"
                        alt="Company's logo"
                      />
                    </div>
                    <div className="bg-white md:ml-6">
                      <p className="bg-white mb-0 text-lg text-black font-bold">
                        Company:&nbsp;
                        <span className="bg-white no-underline hover:underline text-black font-semibold">
                          <a
                            className="bg-white font-normal"
                            href="https://alphaspec.in/"
                            target="_blank"
                          >
                            Alphaspec Consulting LLP
                          </a>
                        </span>
                      </p>
                      <p className="bg-white mb-1 text-black font-bold">
                        Designation:&nbsp;
                        <span className="bg-white text-black font-normal text-neutral-500 dark:text-neutral-400">
                          Full stack developer
                        </span>
                      </p>
                      <p className="mb-6 bg-white">
                        <span className="bg-white text-black font-semibold">
                          Role:&nbsp;
                        </span>
                        <span className="bg-white text-neutral-500 dark:text-neutral-400  ">
                          Design, code, test, debug, maintain, and document
                          programs primarily in Java (Backend) and various
                          Front-end tech.
                        </span>
                      </p>
                      <p className="text-xs bg-white mb-0 text-black text-neutral-500 dark:text-neutral-400">
                        From:&nbsp;
                        <span className="bg-white text-black font-semibold text-neutral-500 dark:text-neutral-400">
                          10th march 2021
                        </span>
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp; &nbsp;&nbsp; Till:&nbsp;
                        <span className="bg-white text-black font-semibold text-neutral-500 dark:text-neutral-400">
                          29th may 2023
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* </section> */}
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg
                  className="group-[.is-active]:bg-emerald-500 text-slate-500 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="10"
                >
                  <path
                    className="text-black"
                    fill-rule="nonzero"
                    d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                  />
                </svg>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-1 rounded border border-slate-200 shadow">
                <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                  <div className="bg-white md:flex md:flex-row">
                    <div className="bg-white mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                      <img
                        src="https://bahwancybertek.com/home/web/images/logo.png"
                        className="bg-white h-xl shadow-md dark:shadow-black/30"
                        alt="woman avatar"
                      />
                    </div>
                    <div className="bg-white md:ml-6">
                      <p className="bg-white mb-0 text-lg text-black font-bold">
                        Company:&nbsp;
                        <span className="bg-white no-underline hover:underline text-black font-semibold">
                          <a
                            className="bg-white font-normal"
                            href="https://bahwancybertek.com/"
                            target="_blank"
                          >
                            Bahwan CyberTek
                          </a>
                        </span>
                      </p>
                      <p className="bg-white mb-1 text-black font-bold">
                        Designation:&nbsp;
                        <span className="bg-white text-black font-normal text-neutral-500 dark:text-neutral-400">
                          Software Developer
                        </span>
                      </p>
                      <p className="mb-6 bg-white">
                        <span className="bg-white text-black font-semibold">
                          Role:&nbsp;
                        </span>
                        <span className="bg-white text-neutral-500 dark:text-neutral-400  ">
                          Design, code, test, debug, maintain, and document
                          programs primarily in Java (Backend) and various
                          Front-end tech.
                        </span>
                      </p>
                      <p className="text-xs bg-white mb-0 text-black text-neutral-500 dark:text-neutral-400">
                        From:&nbsp;
                        <span className="bg-white text-black font-semibold text-neutral-500 dark:text-neutral-400">
                          30th may 2023
                        </span>
                        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        &nbsp; &nbsp;&nbsp; Till:&nbsp;
                        <span className="bg-white text-black font-semibold text-neutral-500 dark:text-neutral-400">
                          Present
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
