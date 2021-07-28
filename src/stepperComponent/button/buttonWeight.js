import React from 'react';
import {TextField} from "@material-ui/core";

export default function ButtonWeight(props) {

    const handleChange = (event) => {
        props.setState({
            ...props.state,
            weight: event.target.value,
        });
    }
    return (
        <div>

            <TextField
                onChange={handleChange}
                id="outlined-number"
                label="Вес"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </div>
    );
}