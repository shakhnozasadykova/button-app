import React from "react";
import { Heading } from "../components/UI/Heading";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

const StepThree = () => {

    const navigate = useNavigate()


    function clickHandler() {
        navigate('/step-four'); 
      }

    return (
        <div className="step-three">
            <Heading headingText="Оригинальный заголовок для страницы 4"/>
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

export default StepThree;