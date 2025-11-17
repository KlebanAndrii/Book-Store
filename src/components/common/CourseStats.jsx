import timeIcon from "../../assets/images/tracks/time.svg";
import videoIcon from "../../assets/images/tracks/video.svg";
import downloadIcon from "../../assets/images/tracks/download.svg";

function CourseStats({ duration, coursesCount, salesCount }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-neutral-400 text-base font-medium font-poppins mb-13">
      <div className="flex items-center gap-1.5">
        <img src={timeIcon} alt="" className="w-5 h-5" width="20" height="20" />
        <span>{duration}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <img src={videoIcon} alt="" className="w-6 h-4" width="24" height="16" />
        <span>{coursesCount}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <img src={downloadIcon} alt="" className="w-4 h-4" width="16" height="16" />
        <span>{salesCount}</span>
      </div>
    </div>
  );
}

export default CourseStats;
