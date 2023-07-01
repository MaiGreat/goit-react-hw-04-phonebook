import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <div className={css['contact-forma']}>
            <h3 className={css.title}>Find contacts by name</h3>
            <label>
                <input
                    className={css.filter}
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Filter;

