import { countries as Country } from '@prisma/client';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { headerSection } from 'src/sections/header.section';

interface ReportOptions {
  title?: string;
  subTitle?: string;
  countries: Country[];
}

export const getCountriesReport = ({
  title,
  subTitle,
  countries,
}: ReportOptions): TDocumentDefinitions => {
  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title: title || 'Countries Report',
      subtitle: subTitle || 'List of countries',
    }),
    pageMargins: [40, 110, 40, 60],
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: [50, 50, 50, '*', 'auto', '*'],
          body: [
            ['ID', 'ISO2', 'ISO3', 'Name', 'Continent', 'Local Name'],
            [
              ...countries.map((country) => [
                country.id.toString(),
                country.iso2,
                country.iso3,
                country.name,
                country.continent,
                country.local_name,
              ]),
            ],
          ],
        },
      },
    ],
  };
};
