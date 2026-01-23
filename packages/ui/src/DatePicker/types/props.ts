export interface DatePickerProps {
  date?: Date;
  onChangeDate?: (date: Date) => void;
  disablePast?: boolean;
  title?: string;
}