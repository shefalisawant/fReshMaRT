import download from "../../public/assets/images/dw2.png";
import playstore from "../../public/assets/images/google-play-badge.png";
import appstore from "../../public/assets/images/app-store-badge.png";

const DownloadApp = () => {
  return (
    <div className="p-4 bg-white pt-28">
      <div className="flex p-4 bg-dark-green rounded-2xl max-h-50">
        <div className="flex-col text-white font-mont w-1/2">
          <div className="text-4xl font-semibold">
            Stay Home And Get All Your Essentials From Our Market
          </div>
          <div className="text-sm mt-2">
            Download the App now from App Store or Google PlayStore
          </div>
          <div className="flex">
            <img
              src={appstore}
              className="h-12 mr-2 cursor-pointer"
              alt="appstore"
            />
            <img
              src={playstore}
              className="h-12 cursor-pointer"
              alt="playstore"
            />
          </div>
        </div>
        <div className="relative bottom-60">
          <img src={download} alt="download" />
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
