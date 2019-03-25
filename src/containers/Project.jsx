import React, { Component } from 'react';

/*Import components*/
import NameForm from '../components/NameForm';
import { all } from 'q';
import TableOfEngineers from '../components/TableOfEngineers';
import Calculations from '../components/Calculations';

const ListEngineers = props => {
    return (
        <div>
            {props.allEngineers.map((engineer, index) => {
                return <p key={index}>{engineer.name}<br />${engineer.rate}/hr.</p>

            })}
        </div>
    )
}
//* new comment 
class Project extends React.Component {

    state = {
        showAddPersonField: false,
        // ! change showEngineers back to false once you finish Calculations 
        // showEngineers: false,    
        showEngineers: true,
        allEngineers: [
            { name: "Tommy", rate: 125, hours: 10 },
            { name: "Jackie", rate: 150, hours: 20 }
        ],
        tableColumns: ["Name", "Hourly Rate", "Allotted Hours"],
        // newEngineer: {                       //* * I had 'new engineer' in an earlier version, but don't need it.
        //     name: '',                        //* * probably because of the bracket notation in handleName
        //     rate: ''
        // }
    }

    displayAddPersonField = () => {
        this.setState({ showAddPersonField: true })
    }

    displayEngineers = () => {
        if (this.state.allEngineers.length > 0) {
            this.setState({ showEngineers: true })
        }
    }

    handleName = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
        //* * 'name' here refers to the two places there's <input "name"= ...> on the form
    }

    addEngineer = (event) => {
        event.preventDefault();
        let engineers = this.state.allEngineers;
        let currentEngineer = {};
        currentEngineer.name = this.state.engineername;
        currentEngineer.rate = this.state.hourlyrate;
        currentEngineer.hours = this.state.allottedhours;
        engineers.push(currentEngineer);
        this.setState({
            allEngineers: engineers,
        })
        this.displayEngineers();
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <div className="Project-header">Revelry Project Bidding Calculator</div>
                <button className="Element-spacing" onClick={this.displayAddPersonField}>Add Person</button>
                <div>
                    {!this.state.showAddPersonField ? null : <NameForm
                        handleName={this.handleName}
                        addEngineer={this.addEngineer}
                    />}
                </div>
                <div>
                    {this.state.showEngineers ?
                        <TableOfEngineers
                            tableColumns={this.state.tableColumns}
                            allEngineers={this.state.allEngineers} />
                        : null}
                </div>
                <div className="Total">
                    {this.state.showEngineers ?
                        <Calculations allEngineers={this.state.allEngineers} /> : null}
                </div>
            </div>
        );
    }
}

export default Project;


