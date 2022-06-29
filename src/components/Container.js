import Contact from "./Contact";

function Container(props) {
  console.log(props);
  console.log(props.data);
  const { results } = props.data;

  return (
    <div className="container">
      {results.map((contact, index) => {
        const name = `${contact.name.first} ${contact.name.last}`;
        const cell = contact.cell;
        const phone = contact.phone;
        const image = contact.picture.medium;
        return <Contact key={index} image={image} name={name} homeNumber={phone} mobileNumber={cell} />;
      })}
    </div>
  );
}

export default Container;
