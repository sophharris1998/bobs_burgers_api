import Card from "../../Components/Card/Card";
import "./ProfileContainers.scss";

const ProfileContainers = ({ profiles }) => {
  const CardJSX = profiles.map((element) => {
    return (
      <Card
        name={element.name}
        image={element.image}
        gender={element.gender}
        hairColor={element.hairColor}
      />
    );
  });

  return <div className="profile-container"> {CardJSX} </div>;
};

export default ProfileContainers;
