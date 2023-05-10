import Reac from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
const StepThree = ({ onePageInfo, nextStep, prevStep, handleOnChange }) => {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Сведения об
                ограничениях (обременениях) на объект недвижимого имущества</Modal.Title>
            </Modal.Header>
            <div className="md-stepper-horizontal orange">
                    <div className="md-step active done">
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
                    <div className="md-step active editable md-step-active-blok">
                        <div className="md-step-circle"><span>3</span></div>
                        <div className="md-step-title">ШАГ-3</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    <div className="md-step active">
                        <div className="md-step-circle"><span>4</span></div>
                        <div className="md-step-title">ШАГ-4</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    <div className="md-step active">
                        <div className="md-step-circle"><span>5</span></div>
                        <div className="md-step-title">ШАГ-5</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                    </div>
                    <div className="md-step active">
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
                            >1. Наименование документа о предоставлении в пользование объекта недвижимого имущества </label>
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
                            >2. Дата документа о предоставлении в пользование объекта недвижимого имущества </label>
                        <input
                            className="form-control"
                            id="name_egrn2" 
                            name="name_egrn2"
                            type="date" 
                            maxLength="100"
                            value={onePageInfo.name_egrn2}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn1"
                            >3. Номер документа о предоставлении в пользование объекта недвижимого имущества </label>
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
                            >4. Документ-основание о предоставлении в пользование объекта недвижимого имущества</label>
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
                        <label htmlFor="name_egrn2"
                            >5. Дата документа-основания о предоставлении в пользование объекта недвижимого имущества</label>
                        <input
                            className="form-control"
                            id="name_egrn2" 
                            name="name_egrn2"
                            type="date" 
                            maxLength="100"
                            value={onePageInfo.name_egrn2}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn2"
                            >6. Номер документа-основания о предоставлении в пользование объекта недвижимого имущества </label>
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
                        <label htmlFor="name_egrn2"
                            >7. Цель установления ограничения (обременения)</label>
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
                    <label htmlFor="card_status"
                        >8. Площадные характеристики</label>
                        <div className="col-5 mb-3">
    <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>            
                            <option value="1">Земельный участок</option>
                        </select>
                        </div>
                        <div className="col-4 mb-3">
                        <input
                            className="form-control"
                            id="card_status"
                            name="card_status"
                            type="text"
                            maxLength="100"
                            value={onePageInfo.card_status}
                            onChange={handleOnChange}
                        />
                        </div>
                        <div className="col-3 mb-3">
    <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>            
                            <option value="1">Земельный участок</option>
                        </select>
                        </div>
             
                    <div className="col-12 mb-3"></div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn2"
                            >9. Период действия договора</label>
                        <input
                            className="form-control"
                            id="name_egrn2" 
                            name="name_egrn2"
                            type="date" 
                            maxLength="100"
                            value={onePageInfo.name_egrn2}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn2"
                            >10. Срок действия договора</label>
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
                        <label htmlFor="name_egrn2"
                            >11. Лицо в пользу которого установлено обременение </label>
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
                        <label htmlFor="name_egrn2"
                            >12. Размер платежа </label>
                        <input
                            className="form-control"
                            id="name_egrn2" 
                            name="name_egrn2"
                            type="date" 
                            maxLength="100"
                            value={onePageInfo.name_egrn2}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn2"
                            >13. Дата записи государственной регистрации ограничения (обременения) 
                            на объект недвижимого имущества</label>
                        <input
                            className="form-control"
                            id="name_egrn2" 
                            name="name_egrn2"
                            type="date" 
                            maxLength="100"
                            value={onePageInfo.name_egrn2}
                            onChange ={handleOnChange}
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn2"
                            >14. Номер записи  государственной регистрации ограничения (обременения) 
                            на объект недвижимого имущества</label>
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



export default StepThree