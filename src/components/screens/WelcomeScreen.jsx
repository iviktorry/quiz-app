import bgImg from "../../assets/images/welcome-bg.jpg";

export default function WelcomeScreen() {
  return (
    <div
      className="h-full w-full flex bg-top bg-cover items-end pb-6 font-custom "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="mx-auto w-auto text-center px-1 text-3xl text-neutral-950 text-shadow-lg text-shadow-neutral-200 sm:w-auto lg:text-4xl">
        <div className="mb-2 flex flex-col items-center">
          <h1 className="text-5xl mb-4 lg:text-6xl">Welcome to the quiz!</h1>
          <p>Are you ready to start?</p>
        </div>

        <div className="flex justify-around">
          <button className="py-1 w-20 rounded-lg text-shadow-lg text-shadow-neutral-200 hover:text-shadow-green-600">
            Yes
          </button>
          <button className="py-1 w-18 rounded-lg text-shadow-lg text-shadow-neutral-200 hover:text-shadow-red-600">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

// ideas

// shadow-emerald-700 shadow-[0_0_20px_0,inset_0_0_20px_0]
// bg-neutral-800/30

// import logo from "../../assets/images/logo.png";
// text-shadow-neutral-400
//    <img src={logo} className="max-w-25" alt="logo" />
//   <span className="font-['Blood_Crow_Condensed'] text-5xl text-center px-3 rounded-3xl bg-neutral-300/25 text-black shadow-[0_0_20px_0] shadow-neutral-300/50 sm:w-auto ">
//     DemoN SlayeR
//   </span>
// <img
//   src={logo}
//   className="max-w-20  rounded-full  shadow-neutral-900 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
//   alt="logo"
// />
// ring ring-teal-700/60
