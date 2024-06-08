import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/sections/header.section';

export const getCountriesReport = (): TDocumentDefinitions => {
  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title: 'Countries Report',
      subtitle: 'List of countries',
    }),
    pageMargins: [40, 110, 40, 60],
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            ['Country', 'Capital', 'Population', 'Area'],
            ['USA', 'Washington D.C.', '331M', '9.8M km²'],
            [{ text: 'Canada', bold: true }, 'Ottawa', '38M', '9.9M km²'],
          ],
        },
      },
    ],
  };
};
