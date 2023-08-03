import "../ModalViewImage/ModalViewImage.scss";

const ModalViewImage = ({imgUrl}) => {
  return (
    <div
      class="modal-view-image modal fade"
      id="viewImageModal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog  modal-dialog-centered  modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img src={imgUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalViewImage;


//onclick => set   data-bs-toggle="modal"  and  data-bs-target="#viewImageModal"
