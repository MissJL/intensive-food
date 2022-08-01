import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table({ data, onSort, sortColumn, columns }) {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
}

export default Table;
