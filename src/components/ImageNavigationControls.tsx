import NavArrowButton from "./NavArrowButton";

type ImageNavigationControlsProps = {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  className?: string;
};

const ImageNavigationControls = ({
  current,
  total,
  onPrevious,
  onNext,
  previousDisabled = false,
  nextDisabled = false,
  className = "",
}: ImageNavigationControlsProps) => {
  return (
    <div
      className={`flex w-full items-center justify-center gap-2 ${className}`}
    >
      <NavArrowButton
        direction="previous"
        onClick={onPrevious}
        disabled={previousDisabled}
      />
      <p className="font-libre min-w-[4.5rem] text-center text-xs tracking-wide uppercase">
        {current} / {total}
      </p>
      <NavArrowButton
        direction="next"
        onClick={onNext}
        disabled={nextDisabled}
      />
    </div>
  );
};

export default ImageNavigationControls;
