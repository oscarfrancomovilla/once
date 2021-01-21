import { useState } from 'react'
import './TabPicker.css';

function TabPicker({ tabs }) {
  
  const [currentTab, setCurrentTab] = useState(tabs[1])
  
  return (
    <div className="tab-picker">
      {tabs.map(tab =>
        <div key={tab} className={'tab' + (tab === currentTab ? ' active' : '')} onClick={() => setCurrentTab(tab)}>
          {tab}
        </div>
      )}
    </div>
  );
}

export default TabPicker;
