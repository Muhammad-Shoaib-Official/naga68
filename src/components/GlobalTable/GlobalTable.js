import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from "@mui/material";

const GlobalTable = (props) => {
    const { columns, PaginationReq,headBG,requireCheckBox, tableData, setSelected, selected } = props;

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
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        <>
         {PaginationReq && <TablePagination
         className="paginATION"
         rowsPerPageOptions={[10, 25, 100]}
         component="div"
         count={tableData.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onPageChange={handleChangePage}
         onRowsPerPageChange={handleChangeRowsPerPage}
         nextIconButtonProps={{ style: { display: "none" } }}
         backIconButtonProps={{ style: { display: "none" } }}
         labelRowsPerPage=''
         sx={{
            "& .MuiInputBase-root": {
                marginRight: "0",
            },
            // "&.MuiOutlinedInput-root": {
            //     "& fieldset": {
            //         border: '2px solid #cccccc'
            //     },
            //     "&:hover fieldset": {
            //         border: "2px solid #F78812",
            //     },
            //     "&.Mui-focused fieldset": {
            //         border: "2px solid #F78812",
            //     }
            // },
            '.MuiSvgIcon-root ': {
                fill: "#A0A3BD !important",
              
            },
            // "& .MuiSelect-select .notranslate::after": {
            //     content: `"Select"`,
            //     opacity: 0.42,
            //     paddingLeft: "2px",
            //     fontSize: "14px",
            //   },
         }}
       /> }
        <TableContainer className='table-container'>
            <Table className='table'>
                <TableHead className='table-head' sx={{backgroundColor: headBG ? "#0d131c": "transparent", borderBottom: headBG ? "none": "red",}}>
                    <TableRow className='table-row'>
                        {/* {requireCheckBox && <TableCell className='table-cell'>
                            <input className='input-checkbox' type='checkbox'
                                checked={tableData?.length > 0 && selected.length === tableData?.length}
                                onChange={handleSelectAllCheckboxClick}
                            />
                        </TableCell>} */}
                        {columns.map((data, i) =>
                            <TableCell sx={{borderBottom:"red"}} className='table-cell' key={i}>{data.title}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody className='table-body'>
                    {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, i) =>
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
        
       </>
    )
}

export default GlobalTable;
