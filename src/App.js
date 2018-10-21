import React, { Component } from 'react';
import WidgetModal from "./WidgetModal";
import WidgetInline from "./WidgetInline";

class App extends Component {
  render() {
    return (
     <div>
        <WidgetModal />

        <WidgetInline />
     </div>
    );
  }
}

export default App;
