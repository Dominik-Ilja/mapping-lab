function List(props) {
  return (
    <div className="list">
      <div className="flex">
        <h3 className="list-name">{props.name}</h3>
        <p className="list-number">Home: {props.homeNumber}</p>
        <p className="list-number">Mobile: {props.mobileNumber}</p>
      </div>
    </div>
  );
}


export default List;
