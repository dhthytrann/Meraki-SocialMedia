import "../TabGallery/TabGallery.scss";
import { useState } from "react";
import ModalViewImage from "../../../../../components/ModalViewImage/ModalViewImage";

const TabGallery = ({ listImage }) => {
  // const images = [
  //   "/images/gallery/1.jpg",
  //   "/images/gallery/2.jpg",
  //   "/images/gallery/3.jpg",
  //   "/images/gallery/4.jpg",
  //   "/images/gallery/5.jpg",
  //   "/images/gallery/6.jpg",
  //   "/images/gallery/7.jpg",
  //   "/images/gallery/8.jpg",
  //   "/images/gallery/9.jpg",
  //   "/images/gallery/10.jpg",
  //   "/images/gallery/11.jpg",
  //   "/images/gallery/12.jpg",
  //   "/images/gallery/1.jpg",
  //   "/images/gallery/2.jpg",
  //   "/images/gallery/3.jpg",
  // ];

  const [data, setData] = useState({ img: "", i: 0 });
  const ViewImage = (img, i) => {
    setData({ img, i });
  };


  return (
    <>
      <ModalViewImage imgUrl={data.img} />
      <div class="tab-pane fade" id="gallery-tab-pane">
        <div className="title">
          <h4>Gallery</h4>
        </div>
        <div className="gallery mr-0 ml-0">
          {listImage && listImage.map((image) => (
            <div
              key={image.id}
              className="item-image"
              onClick={() => ViewImage(image.imgLink, image.id)}
              data-bs-toggle="modal"
              data-bs-target="#viewImageModal"
            >
              <img key={image.id} src={image.imgLink} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabGallery;
