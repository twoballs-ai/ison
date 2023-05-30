import React from "react";
function SixTab(){
    return(

        <>
           <table className="table table-bordered">
                <thead>
                </thead>
                <tbody>
                  <tr>
                  <td>1</td>
                    <td className="col-6">Кадастровая стоимость по данным ЕГРН, рублей
                    </td>
                    <td className="col-6"></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Кадастровая стоимость по данным РФИ, рублей
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Балансовая стоимость по данным бухгалтерского учета, рублей
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Балансовая стоимость по данным РФИ, рублей
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Остаточная стоимость по данным бухгалтерского учета, рублей
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Остаточная стоимость по данным РФИ, рублей
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Номер счета бухгалтерского учета
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Наименование счета бухгалтерского учета
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

        </>
    )
}

export default SixTab