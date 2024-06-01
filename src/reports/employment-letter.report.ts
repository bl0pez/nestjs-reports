import type {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

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

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

const currentDate: Content = {
  text: DateFormatter.getDDMMMMYYYY(new Date()),
  alignment: 'right',
  margin: [20, 20],
};

export const getEmploymentLetterReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    styles: styles,
    pageMargins: [40, 60, 40, 60],
    header: {
      columns: [logo, currentDate],
    },
    content: [
      {
        text: 'Constancia de Empleo',
        style: 'headers',
      },
      {
        text: `Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa], 
                por medio de la presente certifico que [Nombre del Empleado] ha sido empleado en nuestra 
                empresa desde el [Fecha de Inicio del Empleado]. \n\n 
                Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del 
                Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus 
                labores. \n\n
                La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas 
                semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y 
                procedimientos establecidos por la empresa. \n\n
                Esta constancia se expide a solicitud del interesado para los fnes que considere conveniente.`,
        style: 'body',
      },
      { text: `Atentamente,`, style: 'signature' },
      { text: `[Nombre del Empleador]`, style: 'signature' },
      { text: `[Cargo del Empleador]`, style: 'signature' },
      { text: `[Nombre de la Empresa]`, style: 'signature' },
      { text: `[Fecha de Emisión]`, style: 'signature' },
    ],
    footer: {
      text: 'Tucan Code - Reportes de Empleo',
      style: 'footer',
    },
  };

  return docDefinition;
};
