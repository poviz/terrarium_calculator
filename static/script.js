document.addEventListener('DOMContentLoaded', function() {


  const form = document.querySelector('#terrarium-form');
  const resultTablemm = document.querySelector('#result-table-mm');
  const resultTablecm = document.querySelector('#result-table-cm');


  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const roofWidth = Number(form.elements['roof-width'].value);
    const roofLength = Number(form.elements['roof-length'].value);
    const bottomWidth = Number(form.elements['bottom-width'].value);
    const bottomLength = Number(form.elements['bottom-length'].value) - 36;
    const sidesWidth = Number(form.elements['sides-width'].value);
    const sidesLength = Number(form.elements['sides-length'].value - 18);
    const backWidth = Number(form.elements['back-width'].value) - 36;
    const backLength = Number(form.elements['back-length'].value) - 36;
    const frontWidth = Number(form.elements['front-width'].value);
    const frontLength = Number(form.elements['front-length'].value) - 36;

    const mmResult = `
      <table>
        <thead>
          <tr>
            <th>Dalis</th>
            <th>Plotis</th>
            <th>Ilgis</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Roof</td>
            <td>${roofWidth}mm</td>
            <td>${roofLength}mm</td>
        </tr>
        <tr>
        <td>Front</td>
        <td>${frontLength}mm</td>
        <td>${frontWidth}mm</td>
      </tr>
            <tr>
            <td>Left Side</td>
            <td>${sidesLength}mm</td>
            <td>${sidesWidth}mm</td>
          </tr>
          <tr>
            <td>Right Side</td>
            <td>${sidesLength}mm</td>
            <td>${sidesWidth}mm</td>
          </tr>
          <tr>
            <td>Back</td>
            <td>${backLength}mm</td>
            <td>${backWidth}mm</td>
          </tr>
          <tr>
            <td>Bottom</td>
            <td>${bottomLength}mm</td>
            <td>${bottomWidth}mm</td>
        </tr>
        </tbody>
      </table>
    `;

    resultTablemm.innerHTML = mmResult;

    const sidesWidthCm = (sidesWidth / 10).toFixed(1);
    const sidesLengthCm = (sidesLength / 10).toFixed(1);
    const bottomWidthCm = (bottomWidth / 10).toFixed(1);
    const bottomLengthCm = (bottomLength / 10).toFixed(1);
    const backWidthCm = (backWidth / 10).toFixed(1);
    const backLengthCm = (backLength / 10).toFixed(1);
    const frontWidthCm = (frontWidth / 10).toFixed(1);
    const frontLengthCm = (frontLength / 10).toFixed(1);
    const roofWidthCm = (roofWidth / 10).toFixed(1);
    const roofLengthCm = (roofLength / 10).toFixed(1);

    const cmResult = `
    <table>
        <thead>
          <tr>
            <th>Dalis</th>
            <th>Plotis</th>
            <th>Ilgis</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Roof</td>
            <td>${roofLengthCm}cm</td>
            <td>${roofWidthCm}cm</td>
        </tr>
          <tr>
            <td>Front</td>
            <td>${frontLengthCm}cm</td>
            <td>${frontWidthCm}cm</td>
          </tr>
            <tr>
           <td>Left Side</td>
            td>${sidesLengthCm}cm</t>
            <td>${sidesWidthCm}cm</td>
          </tr>
          <tr>
            <td>Right Side</td>
            <td>${sidesLengthCm}cm</td>
            <td>${sidesWidthCm}cm</td>
          </tr>
          <tr>
            <td>Back</td>
            <td>${backLengthCm}cm</td>
            <td>${backWidthCm}cm</td>
          </tr>
                   <tr>
            <td>Bottom</td>
            <td>${bottomLengthCm}cm</td>
            <td>${bottomWidthCm}cm</td>
        </tr>
        </tbody>
      </table>
    `;

    resultTablecm.innerHTML = cmResult;
  });
});