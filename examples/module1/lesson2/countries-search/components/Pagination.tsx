import { Button } from './Button';

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}) => {
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-4 gap-3">
      <Button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </Button>
      <span className="self-center">
        Page {currentPage} of {totalPages}
      </span>
      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  );
};
