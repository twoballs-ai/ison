import React from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
const StepOne = ({ onePageInfo, nextStep, handleOnChange }) => {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Основные сведения об 
                    объекте недвижимого имущества</Modal.Title>
            </Modal.Header>
            <div className="md-stepper-horizontal orange">
                <div className="md-step active editable md-step-active-blok">
                    <div className="md-step-circle"><span>1</span></div>
                    <div className="md-step-title">ШАГ-1</div>
                    <div className="md-step-bar-left"></div>
                    <div className="md-step-bar-right"></div>
                </div>
                <div className="md-step active">
                    <div className="md-step-circle"><span>2</span></div>
                    <div className="md-step-title">ШАГ-2</div>
                    <div className="md-step-bar-left"></div>
                    <div className="md-step-bar-right"></div>
                </div>
                <div className="md-step active">
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
                        <label htmlFor="card_status"
                        >1. Статус карты </label>
                        <select 
                        className="form-select" 
                        aria-label="Default select example"
                        id="card_status"
                        name="card_status"
                        value={onePageInfo.card_status}
                        onChange={handleOnChange}
                        >
                            <option defaultValue>Выберите из выпадающего списка</option>
                            <option value="1">Черновик</option>
                            <option value="2">Создан</option>
                            <option value="3">Приостановлен</option>
                            <option value="4">Учтен</option>
                            <option value="5">Исключен</option>
                            <option value="6">Исправлен</option>
                            <option value="7">На доработку</option>
                            <option value="8">На подпись</option>
                            <option value="9">Направлен</option>
                            <option value="10">На рассмотрении</option>
                            <option value="11">Отказ</option>
                            <option value="12">Подготовлен</option>
                            <option value="13">Принят</option>
                        </select>
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="name_egrn"
                        >2. Кадастровый номер</label>
                        <input
                            className="form-control"
                            id="name_egrn"
                            name="name_egrn"
                            type="text"
                            maxLength="100"
                            value={onePageInfo.name_egrn}
                            onChange={handleOnChange}
                        />
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >3. Дата присвоения кадастрового номера (согласно данным ЕГРН)</label>
                        <input
                            className="form-control"
                            id="card_status"
                            name="card_status"
                            type="date"
                            max="2850-01-01"
                            min="850-01-01"
                            value={onePageInfo.card_status}
                            onChange={handleOnChange}
                        />
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >4. Вид объекта недвижимого имущества (согласно данным ЕГРН)</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>
                            
                       
                            <option value="1">Земельный участок</option>
<option value="1">Здание</option>
<option value="1">Машино-место</option>
<option value="1">Объект незавершенного строительства</option>
<option value="1">Единый недвижимый комплекс</option>
<option value="1">Иные объекты (с правом самостоятельного заполнения)</option>
<option value="1">Предприятие как имущественный комплекс</option>
<option value="1">Сооружение</option>
<option value="1">Помещение</option>
<option value="1">Морское судно</option>
<option value="1">Воздушное судно</option>
<option value="1">Суда внутреннего плавания</option>

                        </select>
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >5. Наименование объекта недвижимого имущества 
                        (согласно данным ЕГРН)</label>
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
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >6. Адрес (местоположение) объекта недвижимого имущества</label>
                        <input
                            className="form-control"
                            id="card_status"
                            name="card_status"
                            type="text"
                            maxLength="100"
                            // value={onePageInfo.card_status}
                            onChange={handleOnChange}
                        />
                    </div>
                    
                    <label htmlFor="card_status"
                        >7. Площадные характеристики</label>
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
              
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >8. Назначение объекта недвижимого имущества (за исключением земельных участков)</label>
            <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>            
                            <option value="1">....</option>
                        </select>
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        > 
                        9. Категория земель</label>
                  <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>            
                            <option value="1">....</option>
                        </select>
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >10. Основной вид разрешенного использования (только для земельных участков)</label>
                        <input
                            className="form-control"
                            id="card_status"
                            name="card_status"
                            type="text"
                            maxLength="100"
                            value={onePageInfo.card_status}
                            onChange={handleOnChange}
                            disabled
                        />
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >11. Вспомогательный вид разрешенного использования (только для земельных участков)</label>
                        <input
                            className="form-control"
                            id="card_status"
                            name="card_status"
                            type="text"
                            maxLength="100"
                            value={onePageInfo.card_status}
                            onChange={handleOnChange}
                            disabled
                        />
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >12. Наименование субъекта Российской Федерации расположения объекта недвижимого имущества</label>
                                       <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>            
                            <option value="1">....</option>
                        </select>
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >13. Наименование муниципального округа/ образования расположения объекта недвижимого имущества</label>
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
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >14. Является ли объектом культурного наследия</label>
                                                       <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>            
                            <option value="1">....</option>
                        </select>
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >15. Категория объекта историко-культурного значения</label>
                                                             <select class="form-select" aria-label="Default select example">
                            <option selected disabled>Выберите из выпадающего списка</option>            
                            <option value="1">....</option>
                        </select>
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >16. Категория объекта историко-культурного значения</label>
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
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >17. Категория объекта историко-культурного значения</label>
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
                    
                    <div className="col-12 mb-3">
                        <label htmlFor="card_status"
                        >18. Категория объекта историко-культурного значения</label>
                                                             <input
                            className="form-control"
                            id="card_status"
                            name="card_status"
                            type="date"
                            maxLength="100"
                            onChange={handleOnChange}
                        />
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => nextStep()}>
                    Продолжить
                </Button>

            </Modal.Footer>
        </>
    )
}



export default StepOne