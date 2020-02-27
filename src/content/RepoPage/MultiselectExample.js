import React from "react";
import { MultiSelect } from 'carbon-components-react'

const MultiSelectExample = ({items}) => {
    return  (
    <MultiSelect.Filterable
        ariaLabel="Filterable MultiSelect"
        id="carbon--filterable-multiselect-example"
        items={items}
        placeholder = 'Search ...'
        label="Filterable MultiSelect options"
        titleText="This is a MultiSelect title."
    />
)
};

export default MultiSelectExample;