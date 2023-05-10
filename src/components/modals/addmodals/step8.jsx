import Reac from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
const StepEight = ({ onePageInfo, nextStep, prevStep, handleOnChange }) => {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Документы</Modal.Title>
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

                <div className="md-step active done">
                    <div className="md-step-circle"><span>6</span></div>
                    <div className="md-step-title">ШАГ-6</div>
                    <div className="md-step-bar-left"></div>
                    <div className="md-step-bar-right"></div>
                </div>

                <div className="md-step active done">
                    <div className="md-step-circle"><span>7</span></div>
                    <div className="md-step-title">ШАГ-7</div>
                    <div className="md-step-bar-left"></div>
                    <div className="md-step-bar-right"></div>
                </div>

                <div className="md-step active editable md-step-active-blok">
                    <div className="md-step-circle"><span>8</span></div>
                    <div className="md-step-title">ШАГ-8</div>
                    <div className="md-step-bar-left"></div>
                    <div className="md-step-bar-right"></div>
                </div>
            </div>
            <Modal.Body>
                <div className="row">
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">1. Выписка из ЕГРН об основных характеристиках и зарегистрированных правах на объект недвижимости (выписка
                            из ЕГРН), содержащая сведения о государственной регистрации права собственности Российской Федерации / права оперативного управления на объект недвижимого имущества / права постоянного (бессрочного) пользования на земельный участок (актуализировать раз в пол года)</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">2. Выписка из реестра федерального имущества (выписка из РФИ) (актуализировать раз в пол года)</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">3. Документ-основание предоставления права постоянного (бессрочного) пользования земельного участка</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">4. Документ-основание предоставления права оперативного управления объекта недвижимого имущества / права постоянного (бессрочного) пользования земельного участка
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">5. Документ-основание отнесения жилого помещения к специализированному жилищному фонду
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">6. Документ-основание возникновения договорных отношений в отношении объектов недвижимости, предоставляемых подведомственными Минкультуры России организациями на праве аренды
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">7. Документ-основание возникновения договорных отношений в отношении объектов недвижимости, предоставляемых подведомственными Минкультуры России организациями в безвозмездное пользование
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">8. Договор аренды
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">9. Договор безвозмездного пользования
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">10. Охранное обязательство на объект (выявленный объект) культурного наследия (здание, строение, сооружение)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">11. Технический паспорт
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">12. Экспликация помещений
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">13. Кадастровый паспорт
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">14. Документ, подтверждающий первоначальную (балансовую) стоимость имущества (инвентарная карточка) (актуализировать раз в квартал)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">15. Справка о кадастровой стоимости (актуализировать раз в квартал)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">16. Оборотно-сальдовая ведомость на дату формирования по счетам: «Основные средства – недвижимое имущество учреждения (жилые помещения, нежилые помещения, здания, сооружения, водоходное судно и иные объекты недвижимости)», «Непроизведенные активы – недвижимое имущество учреждения (земельные участки)» с подробной расшифровкой всех строк в формате Excel - актуализировать раз в пол года
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">17. Документы, подтверждающие выбытие объектов из владения (например, решение суда, распоряжение или иной документ)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">18. Заключение о соответствии жилого помещения предъявляемым к нему требованиям
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">19. Заверенная в установленном порядке копия протокола заседания Комиссии
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">20. Заверенная в установленном порядке копия распорядительного акта Организации о создании постоянно действующей комиссии
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">21. Положение о постоянно действующей комиссии и сведения о ее составе
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">22. Акт о списании федерального недвижимого имущества
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">23. Заключение независимого эксперта о техническом состоянии объекта недвижимого имущества (включая объекты незавершенного строительства)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">24. Технико-экономическое обоснование
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">25. Справка уполномоченного органа об отсутствии граждан, зарегистрированных для проживания по адресу местонахождения предлагаемого к списанию жилого здания (жилых зданий), в случае принятия решения о списании жилого здания (жилых зданий)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">26. Акт о повреждениях, причиненных федеральному недвижимому имуществу
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">27. Справки уполномоченных организаций, подтверждающей факт аварии, стихийного бедствия или иной чрезвычайной ситуации
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">28. Постановление о возбуждении уголовного дела, вынесенного в соответствии со статьей 146 Уголовно-процессуального кодекса Российской Федерации, копия постановления о прекращении уголовного дела и уголовного преследования, вынесенного в соответствии со статьей 213 Уголовно-процессуального кодекса Российской Федерации, или иные документы, подтверждающие принятие мер по защите интересов Организации или Предприятия, или возмещению причиненного ущерба (при наличии)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">29. Судовые документы
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">30. Выписка из Государственного реестра судов
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">31. Заключение российской организации, осуществляющей классификацию и освидетельствование судов, зарегистрированных в Государственном судовом реестре, в бербоут-чартерном реестре или в Российском международном реестре судов, о результатах освидетельствования морского, речного судна, а также фотографии объекта, предлагаемого к списанию (с указанием даты съемки)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">32. Отчет об оценке рыночной стоимости права пользования и владения на условиях аренды
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">33. Утвержденная аукционная (конкурсная) документация
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">34. Документ уполномоченных органов, подтверждающий соответсвие помещений, планируемый к передачу в аренду (безвозмездное пользование), требованиям пожарной безопасности со сроком давности не более 3-х лет
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">35. Устав Учреждения / Предприятия (с изменениями и дополнениями)
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">36. Выписка из ЕГРЮЛ
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">37. Свидетельство о внесении записи в ЕГРЮЛ
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">38. Свидетельство о постановке на учет в налоговом органе
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="col-12 mb-3">
                        <label for="formFile" className="form-label">39. Соглашение об установлении сервитута
                        </label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>



                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => prevStep()}>
                    Назад
                </Button>
                <Button
                    variant="secondary"
                >
                    Сохранить
                </Button>

            </Modal.Footer>
        </>
    )
}



export default StepEight