type DocTableColumn<Row> = {
  key: keyof Row;
  header: string;
  widthClassName?: string;
};

type DocTableProps<Row extends Record<string, unknown>> = {
  caption?: string;
  columns: Array<DocTableColumn<Row>>;
  rows: Row[];
};

export const DocTable = <Row extends Record<string, unknown>>({
  caption,
  columns,
  rows,
}: DocTableProps<Row>) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-greyscale-20">
      {caption ? (
        <div className="border-b border-greyscale-20 bg-white/40 px-4 py-2">
          <div className="text-caption2 text-greyscale-80">{caption}</div>
        </div>
      ) : null}

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-white/30">
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`border-b border-greyscale-20 px-4 py-2 text-caption2 text-greyscale-70 ${
                    col.widthClassName ?? ""
                  }`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="odd:bg-white/20">
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    className="align-top border-b border-greyscale-20 px-4 py-3 text-body text-greyscale-90">
                    {String(row[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
