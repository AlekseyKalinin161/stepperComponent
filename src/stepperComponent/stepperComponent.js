import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import NativeSelects from "./button/buttonMale";
import NativeSelectsBody from "./button/buttonBodyType";
import ButtonHeight from "./button/buttonHeight";
import ButtonWeight from "./button/buttonWeight";

export default function VerticalLinearStepper(props) {

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));


    function getSteps() {
    return ['Выберите пол', 'Выберите тип телосложения', 'Выберите рост', 'Выберите вес'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <NativeSelects
                state={props.state} setState={props.setState}
            />;
        case 1:
            return <NativeSelectsBody
                state={props.state} setState={props.setState}
            />;
        case 2:
            return <ButtonHeight
                state={props.state} setState={props.setState}
            />;
        case 3:
            return <ButtonWeight
                state={props.state} setState={props.setState}
            />;
        default:
            return 'Unknown step';
    }
}

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <div>{getStepContent(index)}</div>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <div>All steps completed - you&apos;re finished</div>
                    <div>{JSON.stringify(props.state)}</div>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}