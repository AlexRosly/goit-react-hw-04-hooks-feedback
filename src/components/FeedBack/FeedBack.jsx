import FeedbackOptions from "../FeedBackOptions/FeedBackOptions";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import React, { useState } from "react";

function FeedBack() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedBack = (e) => {
    const name = e.target.name;
    switch (name) {
      case "good":
        setGood((good) => good + 1);
        break;

      case "neutral":
        setNeutral((neutral) => neutral + 1);
        break;

      case "bad":
        setBad((bad) => bad + 1);
        break;

      default:
        console.log("error");
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          option={["good", "neutral", "bad"]}
          onLeaveFeedback={countFeedBack}
        />
        {total === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        )}
      </Section>
    </>
  );
}

export default FeedBack;
// class FeedBack extends React.Component {

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     countTotalFeedback = () => {
// const { good, neutral, bad } = this.state;
// const total = good + neutral + bad;
// return total;
//     };

//     countPositiveFeedbackPercentage = () => {
//         const total = this.countTotalFeedback();
//         const { good } = this.state;
//         const percentage = Math.round((good / total) * 100);
//         return percentage;
//     };

//     countFeedBack = (e) => {
//         const name = e.target.name;
//         this.setState(prevState => ({
//             [name]: prevState[name] + 1,
//         }));
//     };

//     render() {
//         const { good, neutral, bad } = this.state;
//         const total = this.countTotalFeedback();
//         const positive = this.countPositiveFeedbackPercentage();

//         return (
//             <>
//     <Section title="Please leave feedback">
//         <FeedbackOptions
//             option={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.countFeedBack}
//         />
//         {total === 0 ? <Notification message="No feedback given"></Notification> : <Statistics
//             title="Statistics"
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positive}
//         />}
//     </Section>
// </>
//         );
//     }
// }

// export default FeedBack;
