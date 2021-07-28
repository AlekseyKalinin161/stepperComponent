import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelectsBody (props) {
    const classes = useStyles();

    const handleChange = (event) => {
        props.setState({
            ...props.state,
            bodyType: event.target.value,
        });
    }
    return (
        <div>
            <FormControl
                variant="outlined"
                         className={classes.formControl}
            >
                <InputLabel htmlFor="outlined-body-native-simple">Тип</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    label="body"
                >
                    <option aria-label="None" value=""/>
                    <option value={'big'}>Крупное</option>
                    <option value={'medium'}>Среднее</option>
                    <option value={'low'}>Худое</option>
                </Select>
            </FormControl>
        </div>
    );
}