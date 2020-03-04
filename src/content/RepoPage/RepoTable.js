import React from 'react';

import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableExpandHeader,
    TableHeader,
    TableBody,
    TableExpandRow,
    TableCell,
    TableExpandedRow,
    TableSelectRow,
    TableSelectAll,
} from 'carbon-components-react';

const RepoTable = ({ rows, headers }) => {
    return (
        <DataTable
            isSortable
            rows={rows}
            headers={headers}
            render={({
                         rows,
                         headers,
                         getHeaderProps,
                         getRowProps,
                         getSelectionProps,
                         getTableProps,
                     }) => (
                <TableContainer
                    title="Carbon Repositories"
                    description="A collection of public Carbon repositories.">
                    <Table {...getTableProps()} >
                        <TableHead>
                            <TableRow>
                                <TableExpandHeader />
                                <TableSelectAll {...getSelectionProps()} />
                                {headers.map(header => (
                                    <TableHeader {...getHeaderProps({ header })}>
                                        {header.header}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <React.Fragment key={row.id}>
                                    <TableExpandRow {...getRowProps({ row })}>
                                        <TableSelectRow {...getSelectionProps({ row })} />
                                        {row.cells.map(cell => (
                                            <TableCell key={cell.id}>{cell.value}</TableCell>
                                        ))}
                                    </TableExpandRow>
                                    <TableExpandedRow colSpan={headers.length + 2}>
                                        <p>description</p>
                                    </TableExpandedRow>
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        />
    );
};

export default RepoTable;