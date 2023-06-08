/*import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import StudentCard from  './Components/StudentCard';
import { StateFulComp, StatelessComp } from './Components/StateFulComponent';
import Button from './Components/Button';

function App() {
  const [acceptCount, setAcceptCount] = useState(0)
  const studentsData = [
    {
      name:"Sanjay",
      batch:"B42WD",
      education:"B.E",
    },
    {
      name:"Abbas",
      batch:"B43WD",
      education:"B.E",
    },
    {
      name:"Sangeeth",
      batch:"B44WD",
      education:"B.E",
    },
    {
      name:"Baskar",
      batch:"B45WD",
      education:"B.E",
    },

  ]
  return (
    <div className="App">
      <div>
        <h1>Accepted Students : {acceptCount}</h1>
      </div>

      <div className="card-block">
        {studentsData.map((stud,idx)=>(
          <StudentCard
          key={idx}
          name={stud.name}
          batch={stud.batch}
          education={stud.education}
          acceptCount={acceptCount}
          setAcceptCount={setAcceptCount}
          />
        ))}
        
      </div>
     {/*<StateFulComp/>
     <StatelessComp/>*

    <Button
      background={"crimson"}
      color="white"
      pd="15px"
      m="5px"
      wd="max-content"
      onClickFunc={()=>console.log("custom-btn clicked")}
    >
         Add
    </Button>

    </div>
  );
}

export default App;*/

// functional component

//function Welcome(){
  //return(
    //<div>
      //<h2>Welcome to React</h2>
    //</div>
  //)
//}

//<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header> 

// const {name, batch, education} = props

import './App.css';
import Card from './Card';
function App() {
let myPrices = [
  {
    plan: "FREE",
    price: "$0/month",
    features: [
      {
        name: "Single User",
        isEnabled: true
      },
      {
        name: "50GB Storage",
        isEnabled: true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true
      },
      {
        name: "Community Access",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: false
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: false
      },
      {
        name: "Free Subdomain",
        isEnabled: false
      },
      {
        name: "Monthly Status Reports",
        isEnabled: false
      }
    ]
  },
  {
    plan: "PLUS",
    price: "$9/month",
    features: [
      {
        name: "5 Users",
        isEnabled: true
      },
      {
        name: "50GB Storage",
        isEnabled: true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true
      },
      {
        name: "Community Access",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled:true        },
      {
        name: "Free Subdomain",
        isEnabled:true        },
      {
        name: "Monthly Status Reports",
        isEnabled: false        }
    ]
  },
  {
    plan: "PRO",
    price: "$49/month",
    features: [
      {
        name: "Unlimited Users",
        isEnabled: true
      },
      {
        name: "50GB Storage",
        isEnabled: true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true
      },
      {
        name: "Community Access",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: true
      },
      {
        name: "Free Subdomain",
        isEnabled: true
      },
      {
        name: "Monthly Status Reports",
        isEnabled: true
      }
    ]
  }
]
 return (
    <>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              {
                myPrices.map( (obj) =>{return<Card data={obj}></Card>})   // store data in myPrices map to card 
              }
            </div>
          </div>
        </section>
    </>
  );
}

export default App;