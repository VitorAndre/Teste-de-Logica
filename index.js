const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Servidor rodando no link http://localhost:3000");
});

app.get("/", (req, res) => {
  let { dataInicio, dataFim } = req.query;

  dataInicio = new Date(
    dataInicio.split("/")[2],
    dataInicio.split("/")[1],
    dataInicio.split("/")[0]
  );
  dataFim = new Date(
    dataFim.split("/")[2],
    dataFim.split("/")[1],
    dataFim.split("/")[0]
  );
  let meses = [];
  let dataMesesAuxiliar = new Date(dataInicio);
  let i = 0;
  let numTrimestre = 0;
  let numSemestre = 0;
  let index;
  let trimestres = [];
  let semestres = [];
  let anos = [];

  while (dataMesesAuxiliar < dataFim) {
    let data = dataMesesAuxiliar.getDate();
    let mes = dataMesesAuxiliar.getMonth();
    let ano = dataMesesAuxiliar.getFullYear();

    if (mes == 0) {
      mes = 12;
      ano--;
    }
    meses.push(data + "/" + mes + "/" + ano);

    //Trimestres
    if (mes <= 3) numTrimestre = 1;
    else if (mes <= 6) numTrimestre = 2;
    else if (mes <= 9) numTrimestre = 3;
    else if (mes <= 12) numTrimestre = 4;
    index = trimestres.findIndex((data) =>
      data ? data.name == `${numTrimestre}º trimestre de ${ano}` : undefined
    );
    if (index == -1) {
      trimestres[i] = {};
      trimestres[i].name = `${numTrimestre}º trimestre de ${ano}`;
      index = i;
      trimestres[index].meses = [];
    }
    trimestres[index].meses.push(data + "/" + mes + "/" + ano);

    //Semestres
    if (mes <= 6) numSemestre = 1;
    else if (mes <= 12) numSemestre = 2;
    if (dataMesesAuxiliar.getMonth() + 1 > dataFim) {
      dataMesesAuxiliar = dataFim;
    }

    index = semestres.findIndex((data) =>
      data ? data.name == `${numSemestre}º semestre de ${ano}` : undefined
    );
    if (index == -1) {
      semestres[i] = {};
      semestres[i].name = `${numSemestre}º semestre de ${ano}`;
      index = i;
      semestres[index].meses = [];
    }
    semestres[index].meses.push(data + "/" + mes + "/" + ano);

    //Anos
    index = anos.findIndex((data) =>
      data ? data.name == `Ano de ${ano}` : undefined
    );
    if (index == -1) {
      anos[i] = {};
      anos[i].name = `Ano de ${ano}`;
      index = i;
      anos[index].meses = [];
    }
    anos[index].meses.push(data + "/" + mes + "/" + ano);
    dataMesesAuxiliar.setMonth(dataMesesAuxiliar.getMonth() + 1);

    i++;
  }

  meses.push(
    dataFim.getDate() + "/" + dataFim.getMonth() + "/" + dataFim.getFullYear()
  );

  if (dataFim.getMonth() <= 3) numTrimestre = 1;
  else if (dataFim.getMonth() <= 6) numTrimestre = 2;
  else if (dataFim.getMonth() <= 9) numTrimestre = 3;
  else if (dataFim.getMonth() <= 12) numTrimestre = 4;
  index = trimestres.findIndex((data) =>
    data
      ? data.name == `${numTrimestre}º trimestre de ${dataFim.getFullYear()}`
      : undefined
  );
  if (index == -1) {
    trimestres[i] = {};
    trimestres[
      i
    ].name = `${numTrimestre}º trimestre de ${dataFim.getFullYear()}`;
    index = i;
    trimestres[index].meses = [];
  }
  trimestres[index].meses.push(
    dataFim.getDate() + "/" + dataFim.getMonth() + "/" + dataFim.getFullYear()
  );
  let data = dataMesesAuxiliar.getDate();
  let mes = dataMesesAuxiliar.getMonth();
  let ano = dataMesesAuxiliar.getFullYear();
  if (dataMesesAuxiliar.getMonth() <= 6) numSemestre = 1;
  else if (dataMesesAuxiliar.getMonth() <= 12) numSemestre = 2;
  if (dataMesesAuxiliar.getMonth() + 1 > dataFim) {
    dataMesesAuxiliar = dataFim;
  }

  index = semestres.findIndex((data) =>
    data
      ? data.name ==
        `${numSemestre}º semestre de ${dataMesesAuxiliar.getFullYear()}`
      : undefined
  );
  if (index == -1) {
    semestres[i] = {};
    semestres[
      i
    ].name = `${numSemestre}º semestre de ${dataMesesAuxiliar.getFullYear()}`;
    index = i;
    semestres[index].meses = [];
  }
  semestres[index].meses.push(data + "/" + mes + "/" + ano);

  //Anos
  index = anos.findIndex((data) =>
    data ? data.name == `Ano de ${ano}` : undefined
  );
  if (index == -1) {
    anos[i] = {};
    anos[i].name = `Ano de ${ano}`;
    index = i;
    anos[index].meses = [];
  }
  anos[index].meses.push(data + "/" + mes + "/" + ano);
  dataMesesAuxiliar.setMonth(dataMesesAuxiliar.getMonth() + 1);

  let response = { meses, trimestres, semestres, anos };
  return res.status(200).send(response);
});
