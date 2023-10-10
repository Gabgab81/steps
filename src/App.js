import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  return <div>
    <Steps />
    {/* <Steps /> */}
    <Challengeone />
  </div>
}

const Steps = () => {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);


  // const [test, setTest] = useState({ name: "Jack"})

  const handlePrevious = () => {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  }

  const handleNext = () => {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep(s => s + 1);

    //Work but bad practice
    // test.name = "Alfred"
    //Good Practice
    // setTest({name: "Alfred"})
  }

  // const handleClose = () => {
  //   setIsOpen(!isOpen);
  // }

  return (

    <div>

      <button 
        className="close" 
        // onClick={() => setIsOpen(!isOpen)}
        onClick={() => setIsOpen(o => !o)}
      >
        &times;
      </button>

      {isOpen &&
        (<div className="steps">

          <div className="numbers">
            <div className={step > 0 ? "active" : ""}>1</div>
            <div className={step > 1 ? "active" : ""}>2</div>
            <div className={`${step > 2 && "active"}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button 
              style={{backgroundColor: '#7950f2', color: "#fff"}}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button 
              style={{backgroundColor: '#7950f2', color: "#fff"}}
              onClick={handleNext}
            >
              Next
            </button>
          </div>

        </div>)
      }
    </div>
  )
}

const Challengeone = () => {
  return (
    <div className="steps">
      {/* <h1>Hello There</h1>
      <h2>Start editing to see the magic happen!</h2> */}
      <Counter />
    </div>
  )
}

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const d = new Date(Date.now() + count * 24 * 60* 60* 1000);
  // const d = new Date("june 21 2027");
  // d.setDate(d.getDate() + count)
  // console.log(d)
  let date = "";
  if (count === 0) date = "Today is " + d.toDateString();
  else if (count > 0) date = count  + " days from " + d.toDateString();
  else date = -count  + " days ago was " + d.toDateString();
  return (
    <>
      <div className="buttons">
        <button onClick={() => step > 1 && setStep(s => s - 1 ) }>
          -
        </button>
        <p>Step: {step}</p>
        <button onClick={() => setStep(s => s + 1 ) }>
          +
        </button>
      </div>
      <div className="buttons">
        <button onClick={() => setCount(c => c - step ) }>
          -
        </button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(c => c + step ) }>
          +
        </button>
      </div>
      <p style={{textAlign: "center"}}>
      {date}
      </p>
    </>
  )
}



export default App;

// OR 

// export default function App() {

// }