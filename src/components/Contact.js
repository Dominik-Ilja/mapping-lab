import List from "./List";
import Image from "./Image";

function Contact(props) {
  return (
    <div className="contact">
      <Image image={props.image} />
      <List name={props.name} homeNumber={props.homeNumber} mobileNumber={props.mobileNumber} />
      &rang;
    </div>
  );
}

export default Contact;
