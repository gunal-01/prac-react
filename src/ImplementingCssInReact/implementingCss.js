import "./App.css";

function ImplementingCss() {   
/*    const age = 17;
                            first style implementation on React
    return (
        <div>
            {age>=18 ? <h1>Over Age</h1> : <h2 style={{color: "green"}}> Under Age</h2>}
        </div>
    );
*/
const handleBelow18 = () => {
    window.alert("Inappropriate content: You must be 18 or older.");
};

const handleAbove18 = () => {
    window.alert("Enjoy the day!");
};
return (
    <div className="age">
        <div className="ageVerification"><h1>Age Verification</h1></div>
        <div className="form-container">
            <h2>Select Your Age Group</h2>
            {/* Button for age below 18 */}
            <button type="button" onClick={handleBelow18} className="button">Under 18</button>
            {/* Button for age above 18 or older */}
            <button type="button" onClick={handleAbove18} className="button">18 or Older</button>
        </div>
    </div>
)
}

export default ImplementingCss;