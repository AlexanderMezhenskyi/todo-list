import React, {Component} from 'react';
import './style.css';

class NewItem extends Component{
    state = {
        title: '',
        important: false
    };

    setTitle = (evt) => {
        this.setState({
            title: evt.target.value
        });
    };

    markImportant = () => {
        this.setState({
            important: !this.state.important
        });
    };

    submitForm = (evt) => {
        evt.preventDefault();

        if (this.state.title.length <= 3) {
            alert('You have entered a short title name. The length of the title name must be more than 3 symbols');
        } else {
            this.props.onAddItem(this.state.title, this.state.important);

            this.setState({
                title: '',
                important: false
            });
        }
    };

    render () {
        const placeholder = 'Type here to add new todo';

        return (
            <form action=""
                  className="new-item"
                  onSubmit={this.submitForm}
            >
                <input type="text"
                       className="form-control"
                       onChange={this.setTitle}
                       value={this.state.title}
                       placeholder={placeholder}
                />
                <div className="form-check mx-2 d-flex">
                    <input type="checkbox"
                           className="form-check-input"
                           checked={this.state.important}
                           onChange={this.markImportant}
                    />
                    <span>Is important?</span>
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        )
    }
}

export default NewItem;