import ImageDesktopDivider from "./assets/pattern-divider-desktop.svg";
import ImageMobileDivider from "./assets/pattern-divider-mobile.svg";
import useFetchAdvice from "./useFetchAdvice";
import IconDice from "./assets/icon-dice.svg";

function App() {
  const [{ advice, id }, fetchAdvice] = useFetchAdvice();

  return (
    <div className="bg-dark-gray-blue rounded-[10px] sm:rounded-[15px] p-6 pb-[64px] sm:pb-[72px]  sm:p-12 relative mt-[120px] sm:mt-[223px] sm:max-w-[540px] mx-auto">
      <div className="">
        <div className="text-neon-green font-extrabold text-[11px] text-center mb-6 tracking-[4px]">
          {`ADVICE #${id}`}
        </div>
        <div className="text-center text-cyan text-[24px] font-extrabold  mb-6">
          {advice || "Loading..."}
        </div>
        <div className="flex items-center justify-center">
          <img
            src={ImageMobileDivider}
            alt="Mobile Image Divider"
            className="block sm:hidden h-4"
          />
          <img
            src={ImageDesktopDivider}
            alt="Desktop Image Divider"
            className="hidden sm:block h-4"
          />
        </div>
        <div
          className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] cursor-pointer"
          onClick={fetchAdvice}
        >
          <div className="rounded-full flex items-center justify-center bg-neon-green h-[48px] w-[48px] hover:shadow-oval">
            <img src={IconDice} alt="dice" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
