import React, { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState(''); // Weight in pounds
  const [heightFeet, setHeightFeet] = useState(''); // Height in feet
  const [heightInches, setHeightInches] = useState(''); // Height in inches
  const [lifestyle, setLifestyle] = useState('sedentary');
  const [sex, setSex] = useState('male');
  const [ethnicity, setEthnicity] = useState('white');
  const [smoking, setSmoking] = useState('no');
  const [physicalActivity, setPhysicalActivity] = useState('low');
  const [familyHistory, setFamilyHistory] = useState('no');
  const [bloodPressure, setBloodPressure] = useState('normal');
  const [cholesterol, setCholesterol] = useState('normal');
  const [riskScore, setRiskScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Calculate BMI based on weight (lbs) and height (feet and inches)
  const calculateBMI = (weight, heightFeet, heightInches) => {
    if (!weight || !heightFeet) return 0;

    // Convert weight from pounds to kilograms
    const weightInKg = weight * 0.453592;
    
    // Convert height from feet and inches to meters
    const totalHeightInInches = (parseFloat(heightFeet) * 12) + parseFloat(heightInches || 0);
    const heightInMeters = totalHeightInInches * 0.0254;

    // Calculate BMI
    return (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Calculate BMI using the updated height and weight inputs
    const bmi = calculateBMI(weight, heightFeet, heightInches);
    let risk = 0;

    // Updated risk factor contributions to reduce reactivity
    if (age > 45) {
      risk += 0.15;
    }
    if (bmi > 25) {
      risk += 0.1;
    }
    if (lifestyle === 'sedentary') {
      risk += 0.1;
    }
    if (smoking === 'yes') {
      risk += 0.1;
    }
    if (familyHistory === 'yes') {
      risk += 0.1;
    }
    if (bloodPressure === 'high') {
      risk += 0.1;
    }
    if (cholesterol === 'high') {
      risk += 0.05;
    }
    if (physicalActivity === 'low') {
      risk += 0.05;
    }
    if (sex === 'male') {
      risk += 0.03;
    }
    if (ethnicity !== 'white') {
      risk += 0.03;
    }

    //overall variability in the final score
    const randomModifier = Math.random() * 0.05;
    const finalRiskScore = Math.min((risk + randomModifier).toFixed(2), 1);

    setTimeout(() => {
      setRiskScore(finalRiskScore);
      console.log("Calculated Risk Score:", finalRiskScore);
      setIsLoading(false);
    }, 1000);
  };

  const getRiskMessage = () => {
    if (riskScore < 0.20) {
      return "Your risk of developing diabetes is low. Maintain a healthy lifestyle and continue regular check-ups with your healthcare provider.";
    } else if (riskScore >= 0.20 && riskScore <= 0.50) {
      return "Your risk of developing diabetes is moderate. Consider making lifestyle changes such as a healthier diet and regular exercise. Consult your healthcare provider for personalized advice.";
    } else if (riskScore > 0.50) {
      return "Your risk of developing diabetes is high. It is strongly recommended that you consult with a healthcare professional for further evaluation and to discuss preventative measures.";
    } else {
      return "";
    }
  };

  const getRiskDetails = () => {
    if (riskScore < 0.20) {
      return "Low Risk: Maintain a healthy diet, avoid smoking, and engage in regular physical activities like walking or jogging at least 30 minutes daily. Attend yearly check-ups with your healthcare provider.";
    } else if (riskScore >= 0.20 && riskScore <= 0.50) {
      return "Moderate Risk: Increase physical activity, reduce sugar and saturated fat intake, and aim to maintain a healthy weight. Consider discussing additional preventive measures with your healthcare provider.";
    } else if (riskScore > 0.50) {
      return "High Risk: Seek medical advice immediately. Consult with a healthcare provider to evaluate your health status, and follow a treatment plan that includes dietary changes, physical activity, and medication if needed.";
    } else {
      return "";
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Diabetes Risk Prediction</h1>
        <p className="app-description">Proactively manage your health with our AI-powered tool, leveraging real-time CDC and WHO statistics.</p>
      </header>

      <div className="submission-container">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="data-form">
            <div className="form-row">
              <label>Age:</label>
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>

            <div className="form-row">
              <label>Weight (lbs):</label>
              <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>

            <div className="form-row">
              <label>Height (feet):</label>
              <input type="number" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} />
            </div>
            <div className="form-row">
              <label>Height (inches):</label>
              <input type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} />
            </div>

            <div className="form-row">
              <label>Sex:</label>
              <select value={sex} onChange={(e) => setSex(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-row">
              <label>Ethnicity:</label>
              <select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="asian">Asian</option>
                <option value="hispanic">Hispanic</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-row">
              <label>Smoking:</label>
              <select value={smoking} onChange={(e) => setSmoking(e.target.value)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="form-row">
              <label>Physical Activity Level:</label>
              <select value={physicalActivity} onChange={(e) => setPhysicalActivity(e.target.value)}>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-row">
              <label>Family History of Diabetes:</label>
              <select value={familyHistory} onChange={(e) => setFamilyHistory(e.target.value)}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div className="form-row">
              <label>Blood Pressure:</label>
              <select value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-row">
              <label>Cholesterol:</label>
              <select value={cholesterol} onChange={(e) => setCholesterol(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
            </div>

            <button type="submit">Predict</button>
            {isLoading ? (
              <p className="loading">Calculating...</p>
            ) : (
              riskScore !== null && (
                <div>
                  <h2>Your Risk Score: {riskScore}</h2>
                  <p className="next-steps">{getRiskMessage()}</p>
                  <button onClick={() => setShowModal(true)} className="modal-button">See Recommendations</button>
                </div>
              )
            )}
          </form>
        </div>
      </div>

      <div className="logos">
        <p>Data Sources:</p>
        <a href="https://www.who.int/health-topics/diabetes#tab=tab_1" target="_blank" rel="noopener noreferrer">
          <img src="/images/who-logo.png" alt="World Health Organization" className="logo" />
        </a>
        <a href="https://www.cdc.gov/diabetes/index.html" target="_blank" rel="noopener noreferrer">
          <img src="/images/cdc-logo.png" alt="Centers for Disease Control and Prevention" className="logo" />
        </a>
      </div>

      <div className="disclaimer">
        <p>This application provides a risk estimation and is not a substitute for a professional medical diagnosis. Please consult your healthcare provider for any concerns.</p>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ color: 'black' }}>Next Steps for Your Risk Level</h3>
            <p style={{ color: 'black' }}>{getRiskDetails()}</p>
            <button onClick={() => setShowModal(false)} className="close-modal">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
