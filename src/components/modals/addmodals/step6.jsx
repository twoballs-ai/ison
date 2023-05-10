import Reac from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
const StepSix = ({ onePageInfo, nextStep, prevStep, handleOnChange }) => {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Финансовые показатели объекта недвижимого имущества</Modal.Title>
            </Modal.Header>
            <div className="md-stepper-horizontal orange">
                    <div className="md-step active done ">
                        <div className="md-step-circle"><span>1</span></div>
                        <div className="md-step-title">ШАГ-1</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    <div className="md-step active done">
                        <div className="md-step-circle"><span>2</span></div>
                        <div className="md-step-title">ШАГ-2</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    <div className="md-step active done">
                        <div className="md-step-circle"><span>3</span></div>
                        <div className="md-step-title">ШАГ-3</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    <div className="md-step active done">
                        <div className="md-step-circle"><span>4</span></div>
                        <div className="md-step-title">ШАГ-4</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    <div className="md-step active done">
                        <div className="md-step-circle"><span>5</span></div>
                        <div className="md-step-title">ШАГ-5</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    
                    <div className="md-step active editable md-step-active-blok">
                        <div className="md-step-circle"><span>6</span></div>
                        <div className="md-step-title">ШАГ-6</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    <div className="md-step active">
                        <div className="md-step-circle"><span>7</span></div>
                        <div className="md-step-title">ШАГ-7</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    <div className="md-step active">
                        <div className="md-step-circle"><span>8</span></div>
                        <div className="md-step-title">ШАГ-8</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                </div>
            <Modal.Body>
                <div className="row">
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn1"
                            >1. Кадастровая стоимость по данным ЕГРН, рублей</label>
                        <input
                            className="form-control"
                            id="name_egrn1" 
                            name="name_egrn1"
                            type="text" 
                            maxLength="100"
                            value={onePageInfo.name_egrn1}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn2"
                            >2. Кадастровая стоимость по данным РФИ, рублей</label>
                        <input
                            className="form-control"
                            id="name_egrn2" 
                            name="name_egrn2"
                            type="text" 
                            maxLength="100"
                            value={onePageInfo.name_egrn2}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn1"
                            >3. Балансовая стоимость по данным бухгалтерского учета, рублей</label>
                        <input
                            className="form-control"
                            id="name_egrn1" 
                            name="name_egrn1"
                            type="text" 
                            maxLength="100"
                            value={onePageInfo.name_egrn1}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn2"
                            >4. Балансовая стоимость по данным РФИ, рублей</label>
                        <input
                            className="form-control"
                            id="name_egrn2" 
                            name="name_egrn2"
                            type="text" 
                            maxLength="100"
                            value={onePageInfo.name_egrn2}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn1"
                            >5. Остаточная стоимость по данным бухгалтерского учета, рублей</label>
                        <input
                            className="form-control"
                            id="name_egrn1" 
                            name="name_egrn1"
                            type="text" 
                            maxLength="100"
                            value={onePageInfo.name_egrn1}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn2"
                            >6. Остаточная стоимость по данным РФИ, рублей</label>
                        <input
                            className="form-control"
                            id="name_egrn2" 
                            name="name_egrn2"
                            type="text" 
                            maxLength="100"
                            value={onePageInfo.name_egrn2}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn1"
                            >7. Номер счета бухгалтерского учета</label>
                         <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>            
                            <option value="1">...</option>
                        </select>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn2"
                            >8. Наименование счета бухгалтерского учета</label>
             <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>            
                            <option value="1">...</option>
                        </select>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
            <Button 
          variant="secondary" 
          onClick={()=> prevStep()}>
            Назад
          </Button>
          <Button 
          variant="secondary" 
          onClick={()=> nextStep()}>
            Продолжить
          </Button>

        </Modal.Footer>
        </>
    )
}



export default StepSix