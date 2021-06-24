/* eslint-disable max-lines-per-function, @typescript-eslint/no-explicit-any */
import React, { FC } from "react";
import { useTable, useSortBy, useBlockLayout, useResizeColumns, Column } from 'react-table';

import styles from "./Table.module.css";

const Table: FC<{ columns: Column<any>[], data: any[], style: React.CSSProperties } > = ({ columns, data, style = {} }) => {
  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
      },
      useBlockLayout,
      useSortBy,
      useResizeColumns
    )
  
    return (
      <table {...getTableProps()} className={styles.table} style={style}>
        <thead className={styles.thead}>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}  className={styles.tr}>
              {headerGroup.headers.map((column: any) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps()}  className={styles.th}>
                    <span {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                    </span>
                  <span>
                    
                  </span>
                  <div
                      {...column.getResizerProps()}
                      className={`${styles.resizer} ${
                        column.isResizing ? styles.isResizing : ''
                      }`}
                    />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={styles.tbody}>
          {rows.map(
            (row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className={styles.tr}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()} className={styles.td}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
    )
}

const getColumnWidth = (rows: any[], accessor: string | number, headerText: string | any[]) => {
  const maxWidth = 200;
  const magicSpacing = 13;
  
  const cellLength = Math.max(
    ...rows.map(row => (`${row[accessor]}` || '').length),
    headerText.length,
  );
  return Math.min(maxWidth, cellLength * magicSpacing);
}

export const headers: (columns: any[][], data: any[]) => Column<any>[] = (columns, data) => {
  return columns.map(([heading, accessor, width, cell]) => {
    return {
      Header: heading,
      id: heading,
      accessor: accessor,
      width: width || getColumnWidth(data, accessor, heading),
      Cell: cell ||  (({ value }) => { return (<span>{String(value)}</span>); })
    }
  });
};

export default Table;