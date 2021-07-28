import React from 'react';
import {TextField} from "@material-ui/core";

export default function ButtonHeight(props) {

    const handleChange = (event) => {
        props.setState({
            ...props.state,
            height: event.target.value,
        });
    }
    return (
        <div>

            <TextField
                onChange={handleChange}
                id="outlined-number"
                label="Рост"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </div>
    );
}