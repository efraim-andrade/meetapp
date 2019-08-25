import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export default function formatDate(date) {
  const parsedDate = parseISO(date);

  return format(parsedDate, "d 'de' MMMM ', às ' hh'h'", { locale: pt });
}
