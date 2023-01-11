import {useState} from "react";

export const ClassCounter = () => {
    
    const [count,setCount] = useState(0);

    handleClick = () => this.setState({count: this.state.count + 1});

    render() {
        const {count} = this.state;
        return (
            <>
                <p>Clicks: {count}</p>
                <button onClick={this.handleClick}>Clickeame</button>
            </>
        );
    }
}