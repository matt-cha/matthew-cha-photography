type ArrowKeyEvent = {
  key: string;
  preventDefault: () => void;
};
type ArrowKeyHandlers = {
  onPrevious: () => void;
  onNext: () => void;
};
export const handleArrowKeyNavigation = (
  event: ArrowKeyEvent,
  { onPrevious, onNext }: ArrowKeyHandlers,
) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    onPrevious();
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    onNext();
  }
};
