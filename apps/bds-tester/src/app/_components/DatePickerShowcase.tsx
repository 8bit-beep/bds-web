"use client";

import { DatePicker } from "@bds-web/ui";
import { useState } from "react";

export default function DatePickerShowcase() {
  const [date, setDate] = useState(new Date());
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <DatePicker date={date} onChangeDate={setDate} />
      <div>선택된 날짜: {date.toLocaleDateString()}</div>
    </div>
  );
}
