import React from 'react'

function GoalForm (props) {
    const [formData, setFormData] = React.useState( {
        goal: "",
        by: ""
    })

    function changeHandler(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function submitHandler (e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData ({
            goal: "",
            by: ""
        })
    }
    
    return (
        <>
            <h1>My App Goals</h1>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    name="goal"
                    placeholder="Goal"
                    value={formData.goal}
                    onChange={changeHandler} />
                <input
                    type="text"
                    name="by"
                    placeholder="By"
                    value={formData.by}
                    onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>
        </>
    )
 }

 function ListOfGoals (props) {

    const goalList = props.allGoals.map( (goal) => {
        return (
            <li key={goal.goal}>
                <span> My goal is: {goal.goal} - by: {goal.by}</span>
            </li>
        )
    });
    
    return (
        <>
            <ul>
                {goalList}
            </ul>
        </>
    )
 }


 export default function App () {
    const [allGoals, updateAllGoals] = React.useState([]);

    function addGoal(goal) {
        updateAllGoals([...allGoals, goal]);
    }

    return (
        <div className="app">
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    )
 }