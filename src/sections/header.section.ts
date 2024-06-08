import type { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

interface HeaderOptions {
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
  showCurrentDate?: boolean;
}

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
  margin: [20, 30],
  width: 150,
};

const contentTitle = (title: string): Content => {
  return {
    text: title,
    alignment: 'center',
    margin: [0, 15, 0, 0],
    style: {
      bold: true,
      fontSize: 22,
    },
  };
};

const contentSubtitle = (subtitle: string): Content => {
  return {
    text: subtitle,
    alignment: 'center',
    margin: [0, 2, 0, 0],
    style: {
      fontSize: 16,
      bold: true,
    },
  };
};

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subtitle, showLogo = true, showCurrentDate = true } = options;

  const headerLogo = showLogo ? logo : null;
  const headerCurrentDate = showCurrentDate ? currentDate : null;
  const headerTitle = title ? contentTitle(title) : null;
  const headerSubtitle = subtitle ? contentSubtitle(subtitle) : null;

  const headerStack: Content = {
    stack: [headerTitle, headerSubtitle],
  };

  return {
    columns: [headerLogo, headerStack, headerCurrentDate],
  };
};
