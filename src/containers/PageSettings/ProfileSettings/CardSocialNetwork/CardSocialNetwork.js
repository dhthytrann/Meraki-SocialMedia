import { useForm } from "react-hook-form";
import "../CardSocialNetwork/CardSocialNetwork.scss";

const CardSocialNetwork = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="card-social-network ">
      <div className="title">
        <h5>Social Networks</h5>
      </div>
      <div className="body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="group-input form-floating">
            <textarea
              id="facebookInput"
              className="form-control"
              placeholder="Facebook"
              type="text"
              {...register("facebook")}
            />
            <label for="facebookInput">Facebook</label>
          </div>
          <div className="group-input form-floating">
            <textarea
              id="instagramInput"
              className="form-control"
              placeholder="Instagram"
              type="text"
              {...register("instagram")}
            />
            <label for="instagramInput">Instagram</label>
          </div>
          <div className="group-input form-floating">
            <textarea
              id="googleInput"
              className="form-control"
              placeholder="Google"
              type="text"
              {...register("google")}
            />
            <label for="googleInput">Google</label>
          </div>
          <div className="group-input form-floating">
            <textarea
              id="dribbbleInput"
              className="form-control"
              placeholder="Dribbble"
              type="text"
              {...register("dribbble")}
            />
            <label for="dribbbleInput">Dribbble</label>
          </div>
          <div className="group-input form-floating">
            <textarea
              id="youtubeInput"
              className="form-control"
              placeholder="Youtube"
              type="text"
              {...register("youtube")}
            />
            <label for="youtubeInput">Youtube</label>
          </div>
          <div className="footer pt-3">
            <button className="btn-save-change">
              <p className="mb-0">SAVE CHANGES</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardSocialNetwork;
