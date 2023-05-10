import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StepOne from './addmodals/step1';
import StepTwo from './addmodals/step2';
import StepThree from './addmodals/step3';
import StepFour from './addmodals/step4';
import StepFive from './addmodals/step5';
import StepSix from './addmodals/step6';
import StepSeven from './addmodals/step7';
import StepEight from './addmodals/step8';
import './style.css';

function ModalAdd({ open }) {
  const [show, setShow] = useState(false);
  const [onePageInfo, setOnePageInfo] = useState({
    card_status: "",
    name_egrn: "",
    name_egrn1: "",
    name_egrn2: "",
  })
  const [steps, setSteps] = useState(1)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nextStep = () => {
    setSteps(steps + 1)
  }
  const prevStep = () => {
    setSteps(steps - 1)
  }
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setOnePageInfo({ ...onePageInfo, [name]: value })
  }

  const multiStepForm = () => {
    switch (steps) {
      case 1:
        return (
          <StepOne
            onePageInfo={onePageInfo}
            nextStep={nextStep}
            handleOnChange={handleOnChange}
          />
        )
      case 2:
        return (
          <StepTwo
            onePageInfo={onePageInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            handleOnChange={handleOnChange}
          />
        )
      case 3:
        return (
          <StepThree
            onePageInfo={onePageInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            handleOnChange={handleOnChange}
          />
        )
      case 4:
        return (
          <StepFour
            onePageInfo={onePageInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            handleOnChange={handleOnChange}
          />
        )
      case 2:
        return (
          <StepTwo
            onePageInfo={onePageInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            handleOnChange={handleOnChange}
          />
        )
      case 5:
        return (
          <StepFive
            onePageInfo={onePageInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            handleOnChange={handleOnChange}
          />
        )
      case 6:
        return (
          <StepSix
            onePageInfo={onePageInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            handleOnChange={handleOnChange}
          />
        )
      case 7:
        return (
          <StepSeven
            onePageInfo={onePageInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            handleOnChange={handleOnChange}
          />
        )
      case 8:
        return (
          <StepEight
            onePageInfo={onePageInfo}
            prevStep={prevStep}
            handleOnChange={handleOnChange}
          />
        )
      default:
        return null
    }
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Добавить объект недвижимости
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        {multiStepForm()}

      </Modal>

    </>
  )
}
export default ModalAdd