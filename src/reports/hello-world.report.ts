import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getHelloWorldReport = (): TDocumentDefinitions => {
  const decDefinition: TDocumentDefinitions = {
    content: ['Hello world :)'],
  };

  return decDefinition;
};
