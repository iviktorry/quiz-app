import WelcomeButton from "./WelcomeButton";


export default function WelcomeScreenReady() {
    return (
        <div className="mx-auto w-auto text-center px-1 text-4xl text-neutral-950 text-shadow-lg text-shadow-neutral-200 sm:w-auto lg:text-4xl">
        <div className="mb-2 flex flex-col items-center">
          <h1 className="text-5xl mb-4 lg:text-6xl">Welcome to the quiz!</h1>
          <p>Are you ready to start?</p>
        </div>

        <div className="flex justify-around">
          <WelcomeButton
            text="Yes"
            shadow="text-shadow-green-400"
            hover="hover:text-shadow-green-500"
          />
          <WelcomeButton
            text="No"
            shadow="text-shadow-red-400"
            hover="hover:text-shadow-red-500"
          />
        </div>
      </div>
    )
}