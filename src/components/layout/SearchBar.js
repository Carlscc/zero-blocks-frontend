import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchUpdates } from '../../actions/updateActions';

const SearchBar = ({ searchUpdates }) => {
    const text = useRef('');

    const onChange = e => {
        searchUpdates(text.current.value)
    };

    return (
        <div>
            <nav style={{ marginBottom: '30px' }} className='purple' >
                <div className="nav-wrapper">
                <a href="#" class="brand-logo left" style={{ paddingLeft: '15px'}}>ZeroBlocks</a>
                <form>
                    <div className="input-field right">
                    <input
                        id="search"
                        type="search"
                        placeholder="Search updates..."
                        ref={text}
                        onChange={onChange}/>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                    </div>
                </form>
                </div>
            </nav>
        </div>
    )
};

SearchBar.protoTypes = {
    searchUpdates: PropTypes.func.isRequired
};

export default connect(null, { searchUpdates })(SearchBar);
