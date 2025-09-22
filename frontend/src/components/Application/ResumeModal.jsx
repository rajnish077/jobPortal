// eslint-disable-next-line react/prop-types
const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <>
      <div className="resume-modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <img src={imageUrl} alt="resume" />
        </div>
      </div>
    </>
  );
};

// ResumeModal.defaultProps = {};
export default ResumeModal;
