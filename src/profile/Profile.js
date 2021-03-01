import "./Profile.css";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleName, children }) => {
    return (
        <div id="profileDesc">
            <div>{children}</div>
            <div>
                <h1>{fullName}</h1>
                <h2 style={{ color: "#211818" }}>{profession}</h2>
                <p style={{ color: "#5e5050" }}>
                    <b>{bio}</b>
                </p>
                <button onClick={() => handleName(fullName)}>Click here</button>
            </div>
        </div>
    );
};

Profile.defaultProps = {
    fullName: " nameless profile",
    bio: "empty bio",
    profession: "unemployed",
    children: <img src="/image/unkownImg.jpg" alt="unkown-profile" />,
    handleName: () => alert("This is unkown profile"),
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element,
    handleName: PropTypes.func,
};

export default Profile;
