import React from "react";

const studlist = [
    { slno: 1, name: "stud1", usn: "rvce1", tmarks: 150 },
    { slno: 2, name: "stud2", usn: "rvce2", tmarks: 145 }
];

class StudentsTable extends React.Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Sl No</th>
                        <th>Student Name</th>
                        <th>USN</th>
                        <th>Total Marks</th>
                    </tr>

                    {this.props.students.map(s => (
                        <tr key={s.slno}>
                            <th>{s.slno}</th>
                            <th>{s.name}</th>
                            <th>{s.usn}</th>
                            <th>{s.tmarks}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

class StudentListTable extends React.Component {
    state = { students: studlist };

    addStudent = (e) => {
        e.preventDefault();
        let f = e.target;

        this.setState({
            students: [...this.state.students, {
                slno: this.state.students.length + 1,
                name: f.name.value,
                usn: f.usn.value,
                tmarks: f.tmarks.value
            }]
        });

        f.reset();
    };

    render() {
        return (
            <>
                <hr />
                <StudentsTable students={this.state.students} />
                <hr />

                <form onSubmit={this.addStudent}>
                    <input name="name" placeholder="Name" />
                    <input name="usn" placeholder="USN" />
                    <input name="tmarks" placeholder="Total Marks" />
                    <button>Add</button>
                </form>
            </>
        );
    }
}

export default StudentListTable;