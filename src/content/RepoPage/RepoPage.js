import React, { useState } from 'react';
import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';
import RepoTable from './RepoTable';
import MultiSelectExample from "./MultiselectExample";
import DatePickerExample from "./DatePickerExample";
import ModalWithTabs from "./ModalWithTabs";

const headers = [
    {
        key: 'name',
        header: 'Name',
    },
    {
        key: 'createdAt',
        header: 'Created',
    },
    {
        key: 'updatedAt',
        header: 'Updated',
    },
    {
        key: 'issueCount',
        header: 'Open Issues',
    },
    {
        key: 'stars',
        header: 'Stars',
    },
    {
        key: 'links',
        header: 'Links',
    },
];
const rows = [
    {
        id: '1',
        name: 'Repo 1',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '2',
        name: 'Repo 2',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '3',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '4',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '5',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '6',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '7',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '8',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '9',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '10',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '11',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '12',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },{
        id: '13',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '14',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '15',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
    {
        id: '16',
        name: 'Repo 3',
        createdAt: 'Date',
        updatedAt: 'Date',
        issueCount: '123',
        stars: '456',
        links: 'Links',
    },
];
const items = [
    {
        id: 'option-1',
        label: 'Option 1',
    },
    {
        id: 'option-2',
        label: 'Option 2',
    },
    {
        id: 'option-3',
        label: 'Option 3',
    },
    {
        id: 'option-4',
        label: 'Option 4',
    },
    {
        id: 'option-14',
        label: 'Option 14',
    },
];

const RepoPage = () => {
    const [totalItems, setTotalItems] = useState(rows.length);
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(5);
    return (
        <div>
            <RepoTable
                headers={headers}
                rows={rows.slice(
                    firstRowIndex,
                    firstRowIndex + currentPageSize
                )}
            />
            <Pagination
                totalItems={totalItems}
                backwardText="Previous page"
                forwardText="Next page"
                pageSize={currentPageSize}
                pageSizes={[5, 10, 15, 25]}
                itemsPerPageText="Items per page"
                onChange={({ page, pageSize }) => {
                    if (pageSize !== currentPageSize) {
                        setCurrentPageSize(pageSize);
                    }
                    setFirstRowIndex(pageSize * (page - 1));
                }}
            />
            <MultiSelectExample items={items} />
            <DatePickerExample />
            <ModalWithTabs />
        </div>
    );

};
export default RepoPage;