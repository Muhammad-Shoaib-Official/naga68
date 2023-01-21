import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const GlobalTable = (props) => {
    const { columns, requireCheckBox, tableData, setSelected, selected } = props;

    // const handleSelectAllCheckboxClick = (event) => {
    //     if (event.target.checked) {
    //         const newSelected = tableData?.map(data => data?._id);
    //         setSelected(newSelected);
    //         return;
    //     }
    //     setSelected([]);
    // };

    // const handleSingleCheckboxClick = (event, id) => {
    //     const selectedIndex = selected.indexOf(id);
    //     let newSelected = [];
    //     if (selectedIndex === -1) {
    //         newSelected = newSelected.concat(selected, id);
    //     } else if (selectedIndex === 0) {
    //         newSelected = newSelected.concat(selected.slice(1));
    //     } else if (selectedIndex === selected.length - 1) {
    //         newSelected = newSelected.concat(selected.slice(0, -1));
    //     } else if (selectedIndex > 0) {
    //         newSelected = newSelected.concat(
    //             selected.slice(0, selectedIndex),
    //             selected.slice(selectedIndex + 1)
    //         );
    //     }
    //     setSelected(newSelected);
    // };

    // const isSelected = (id) => selected.indexOf(id) !== -1;

    return (
        
        <TableContainer className='table-container'>
            <Table className='table'>
                <TableHead className='table-head'>
                    <TableRow className='table-row'>
                        {/* {requireCheckBox && <TableCell className='table-cell'>
                            <input className='input-checkbox' type='checkbox'
                                checked={tableData?.length > 0 && selected.length === tableData?.length}
                                onChange={handleSelectAllCheckboxClick}
                            />
                        </TableCell>} */}
                        {columns.map((data, i) =>
                            <TableCell className='table-cell' key={i}>{data.title}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody className='table-body'>
                    {tableData?.map((data, i) =>
                        <TableRow key={i} className='table-row'>
                            {/* {requireCheckBox &&
                                <TableCell className='table-cell'>
                                    <input className='input-checkbox' type='checkbox' checked={isSelected(data?._id)} onClick={(e) => handleSingleCheckboxClick(e, data?._id)} />
                                </TableCell>} */}
                            {columns.map((col, j) =>
                                <TableCell key={j} className='table-cell' >
                                    {col.render(data)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GlobalTable;
