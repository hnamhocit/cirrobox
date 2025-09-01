interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
      <div
        className="h-2 rounded-full relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                           bg-[length:200%_100%] animate-gradient-x"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
