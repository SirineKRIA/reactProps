import Profile from "./profile/Profile";
import "./App.css";

let ProfilePhotoStyle = {
    border: "2px solid white",
    padding: "10px",
    borderRadius: "50px 20px",
    width: "500px",
    height: "600px",
};

let promotionalSummary = `Talented Embedded Software Engineer proficient in all phases of software development lifecycle.
           Adept at working with Agile and Scrum cultures to accomplish project milestones according to specific timeframes.
           Skilled using C, python to complete work. Divers’ knowledge of design and testing approaches. Highly organized and 
           detail-oriented professional with 4 years of progressive experience in field.`;

const handleName = (name) => alert(`Profile name is ${name}`);

function App() {
    return (
        <div className="App">
            <Profile
                fullName="Sirine KRIAA"
                bio={promotionalSummary}
                profession="Embedded Software Engineer"
                handleName={handleName}
            >
                <img
                    src="/image/CvPicture.jpg"
                    style={ProfilePhotoStyle}
                    alt="my_profile"
                />
            </Profile>
        </div>
    );
}

export default App;
