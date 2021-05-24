import React, {Fragment, useEffect} from 'react';
import SearchBar from './components/layout/SearchBar';
import Updates from './components/updates/Updates';
import AddBtn from './components/layout/AddBtn';
import AddUpdateModal  from './components/updates/AddUpdateModal';
import EditUpdateModal  from './components/updates/EditUpdateModal';
import AddMemberModal  from './components/members/AddMemberModal';
import MemberListModal from './components/members/MemberListModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddUpdateModal />
        <EditUpdateModal />
        <AddMemberModal />
        <MemberListModal />
        <Updates />
      </div>
    </Fragment>
    </Provider>
  );
}

export default App;
