import React from "react";
import { Heading } from "../components/UI/Heading";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

const StepOne = () => {

    const navigate = useNavigate()

    function clickHandler() {
        navigate('/step-two'); 
      }

    return (
        <div className="step-one">
            <Heading headingText="Оригинальный заголовок для страницы 2" />
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

export default StepOne;