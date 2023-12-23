import React from "react";
import { Heading } from "../components/UI/Heading";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {

    const navigate = useNavigate()


    function clickHandler() {
        navigate('/step-one'); 
      }

      

    return (
        <div className="welcome">
            <Heading headingText="Оригинальный заголовок для страницы 1"/>
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

export default Welcome;