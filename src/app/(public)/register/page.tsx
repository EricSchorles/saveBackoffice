'use client';

import { RegisterStepOne } from './components/StepOneRegister';
import { StepThreeBussinesData } from './components/StepThreeBussinesData';
import { StepTwoContinue } from './components/StepTwoContinue';

const Register = () => {

    return (
        <div className="relative flex flex-row min-h-screen ">
            <RegisterStepOne />
            <StepTwoContinue />
            <StepThreeBussinesData />
        </div>
    );
};

export default Register;
