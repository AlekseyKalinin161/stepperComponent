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

export default function NativeSelects(props) {
    const classes = useStyles();

    const handleChange = (event) => {
        props.setState({
            ...props.state,
            male: event.target.value
        });
    }
    return (
        <div>
            <FormControl variant="outlined"
                         className={classes.formControl}
            >
                <InputLabel htmlFor="outlined-male-native-simple">Пол</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    label="male"
                >
                    <option aria-label="None" value=""/>
                    <option value={'man'}>Мужчина</option>
                    <option value={'women'}>Женщина</option>
                </Select>
            </FormControl>
        </div>
    );
}