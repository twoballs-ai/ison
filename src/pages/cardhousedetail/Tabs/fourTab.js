import React from "react";
function FourTab(){
    return(

        <>
              <table className="table table-bordered">
                <thead>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td className="col-6">Отнесено ли жилое помещение к специализированному жилищному фонду
                    </td>
                    <td className="col-6"></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Наименование документа-основания о предоставлении в пользование жилого фонда
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Дата и номер документа-основания о предоставлении в пользование жилого помещения
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
        </>
    )
}

export default FourTab
