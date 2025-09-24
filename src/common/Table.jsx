import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export const TableContext = createContext();
export default function Table({ children, data }) {
  const [originalData] = useState(data);
  const [displayData, setDisplayData] = useState(data);
  return (
    <TableContext.Provider
      value={{
        displayData: displayData,
        originalData: originalData,
        setDisplayData: setDisplayData,
      }}
    >
      <div className="tablet:overflow-visible overflow-x-scroll">
        <table className="tbStyle">{children}</table>
      </div>
    </TableContext.Provider>
  );
}
export function TableHeader({ content, sortFn }) {
  const { displayData, setDisplayData } = useContext(TableContext);
  const [sortConfig, setSortConfig] = useState({
    index: null,
    direction: "asc",
  });
  const handleClick = (index) => {
    if (!sortFn) return;
    let direction = "asc";
    if (sortConfig.index === index && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ index, direction });
    const sorted = sortFn(displayData, index, direction);
    setDisplayData([...sorted]);
  };
  return (
    <thead>
      <tr className="TbHeaderStyle">
        {content.map((item, index) => (
          <th
            key={index}
            className="TbHeaderCellStyle"
            style={{ minWidth: item.width }}
            onClick={() => handleClick(index)}
          >
            {item.body}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export function TableBody({ children, id = null, value = null, fn = null }) {
  let { originalData, setDisplayData, displayData } = useContext(TableContext);
  useEffect(() => {
    if (fn != null && id != null && value != null) {
      const filtered = fn(id, value, originalData);
      setDisplayData(filtered);
    } else {
      setDisplayData(originalData);
    }
  }, [fn, id, value, originalData, setDisplayData]);

  return <tbody className="bg-white">{children(displayData)}</tbody>;
}

Table.header = TableHeader;
Table.body = TableBody;
