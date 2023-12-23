import React from "react";
import { Heading } from "../components/UI/Heading";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

const StepTwo = () => {

    const navigate = useNavigate()


    function clickHandler() {
        navigate('/step-three'); 
      }

    return (
        <div className="step-two">
            <Heading headingText="Оригинальный заголовок для страницы 3" />
            <div className="button-container">
            <Button
              buttonText="Далее"
              buttonType="submit"
              isDisabled={false}
              onClick={clickHandler}
            />
            </div>
        </div>
    )
}

export default StepTwo;