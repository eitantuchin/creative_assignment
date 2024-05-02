import React, { useState } from 'react';
import './Temperature.css'; // Import custom CSS for Temperature component


function Temperature() {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
        {
            question: "What was the average global temperature during the Jurassic period?",
            options: ["60-70°F", "30-40°F", "90-100°F"],
            correctAnswer: "60-70°F"
        },
        {
            question: "What contributed to the warm climate during the Jurassic period?",
            options: ["Increased volcanic activity", "Breakup of Pangaea", "Both of the above"],
            correctAnswer: "Both of the above"
        },
        {
            question: "What type of vegetation covered much of the land during the Jurassic period?",
            options: ["Grasslands", "Ferns, cycads, and conifers", "Tropical rainforests"],
            correctAnswer: "Ferns, cycads, and conifers"
        }
    ];

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
          setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          // Check if it's the last question before showing the alert
          const finalScore = score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0);
          alert(`Quiz completed! Your score is ${finalScore}/${questions.length}`);
          setCurrentQuestion(0);
          setScore(0);
        }
      };
    return (
        <div className="container">
            <header className="mt-3 mb-5">
                <h1>Jurassic Temperature</h1>
            </header>
            <section className="mb-5">
                <h2>Observations as a Time Traveler</h2>
                <p>
                    As I journey back to the Jurassic period, I am struck by the climate of this ancient world. The temperature here is markedly different from what I am accustomed to in my own time. The average temperature lingers around 60 - 70 degrees F.
                </p>
                <p>
                    The Jurassic period is characterized by a warm and humid climate, with average global temperatures higher than those of today. The lush vegetation that covers the land speaks to the warmth of this era, with dense forests teeming with life.
                </p>
                <p>
                    The atmosphere is rich in carbon dioxide, contributing to the greenhouse effect and further warming the planet. This elevated carbon dioxide levels likely result from increased volcanic activity and the breakup of Pangaea, which releases large amounts of CO2 into the atmosphere.
                </p>
            </section>
            <section className="mb-5">
                <h2>Significance of Jurassic Temperature</h2>
                <p>
                    The warm temperatures of the Jurassic period have profound implications for life on Earth. They provide the ideal conditions for the proliferation of diverse flora and fauna, including the iconic dinosaurs that roam the land.
                </p>
                <p>
                    The warm climate supports the growth of lush vegetation, which in turn sustains large herbivorous dinosaurs. These herbivores form the foundation of the Jurassic ecosystem, supporting a complex food web that includes apex predators like the mighty Allosaurus.
                </p>
                <p>
                    However, the warm temperatures of the Jurassic period also contribute to high levels of evaporation and precipitation, leading to frequent storms and fluctuations in sea levels. These environmental challenges shape the evolution of life during this time, driving adaptation and innovation among species.
                </p>
            </section>
            <section className="mb-5">
                <h2>Quiz: Test Your Knowledge (No Looking 👀)</h2>
                {currentQuestion < questions.length ? (
                    <div>
                        <p>{questions[currentQuestion].question}</p>
                        <ul>
                            {questions[currentQuestion].options.map((option, index) => (
                                <li key={index} onClick={() => handleAnswer(option)} style={{ cursor: 'pointer' }}>{option}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Quiz completed! Your score is {score}/{questions.length}</p>
                )}
            </section>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-7c160b822953b3e6500c574ac1f02b5a-pjlq" alt="Jurassic Image" className="img-fluid" style={{ width: '50%', height: '50%' }} />
          
        </div>
    );
}

export default Temperature;
