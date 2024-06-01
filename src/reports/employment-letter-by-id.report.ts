import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';
import { headerSection } from 'src/sections/header.section';

interface ReportValues {
  employeeHours: number;
  employeeName: string;
  employeePosition: string;
  employeeStartDate: Date;
  employeeWorkSchedule: string;
  employerCompany: string;
  employerName: string;
  employerPosition: string;
}

const styles: StyleDictionary = {
  headers: {
    fontSize: 22,
    bold: true,
    alignment: 'center',
    margin: [0, 60, 0, 20],
  },
  body: {
    alignment: 'justify',
    margin: [0, 0, 0, 70],
  },
  signature: {
    fontSize: 14,
    bold: true,
    alignment: 'left',
  },
  footer: {
    fontSize: 10,
    bold: true,
    alignment: 'center',
    margin: [0, 0, 0, 20],
  },
};

export const getEmploymentLetterByIdReport = (
  values: ReportValues,
): TDocumentDefinitions => {
  const {
    employeeHours,
    employeeName,
    employeePosition,
    employeeStartDate,
    employeeWorkSchedule,
    employerCompany,
    employerName,
    employerPosition,
  } = values;

  const docDefinition: TDocumentDefinitions = {
    styles: styles,
    pageMargins: [40, 60, 40, 60],
    header: headerSection({}),
    content: [
      {
        text: 'Constancia de Empleo',
        style: 'headers',
      },
      {
        text: `Yo, ${employerName}, en mi calidad de ${employerPosition} de ${employerCompany}, por medio de la presente certifico que ${employeeName} ha sido empleado en nuestra empresa desde el ${DateFormatter.getDDMMMMYYYY(employeeStartDate)}. \n\n 
        Durante su empleo, el Sr./Sra. ${employeeName} ha desempeñado el cargo de ${employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus labores. \n\n
        La jornada laboral del Sr./ Sra. ${employeeName} es de ${employeeHours} horas semanales, con un horario de ${employeeWorkSchedule}, cumpliendo con las políticas y procedimientos establecidos por la empresa. \n\n
        Esta constancia se expide a solicitud del interesado para los fnes que considere conveniente.`,
        style: 'body',
      },
      { text: `Atentamente,`, style: 'signature' },
      { text: `${employerName}`, style: 'signature' },
      { text: `${employerPosition}`, style: 'signature' },
      { text: `${employerCompany}`, style: 'signature' },
      {
        text: `${DateFormatter.getDDMMMMYYYY(new Date())}`,
        style: 'signature',
      },
    ],
    footer: {
      text: 'Tucan Code - Reportes de Empleo',
      style: 'footer',
    },
  };

  return docDefinition;
};
