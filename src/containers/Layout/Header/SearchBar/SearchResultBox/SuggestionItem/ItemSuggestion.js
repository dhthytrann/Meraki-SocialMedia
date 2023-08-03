const ItemSuggestion = ({imgUser, userName}) => {
  return (
    <div className="item-suggestion">
      <div className="info-user">
        <div className="img-user">
          <img src={imgUser} alt="" />
        </div>
        <div className="user-name line-height m-0">
          <p>{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemSuggestion;
