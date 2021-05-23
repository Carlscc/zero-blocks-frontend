import React, {Fragment, useEffect} from 'react';
import SearchBar from './components/layout/SearchBar';
import Actions from './components/actions/Actions';
import AddBtn from './components/layout/AddBtn';
import AddActionModal  from './components/actions/AddActionModal';
import EditActionModal  from './components/actions/EditActionModal';
import AddMemberModal  from './components/members/AddMemberModal';
import MemberListModal from './components/members/MemberListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddActionModal />
        <EditActionModal />
        <AddMemberModal />
        <MemberListModal />
        <Actions />
      </div>
    </Fragment>
  );
}

export default App;
