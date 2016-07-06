import React from 'react';

export default class TodoBox extends React.Component {
    render() {
          return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList data={this.props.data} />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        var todo = this.props.data.map(function(obj){
          // below is my solution to the problem, but this can also be done below in the constructor section -- see the correct answer according to the tutorial below
          // if(todo.state.checked == true){
          //     return <Todo title={obj.title} key={obj.title} style={style.checkedTodo}>{obj.detail}</Todo>
          // } else{
          //     return <Todo title={obj.title} key={obj.title} style={style.notCheckedTodo}>{obj.detail}</Todo>
          // }
            return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
        });
        return (
            <div className="todoList">
                <table style={style.tableContent}>
                    <tbody>
                        {todo}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    // Write code here
    constructor(props){
        super(props);
        this.state = {
            checked: false
            // this is the tutorials solution -- put the line below under constructor and then change the handleChange below
            TodoStyle = style.notCheckedTodo
        };
        this.handleChange = this.handleChange.bind(this);
    }
    //this is how the handleChange used to look before the tutorials solution
    // handleChange(){
    //     this.setState({checked: !this.state.checked});
    // }

    //this is the new handleChange function according to the tutorial solution
    handleChange(e){
        this.setState({
          checked: e.target.checked
        });
        if(e.target.checked){
          this.setState({
            TodoStyle: style.checkedTodo
          });
        } else{
          this.setState({
            TodoStyle: style.notCheckedTodo
          });
        }
    }

    render(){
        return (
          //the way i did it just has this as <tr> -- the way it looks below is how it should look according to the tutorial
            <tr style={this.state.TodoStyle}>
                <td style={style.tableRow}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                </td>
                <td style={style.tableRow}>{this.props.title}</td>
                <td style={style.tableRow}>{this.props.children}</td>
            </tr>
        );
    }
}
Todo.propTypes = {
    title: React.PropTypes.string.isRequired
};


class TodoForm extends React.Component {
      // Omitted
    render(){
        return(
            <div className="todoForm">
                I am a TodoForm.
            </div>
        );
    }
}

let style = {
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
    tableContent: {
        border: "1px solid black"
    },
    tableRow:{
        border: "1px solid black"
    }
};
